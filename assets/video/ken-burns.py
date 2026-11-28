# Hero smyčka ze skutečných fotek realizací – plynulý Ken Burns bez třesu.
# Proč: původní hero-*.mp4 (ffmpeg zoompan) zaokrouhlovaly výřez na celé pixely → posun mezi snímky skákal 0,2 ↔ 0,9 px
# („třese se“), navíc profil High 4:4:4 (yuvj444p) prohlížeče nedekódují hardwarově.
# Tady: výřez se počítá v plovoucí čárce a vzorkuje kubicky (subpixel), smyčka je kruhová (poslední záběr se prolne
# do prvního), výstup H.264 High 4:2:0, faststart. Originály: hero-*-puvodni-trese.mp4.
# Použití: python ken-burns.py pc|mobil
import sys, subprocess, numpy as np, cv2, os
here = os.path.dirname(os.path.abspath(__file__))
# 26. 11. 2026 (klient, video s nápady): jen 4 produkty v pořadí zimní zahrada, zasklená terasa, pergola, stínění
FOTO = ["17372", "24199", "18873", "23329"]
# (zoom od, zoom do, střed x od→do, střed y od→do) – jemný nájezd, směr se střídá
POHYB = [(1.00, 1.07, .50, .52, .50, .48), (1.07, 1.00, .52, .48, .50, .50), (1.00, 1.07, .48, .52, .50, .50),
         (1.07, 1.00, .47, .52, .48, .50)]
# mobil: vodorovný střed výřezu na výšku (podle hlavního objektu fotky)
MOB_X = [.40, .45, .50, .40]
mode = sys.argv[1] if len(sys.argv) > 1 else "pc"
W, H = (1920, 1080) if mode == "pc" else (720, 1280)
# 28. 11. 2026 (design-eye kolo 2): prolnutí 1 s působilo jako dvojexpozice → 0,4 s, střed prolnutí v 4i − 0,5 s,
# kdy JS v index.html mění slovo (i = floor((t + 0,5) / 4))
FPS, STEP, FADE = 30, 4.0, 0.4
SEG = STEP + FADE                    # záběr začíná každé 4 s
OFS = FADE + 0.3                     # záběr i je celý vidět od 4i − 0,3 s
DUR = STEP * len(FOTO)               # 16 s, kruhová smyčka
N = int(round(DUR * FPS))
imgs = [cv2.imread(os.path.join(here, "..", "foto", f + ".jpg")).astype(np.float32) for f in FOTO]

# barevné zpracování jako u původní smyčky: ztmavení + jemná vinětace (text v hero je bílý)
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
r = np.sqrt(((xx - W / 2) / (W / 2)) ** 2 + ((yy - H / 2) / (H / 2)) ** 2) / np.sqrt(2)
vig = (1 - 0.32 * r ** 1.8)[..., None]

def frame_of(i, tau):
    img = imgs[i]; ih, iw = img.shape[:2]
    z0, z1, x0, x1, y0, y1 = POHYB[i]
    p = tau / SEG
    z = z0 + (z1 - z0) * p
    # základní výřez s poměrem stran výstupu
    if W / H > iw / ih: cw = iw; ch = iw * H / W
    else: ch = ih; cw = ih * W / H
    cw /= z; ch /= z
    cx = (x0 + (x1 - x0) * p) * iw
    cy = (y0 + (y1 - y0) * p) * ih
    if mode != "pc": cx = MOB_X[i] * iw + (cx - x0 * iw) * 0.4
    cx = min(max(cx, cw / 2), iw - cw / 2); cy = min(max(cy, ch / 2), ih - ch / 2)
    s = W / cw
    M = np.float32([[s, 0, -(cx - cw / 2) * s], [0, s, -(cy - ch / 2) * s]])
    return cv2.warpAffine(img, M, (W, H), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REFLECT)

out = os.path.join(here, f"hero-{mode}.mp4")
ff = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "bgr24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
                       "-c:v", "libx264", "-preset", "slow", "-crf", "25" if mode == "pc" else "24", "-pix_fmt", "yuv420p", "-profile:v", "high",
                       "-level", "4.1", "-g", "60", "-bf", "2", "-movflags", "+faststart", "-an", out], stdin=subprocess.PIPE)
for n in range(N):
    t = n / FPS
    acc = None
    # záběr i má lokální čas tau = (t - STEP*i + OFS) mod DUR; prvních FADE s se prolíná nad předchozím
    layers = []
    for i in range(len(FOTO)):
        tau = (t - STEP * i + OFS) % DUR
        if tau < SEG: layers.append((tau, i))
    layers.sort(key=lambda x: -x[0])          # starší záběr dospod
    for tau, i in layers:
        f = frame_of(i, tau)
        a = min(1.0, tau / FADE)
        a = a * a * (3 - 2 * a)               # plynulé prolnutí (smoothstep)
        acc = f if acc is None else acc * (1 - a) + f * a
    g = acc * 0.70 * vig
    g = (g - 128 * 0.70) * 1.06 + 128 * 0.70   # mírný kontrast kolem středu
    ff.stdin.write(np.clip(g, 0, 255).astype(np.uint8).tobytes())
    if n == 0: cv2.imwrite(os.path.join(here, f"hero-{mode}-poster.jpg"), np.clip(g, 0, 255).astype(np.uint8), [cv2.IMWRITE_JPEG_QUALITY, 86])
ff.stdin.close(); ff.wait()
print(out, N, "snimku", ff.returncode)
