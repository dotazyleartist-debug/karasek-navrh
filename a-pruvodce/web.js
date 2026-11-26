/* Sdílená hlavička, menu Služby, mobilní celoobrazovkové menu a patička směru A.
   Stránka: <body data-page="uvod|realizace|kategorie|stavba" data-oblast="…">, místo hlavičky <header id="hd"></header>,
   místo patičky <footer id="kontakt"></footer>. Načíst před skriptem stránky. Jen fakta z BRIEF.md. */
(() => {
  const page = document.body.dataset.page || "";
  const obl = () => document.body.dataset.oblast || "";
  const SL = [
    ["zahrada", "Zimní zahrady", "25190", "Sezonní i celoroční, s hliníkovou konstrukcí a skrytým žlabem."],
    ["zaskleni", "Zasklení teras", "29532", "Bezrámové Patio Living Move, rámové Combi a Plus."],
    ["pergola", "Pergoly", "18873", "Hliníkové se skrytým žlabem i bioklimatické s ovládanou střechou."],
    ["stineni", "Stínění", "21454", "Baldachýny, screen rolety, žaluzie a markýzy, i s motory Somfy."]
  ];
  /* Podprodukty z původního webu (Mark 2026-11-20: „přišli jsme o hodně kategorií“); odkaz kategorie.html?oblast=<o>#k-<slug> */
  const SUB = {
    zahrada: [["sezonni", "Sezonní zimní zahrady"], ["celorocni", "Celoroční zimní zahrady"], ["led", "LED osvětlení"]],
    zaskleni: [["ramove", "Rámové zasklení"], ["bezramove", "Bezrámové zasklení"], ["izolacni", "Izolační zasklení Patio Living Therm"], ["lamelove", "Posuvné lamelové stěny Patio Living Tilt"], ["steny", "Dělící stěny a příčky"], ["podlahy", "Podlahy Termowood a WPC"]],
    pergola: [["sklo", "Pergoly se skleněnou střechou"], ["polykarbonat", "Pergoly s polykarbonátem"], ["bioklima", "Lamelové bioklimatické pergoly"], ["carporty", "Carporty"], ["vytahovaci", "Pergoly s vytahovací střechou"], ["latkova", "Pergoly s látkovou střechou"]],
    stineni: [["markyzy", "Markýzy"], ["markyzy-zz", "Markýzy pro zimní zahrady a pergoly"], ["velux", "Doplňky Velux"], ["site", "Sítě proti hmyzu"], ["screen", "Screen rolety ZIP"], ["zaluzie", "Venkovní žaluzie a rolety"], ["vnitrni", "Vnitřní zastínění"], ["baldachyn", "Baldachýnové zastínění"]]
  };
  const cur0 = c => c ? ' aria-current="page"' : "";
  const subL = k => SUB[k].map(([s, n]) => `<li><a href="produkt.html?o=${k}&amp;p=${s}"${cur0(page === "produkt" && obl() === k && new URLSearchParams(location.search).get("p") === s)}>${n}</a></li>`).join("");
  const home = page === "uvod" ? "" : "index.html";
  const ask = page === "uvod" || page === "kategorie" ? "#poptavka" : "poptavka.html";
  /* stránky s vlastním obsahem (Mark 2026-11-23: „klikací prototyp, každá page vlastní obsah“) */
  const P = { postup: "postup.html", showroom: "showroom.html", kontakt: "kontakt.html", onas: "o-nas.html", recenze: "recenze.html", videa: "videa.html" };
  const TEL = `<svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>`;
  const SIP = `<svg aria-hidden="true" viewBox="0 0 20 20"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const cur = c => c ? ' aria-current="page"' : "";
  const tile = ([k, n, f, t], cls) => `<a class="${cls}" href="kategorie.html?oblast=${k}" style="--k:var(--${k})"${cur(page === "kategorie" && obl() === k)}><img src="../assets/foto/${f}.jpg" alt="" loading="lazy"><span class="t"><b>${n}${SIP}</b><span>${t}</span></span></a>`;

  const css = `
.hd{position:sticky;top:0;z-index:60;background:#fff;border-bottom:1px solid var(--line)}
.hd .wrap{display:flex;align-items:center;height:80px;gap:28px}
.hd-logo img{height:52px;width:auto;display:block}
.hd-nav{display:flex;align-items:center;gap:28px;margin-left:auto;height:100%}
.hd-nav>a,.hd-sl{display:flex;align-items:center;gap:8px;height:100%;font:600 17px/1 var(--f);color:var(--ink);text-decoration:none;background:none;border:0;border-bottom:3px solid transparent;border-top:3px solid transparent;padding:0;cursor:pointer}
.hd-nav>a:hover,.hd-sl:hover,.hd-nav>a[aria-current],.hd-sl.cur{border-bottom-color:var(--ink)}
.hd-sl::after{content:"";width:8px;height:8px;border:solid var(--ink);border-width:0 2.2px 2.2px 0;transform:translateY(-3px) rotate(45deg);transition:transform .15s}
.hd-sl[aria-expanded="true"]::after{transform:translateY(2px) rotate(-135deg)}
.hd-tel{display:flex;align-items:center;gap:8px;font-weight:700;font-size:17px;text-decoration:none;color:var(--ink);padding-left:24px;border-left:1px solid var(--line)}
.hd-tel svg{width:18px;height:18px}
.hd .btn-red{padding:14px 20px;font-size:16px}
.hd-mega{display:none;position:absolute;left:0;right:0;top:100%;background:#fff;border-bottom:1px solid var(--line);box-shadow:0 24px 48px rgba(15,20,24,.14)}
.hd-mega.open{display:block}
.hd-mega .wrap{display:block;height:auto;padding-top:28px;padding-bottom:28px}
.hd-mega .g{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.mt{display:flex;flex-direction:column;border-radius:14px;overflow:hidden;text-decoration:none;color:var(--ink);box-shadow:0 0 0 1px var(--line);border-top:6px solid var(--k);transition:box-shadow .15s,transform .15s}
.mt:hover,.mt[aria-current]{box-shadow:0 0 0 2px var(--k),0 10px 24px rgba(15,20,24,.10)}
.mt:hover{transform:translateY(-2px)}
.mt img{width:100%;aspect-ratio:16/10;object-fit:cover}
.mt .t{display:flex;flex-direction:column;gap:6px;padding:14px 16px 18px}
.mt b{display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:19px;font-weight:800;letter-spacing:-.01em}
.mt b svg{width:18px;height:18px;flex:none}
.mt .t>span{font-size:15px;color:var(--muted);line-height:1.45}
.hd-mega .low{display:flex;gap:28px;align-items:center;margin-top:22px;padding-top:18px;border-top:1px solid var(--line);font-size:16px;font-weight:700}
.hd-mega .low a{text-underline-offset:4px}
.hd-mega .low span{margin-left:auto;font-weight:600;color:var(--muted)}
.hd-mega .wrap{padding-top:22px;padding-bottom:22px}
.hd-mega .col{display:flex;flex-direction:column;min-width:0}
.hd-mega .mt img,.hd-mega .mt::before{aspect-ratio:2/1}
.hd-mega .mt .t{padding:12px 14px 14px;gap:4px}
.hd-mega .mt b{font-size:18px}
.hd-mega .mt .t>span{font-size:14px;line-height:1.4}
.ms{list-style:none;margin:12px 0 0;padding:0;display:grid;gap:0}
.ms a{display:block;padding:5px 2px;font-size:15px;font-weight:600;line-height:1.35;color:var(--ink);text-decoration:none;border-radius:6px}
.ms a:hover{text-decoration:underline;text-underline-offset:4px}
.ms a:focus-visible,.mt:focus-visible{outline:3px solid var(--ink);outline-offset:2px}
.hd-mega .low{margin-top:16px;padding-top:14px}
.hd-m{display:none}
.hd-menu{display:none}
body:has(.hd-menu.open) .bn{display:none!important}
.ft{background:var(--ink);color:#d3d9dd;padding:64px 0 36px;font-size:16px}
.ft .cols{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr 1fr;gap:36px}
.ft img{height:56px;width:auto;margin-bottom:18px}
.ft p{margin:0;line-height:1.6}
.ft h3{color:#fff;font-size:17px;font-weight:700;margin:0 0 14px;letter-spacing:0}
.ft ul{list-style:none;padding:0;margin:0;display:grid;gap:8px}
.ft ul+h3{margin-top:28px}
.ft a{color:#fff;text-underline-offset:4px}
.ft li a{text-decoration:none}
.ft li a:hover{text-decoration:underline}
.ft .all{font-weight:700;text-decoration:underline!important}
.ft .strip{display:flex;height:6px;border-radius:3px;overflow:hidden;width:180px;margin-top:22px}
.ft .strip i{flex:1}
.ft .low{margin-top:48px;padding-top:22px;border-top:1px solid #2c353c;display:flex;justify-content:space-between;gap:12px 24px;flex-wrap:wrap;color:#b7c0c6}
.ft .low nav{display:flex;gap:24px;flex-wrap:wrap}
.ft .low a{color:#fff}
@media (max-width:1280px){ .hd-tel span{display:none} .hd-tel{padding-left:16px} }
@media (max-width:1180px){ .hd-nav{gap:20px} .hd .wrap{gap:20px} }
@media (max-width:1100px){
  .hd .wrap{height:72px;gap:6px}
  .hd-nav,.hd-tel,.hd>.wrap>.btn-red,.hd-mega{display:none!important}
  .hd-m{display:flex;align-items:center;gap:6px;margin-left:auto}
  .hd-m a{display:grid;place-items:center;width:48px;height:48px;border-radius:12px;color:var(--ink)}
  .hd-m a svg{width:24px;height:24px}
  .hd-mb{display:inline-flex;align-items:center;gap:8px;height:48px;padding:0 14px;border-radius:12px;border:2px solid var(--ink);background:#fff;font:700 16px/1 var(--f);color:var(--ink);cursor:pointer}
  .hd-mb i{display:grid;gap:4px}
  .hd-mb i b{display:block;width:18px;height:2.4px;border-radius:2px;background:var(--ink)}
  .hd-menu.open{display:block;position:fixed;inset:0;z-index:120;background:#fff;overflow-y:auto;padding:0 16px calc(24px + env(safe-area-inset-bottom))}
  .hd-menu.open>*{max-width:680px;margin-left:auto;margin-right:auto}
  .hm-top{position:sticky;top:0;background:#fff;display:flex;align-items:center;justify-content:space-between;height:64px;border-bottom:1px solid var(--line);margin:0 -16px 18px;padding:0 16px;z-index:2}
  .hd-menu.open>.hm-top{max-width:none;margin:0 -16px 18px}
  .hm-top img{height:42px}
  .hm-x{display:inline-flex;align-items:center;gap:8px;height:48px;padding:0 14px;border-radius:12px;border:2px solid var(--ink);background:#fff;font:700 16px/1 var(--f);color:var(--ink);cursor:pointer}
  .hm-x svg{width:14px;height:14px}
  .hd-menu h2{font-size:15px;font-weight:700;color:var(--muted);letter-spacing:0;margin:0 0 10px}
  .hm-s{list-style:none;margin:0;padding:0;display:grid;gap:10px}
  .hm-s>li{border-radius:14px;box-shadow:0 0 0 1px var(--line);overflow:hidden}
  .hm-r{display:flex;align-items:stretch}
  .hm-t{position:relative;flex:1;display:flex;align-items:center;gap:12px;padding:8px;min-width:0;text-decoration:none;color:var(--ink)}
  .hm-t img{width:76px;height:56px;border-radius:9px;object-fit:cover;flex:none}
  .hm-t b{font-size:18px;font-weight:700;line-height:1.25}
  .hm-t[aria-current] b{text-decoration:underline;text-underline-offset:4px}
  .hm-ab{display:flex;align-items:center;gap:8px;flex:none;min-width:96px;justify-content:center;padding:0 14px;border:0;border-left:1px solid var(--line);background:#fff;font:700 15px/1 var(--f);color:var(--ink);cursor:pointer}
  .hm-ab::after{content:"";width:8px;height:8px;border:solid var(--ink);border-width:0 2.2px 2.2px 0;transform:translateY(-2px) rotate(45deg)}
  .hm-ab[aria-expanded="true"]{background:#f1f3f4}
  .hm-ab[aria-expanded="true"]::after{transform:translateY(2px) rotate(-135deg)}
  .hm-sub{list-style:none;margin:0;padding:6px 14px 10px;border-top:1px solid var(--line);background:#fff}
  .hm-sub a{display:block;padding:11px 4px;font-size:17px;font-weight:600;line-height:1.3;color:var(--ink);text-decoration:none;border-bottom:1px solid var(--line)}
  .hm-sub li:last-child a{border-bottom:0;font-weight:700;text-decoration:underline;text-underline-offset:4px}
  .hm-l{list-style:none;padding:0;margin:22px 0 0;border-top:1px solid var(--line)}
  .hm-l a{display:flex;align-items:center;justify-content:space-between;padding:16px 2px;border-bottom:1px solid var(--line);font-size:20px;font-weight:700;text-decoration:none;color:var(--ink)}
  .hm-l a[aria-current]{text-decoration:underline;text-underline-offset:5px}
  .hm-l a svg{width:20px;height:20px}
  .hm-c{margin-top:22px;display:grid;gap:12px}
  .hm-c .btn{min-height:56px;font-size:18px}
  .hm-c p{color:var(--muted);font-size:16px;text-align:center}
  .ft .cols{grid-template-columns:repeat(3,1fr)}
  .ft .cols>div:first-child{grid-column:1/-1}
}
@media (max-width:820px){
  .hd .wrap{height:64px}
  .hd-logo img{height:42px}
  .ft{padding:44px 0 28px}
  .ft .cols{grid-template-columns:1fr 1fr;gap:28px 20px}
  .ft .cols>.fs{grid-column:1/-1}
  .ft .fs ul{grid-template-columns:1fr 1fr;gap:8px 20px}
  .ft .low{margin-top:32px;font-size:15px}
}
@media (prefers-reduced-motion:reduce){ .mt,.hd-sl::after,.hm-ab::after{transition:none} }`;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  const hd = document.getElementById("hd");
  if (hd) {
    hd.className = "hd";
    const ca = c => cur(c);
    const realiz = page === "realizace" || page === "stavba" ;
    hd.innerHTML = `<div class="wrap">
  <a class="hd-logo" href="index.html" aria-label="Karásek s.r.o. – úvod"><img src="../assets/logo.svg" alt="Karásek" width="104" height="52"></a>
  <nav class="hd-nav" aria-label="Hlavní menu">
    <button type="button" class="hd-sl${page === "kategorie" || page === "produkt" ? " cur" : ""}" aria-expanded="false" aria-controls="hdMega">Služby</button>
    <a href="realizace.html"${ca(realiz)}>Realizace</a>
    <a href="radce.html"${ca(page === "radce")}>Rádce</a>
    <a href="${P.postup}"${ca(page === "postup")}>Jak to probíhá</a>
    <a href="${P.showroom}"${ca(page === "showroom")}>Showroom</a>
    <a href="${P.kontakt}"${ca(page === "kontakt")}>Kontakt</a>
  </nav>
  <a class="hd-tel" href="tel:+420777727328" aria-label="Zavolat +420 777 727 328">${TEL}<span>+420 777 727 328</span></a>
  <a class="btn btn-red" href="${ask}" data-hd-ask>Nezávazná poptávka</a>
  <div class="hd-m">
    <a href="tel:+420777727328" aria-label="Zavolat +420 777 727 328">${TEL}</a>
    <button type="button" class="hd-mb" aria-expanded="false" aria-controls="hdMenu"><i aria-hidden="true"><b></b><b></b><b></b></i>Menu</button>
  </div>
</div>
<div class="hd-mega" id="hdMega"><div class="wrap">
  <div class="g">${SL.map(s => `<div class="col">${tile(s, "mt")}<ul class="ms" aria-label="${s[1]}: typy">${subL(s[0])}</ul></div>`).join("")}</div>
  <div class="low"><a href="realizace.html">Všechny hotové stavby s filtrem</a><a href="radce.html">Rádce: jak vybrat</a><a href="${P.postup}">Jak to probíhá</a><a href="${P.videa}">Videa z realizací</a><span>Showroom Nemanická 5, České Budějovice · Po–Pá 8–16</span></div>
</div></div>
<div class="hd-menu" id="hdMenu" role="dialog" aria-modal="true" aria-label="Menu">
  <div class="hm-top"><img src="../assets/logo.svg" alt="Karásek" width="84" height="42"><button type="button" class="hm-x"><svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>Zavřít</button></div>
  <h2>Služby</h2>
  <ul class="hm-s">${SL.map(([k, n, f]) => `<li><div class="hm-r"><a class="hm-t" href="kategorie.html?oblast=${k}"${ca(page === "kategorie" && obl() === k)}><img src="../assets/foto/${f}.jpg" alt="" loading="lazy"><b>${n}</b></a><button type="button" class="hm-ab" aria-expanded="false" aria-controls="hmS-${k}" aria-label="Typy: ${n}">Typy</button></div>
    <ul class="hm-sub" id="hmS-${k}" hidden>${subL(k)}<li><a href="kategorie.html?oblast=${k}">Vše o službě ${n}</a></li></ul></li>`).join("")}</ul>
  <ul class="hm-l">
    <li><a href="realizace.html"${ca(realiz)}>Realizace${SIP}</a></li>
    <li><a href="radce.html"${ca(page === "radce")}>Rádce${SIP}</a></li>
    <li><a href="${P.postup}"${ca(page === "postup")}>Jak to probíhá${SIP}</a></li>
    <li><a href="${P.showroom}"${ca(page === "showroom")}>Showroom${SIP}</a></li>
    <li><a href="${P.recenze}"${ca(page === "recenze")}>Recenze${SIP}</a></li>
    <li><a href="${P.onas}"${ca(page === "onas")}>O nás${SIP}</a></li>
    <li><a href="${P.kontakt}"${ca(page === "kontakt")}>Kontakt${SIP}</a></li>
  </ul>
  <div class="hm-c">
    <a class="btn btn-red" href="${ask}" data-hd-ask>Nezávazná poptávka</a>
    <a class="btn btn-line" href="tel:+420777727328">${TEL.replace("<svg", '<svg width="20" height="20"')}+420 777 727 328</a>
    <p>Showroom Nemanická 5, České Budějovice · Po–Pá 8–16</p>
  </div>
</div>`;
    const sl = hd.querySelector(".hd-sl"), mega = hd.querySelector(".hd-mega");
    let t;
    const setM = on => { clearTimeout(t); mega.classList.toggle("open", on); sl.setAttribute("aria-expanded", String(on)); };
    sl.addEventListener("click", () => setM(sl.getAttribute("aria-expanded") !== "true"));
    if (matchMedia("(hover: hover)").matches) {
      sl.addEventListener("mouseenter", () => { clearTimeout(t); t = setTimeout(() => setM(true), 120); });
      [sl, mega].forEach(el => el.addEventListener("mouseleave", () => { clearTimeout(t); t = setTimeout(() => setM(false), 260); }));
      mega.addEventListener("mouseenter", () => clearTimeout(t));
    }
    document.addEventListener("click", e => { if (!e.target.closest(".hd-sl,.hd-mega")) setM(false); });
    /* klávesnice: Tab (nebo šipka dolů) ze „Služby“ vede do otevřeného menu, Tab z jeho konce na další položku hlavního menu, Esc zavře */
    const megaL = () => [...mega.querySelectorAll("a")];
    sl.addEventListener("keydown", e => {
      if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey && mega.classList.contains("open"))) { e.preventDefault(); setM(true); megaL()[0].focus(); }
    });
    mega.addEventListener("keydown", e => {
      if (e.key !== "Tab") return;
      const L = megaL();
      if (!e.shiftKey && document.activeElement === L[L.length - 1]) { e.preventDefault(); setM(false); sl.nextElementSibling.focus(); }
      else if (e.shiftKey && document.activeElement === L[0]) { e.preventDefault(); sl.focus(); }
    });
    mega.addEventListener("focusout", e => { if (!e.relatedTarget || !e.relatedTarget.closest(".hd-mega,.hd-sl")) setM(false); });
    const mb = hd.querySelector(".hd-mb"), menu = hd.querySelector(".hd-menu"), x = hd.querySelector(".hm-x");
    const setMenu = on => { menu.classList.toggle("open", on); mb.setAttribute("aria-expanded", String(on)); document.body.style.overflow = on ? "hidden" : ""; (on ? x : mb).focus({ preventScroll: true }); };
    mb.addEventListener("click", () => setMenu(true));
    x.addEventListener("click", () => setMenu(false));
    menu.addEventListener("click", e => {
      const ab = e.target.closest(".hm-ab");
      if (ab) { const on = ab.getAttribute("aria-expanded") !== "true"; ab.setAttribute("aria-expanded", String(on)); document.getElementById(ab.getAttribute("aria-controls")).hidden = !on; return; }
      if (e.target.closest("a")) setMenu(false);
    });
    addEventListener("keydown", e => { if (e.key !== "Escape") return; if (menu.classList.contains("open")) setMenu(false); else if (mega.classList.contains("open")) { setM(false); sl.focus(); } });
  }

  const ft = document.getElementById("kontakt");
  if (ft && ft.tagName === "FOOTER") {
    ft.className = "ft";
    const li = (h, n, ex = "") => `<li><a href="${h}"${ex}>${n}</a></li>`;
    ft.innerHTML = `<div class="wrap"><nav class="cols" aria-label="Mapa webu">
  <div><img src="../assets/logo-bila.svg" alt="Karásek" width="112" height="56"><p>Karásek s.r.o.<br>Nemanická 5, České Budějovice<br>Showroom Po–Pá 8–16<br><a href="tel:+420777727328">+420 777 727 328</a><br>IČO 25164589</p></div>
  <div class="fs"><h3>Služby</h3><ul>${SL.map(([k, n]) => li(`kategorie.html?oblast=${k}`, n)).join("")}${li(`${home}#produkty`, "Všechny typy staveb", ' class="all"')}</ul></div>
  <div><h3>Realizace</h3><ul>${li("realizace.html", "Hotové stavby")}${li(P.recenze, "Recenze")}${li(P.videa, "Videa")}</ul>
    <h3>Rádce</h3><ul>${li("radce.html", "Jak vybrat a na co myslet")}</ul></div>
  <div><h3>O firmě</h3><ul>${li(P.onas, "O nás")}${li(P.postup, "Jak to probíhá")}${li(P.showroom, "Showroom")}${li(P.kontakt, "Kontakt")}${li("poptavka.html", "Nezávazná poptávka")}</ul></div>
  <div><h3>Právní informace</h3><ul>${li("https://karasek.cz/ochrana-osobnich-udaju/", "Ochrana osobních údajů")}${li("https://karasek.cz/cookies-web/", "Cookies")}</ul></div>
</nav><div class="low"><span>© Karásek s.r.o. · Nemanická 5, České Budějovice · IČO 25164589</span><span>Zimní zahrady · Zasklení teras · Pergoly · Stínění</span></div></div>`;
  }

  /* ---------- Poptávkový panel + karta realizace (Mark 2026-11-20: „hned form modul“, „prodávat, co jsme dělali“) ----------
     API: KRpoptat({id, oblast, zamer}) otevře poptávkový panel (PC zprava 480 px, mobil celá obrazovka zdola);
          id = stavba z KR (miniatura, předvyplněná zpráva), oblast = zahrada|zaskleni|pergola|stineni, zamer = podobna|info.
          KRpoptat({dotaz:true, tema, id}) otevře režim „Zeptejte se, poradíme“ (tema = Co vybrat|Na čem závisí cena|Zaměření a montáž|Showroom|Něco jiného).
          KRpoptat.zavrit() panel zavře. Tlačítko [data-poptat="id"] (+ data-oblast, data-dotaz) otevře panel bez vlastního JS.
          KRpoptat.vlozit(el, {id, oblast}) vloží stejný formulář přímo do stránky (detail stavby).
          KRkarta(stavba, {f}) vrátí HTML karty realizace (.card.rk). Tlačítka s [data-poptat="id"] otevřou panel.
     Formulář je demo: nic se neodesílá, po odeslání jen poděkování. Fakta jen z BRIEF.md (telefon, showroom). */
  const MES = ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"];
  const OBL = [["zahrada", "Zimní zahrada"], ["zaskleni", "Zasklení terasy"], ["pergola", "Pergola"], ["stineni", "Stínění"]];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const najdi = id => id && window.KR ? KR.stavby.find(s => s.id === String(id)) || null : null;
  const kdy = d => { const [y, m] = d.split("-"); return `${MES[+m - 1]} ${y}`; };

  st.textContent += `
.rk{position:relative;display:flex;flex-direction:column;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 0 0 1px var(--line)}
.rk .ph{overflow:hidden;background:var(--soft)}
.rk .ph img{width:100%;height:auto;aspect-ratio:4/3;object-fit:cover}
.rk .tx{display:flex;flex-direction:column;gap:8px;padding:18px 22px 22px;flex:1}
.rk .meta{font-size:14px;font-weight:600;color:var(--muted);line-height:1.4}
.rk .meta b{font-weight:700;color:var(--ink);text-transform:uppercase;letter-spacing:.04em}
.rk h3{font-size:20px;line-height:1.3;font-weight:700;letter-spacing:-.01em;margin:0}
.rk h3 a{color:var(--ink);text-decoration:none}
.rk h3 a::after{content:"";position:absolute;inset:0;z-index:1}
.rk:hover h3 a{text-decoration:underline;text-underline-offset:4px;text-decoration-thickness:1.5px}
.rk h3 a:focus-visible{outline:0}
.rk:has(h3 a:focus-visible){outline:3px solid var(--ink);outline-offset:3px}
.rk .ex{color:var(--muted);font-size:16px;line-height:1.55;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin:0}
.rk .facts{display:flex;flex-wrap:wrap;gap:6px;list-style:none;margin:2px 0 0;padding:0}
.rk .facts li{font-size:14px;font-weight:600;padding:5px 10px;border-radius:8px;background:var(--soft);color:var(--ink);line-height:1.3}
.rk .facts li.hit{background:#fff;box-shadow:inset 0 0 0 1.5px var(--ink)}
.rk .go{margin-top:auto;padding-top:12px;display:flex}
.rk .go .btn{position:relative;z-index:2;padding:13px 20px;font-size:16px}
.kp{position:fixed;inset:0;z-index:200;display:none}
.kp.open{display:block}
.kp-scrim{position:absolute;inset:0;background:rgba(10,14,17,.55);opacity:0;transition:opacity .25s}
.kp.in .kp-scrim{opacity:1}
.kp-box{position:absolute;top:50%;left:50%;width:min(680px,calc(100% - 48px));max-height:calc(100vh - 64px);background:#fff;display:flex;flex-direction:column;border-radius:22px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.28);opacity:0;transform:translate(-50%,-46%) scale(.98);transition:transform .28s ease,opacity .2s ease}
.kp.in .kp-box{opacity:1;transform:translate(-50%,-50%)}
form.kf{display:grid;grid-template-columns:1fr!important;background:none!important;box-shadow:none!important;padding:0!important;border-radius:0!important}
.kp-top{display:flex;align-items:center;justify-content:space-between;gap:12px;height:68px;padding:0 16px 0 28px;border-bottom:1px solid var(--line);flex:none}
.kp-top p{margin:0;font-size:15px;font-weight:700;color:var(--muted)}
.kp-x{display:inline-flex;align-items:center;gap:8px;height:44px;padding:0 14px;border-radius:12px;border:1px solid #c3cad0;background:#fff;font:700 16px/1 var(--f);color:var(--ink);cursor:pointer}
.kp-x:hover{border-color:var(--ink)}
.kp-x svg{width:12px;height:12px}
.kp-body{flex:1;overflow-y:auto;overscroll-behavior:contain;padding:24px 28px 32px}
.kp-st{display:grid;grid-template-columns:88px 1fr;gap:14px;align-items:center;padding:10px;border-radius:12px;background:var(--soft);margin-bottom:20px}
.kp-st img{width:88px;height:66px;object-fit:cover;border-radius:8px}
.kp-st span{display:block;font-size:14px;font-weight:600;color:var(--muted)}
.kp-st b{display:block;font-size:16px;font-weight:700;line-height:1.35}
.kp h2,.kf-box h2{font-size:26px;line-height:1.15;font-weight:700;letter-spacing:-.02em;margin:0}
.kp-lead,.kf-box .kf-lead{color:var(--muted);font-size:16px;margin:8px 0 20px}
.kf{display:grid;gap:16px}
.kf fieldset{border:0;margin:0;padding:0;min-width:0}
.kf legend{font-size:15px;font-weight:700;padding:0;margin-bottom:8px}
.kf-ch{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.kf-ch label{display:flex;align-items:center;gap:10px;min-height:60px;padding:10px 12px;border:1px solid #c3cad0;border-radius:12px;background:#fff;font-size:15px;font-weight:600;line-height:1.3;cursor:pointer}
.kf-ch label:hover{border-color:var(--ink)}
.kf-ch input{position:absolute;opacity:0;width:1px;height:1px;margin:0}
.kf-ch .r{width:20px;height:20px;border-radius:50%;border:2px solid #6b757c;flex:none;display:grid;place-items:center;background:#fff}
.kf-ch input:checked+.r{border-color:var(--ink)}
.kf-ch input:checked+.r::after{content:"";width:10px;height:10px;border-radius:50%;background:var(--ink)}
.kf-ch label:has(input:checked){border-color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);background:#f1f3f4}
.kf-ch label:has(input:focus-visible){outline:3px solid var(--ink);outline-offset:2px}
.kf-2{display:grid;grid-template-columns:1fr 1fr;gap:16px 12px}
.kf-f{display:grid;gap:6px;min-width:0;align-content:start}
.kf-f label{font-size:15px;font-weight:600}
.kf-f label i{font-style:normal;font-weight:500;color:var(--muted)}
.kf input[type=text],.kf input[type=tel],.kf input[type=email],.kf textarea{width:100%;min-height:50px;padding:12px 14px;border:1px solid #6b757c;border-radius:10px;background:#fff;font:500 17px/1.4 var(--f);color:var(--ink)}
.kf textarea{min-height:100px;resize:vertical}
@media (min-width:821px){ .kp .kf{gap:12px} .kp .kf textarea{min-height:72px} .kp-body{padding:20px 28px 24px} .kp .kp-st{margin-bottom:14px} .kp .kp-lead{margin:6px 0 14px} .kp .kf-ch label{min-height:52px} }
.kf input:focus,.kf textarea:focus{outline:2px solid var(--ink);outline-offset:1px;border-color:var(--ink)}
.kf [aria-invalid="true"]{border-color:#b51f28!important;box-shadow:inset 0 0 0 1px #b51f28}
.kf-err{font-size:14px;font-weight:600;color:#b51f28;margin:0}
.kf-err:empty{display:none}
.kf-gd{margin:0;font-size:14px;line-height:1.45;color:var(--muted)}
.kf-cb{display:flex;gap:10px;align-items:flex-start;font-size:14px;line-height:1.45;color:var(--muted);cursor:pointer}
.kf-cb input{width:20px;height:20px;margin:1px 0 0;flex:none;accent-color:var(--ink)}
.kf .btn-red{width:100%;min-height:56px;font-size:17px}
.kf-tel{margin:0;text-align:center;font-size:16px;color:var(--muted)}
.kf-tel a{font-weight:700;color:var(--ink);text-underline-offset:4px;white-space:nowrap}
.kf-dik{padding:22px 22px 24px;border-radius:14px;background:#f1f3f4;box-shadow:inset 0 0 0 1px var(--line)}
.kf-dik:focus{outline:0}
.kf-dik h3{font-size:22px;font-weight:700;margin:0 0 8px}
.kf-dik p{margin:0 0 8px;color:var(--ink)}
.kf-dik a{font-weight:700}
.bn{display:none}
@media (max-width:820px){
  .kp-box{top:auto;left:0;right:0;bottom:0;width:100%;max-height:calc(100vh - 24px);border-radius:20px 20px 0 0;opacity:1;transform:translateY(100%)}
  .kp.in .kp-box{transform:none}
  .kp-top{height:60px;padding:0 12px 0 16px}
  .kp-body{padding:18px 16px calc(28px + env(safe-area-inset-bottom))}
  .kp h2,.kf-box h2{font-size:24px}
  .rk .tx{padding:14px 16px 16px;gap:6px}
  .rk .meta{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .rk h3{font-size:18px}
  .rk .ex{display:none}
  .rk .facts{flex-wrap:nowrap;overflow:hidden;mask-image:linear-gradient(90deg,#000 85%,transparent)}
  .rk .facts li{white-space:nowrap}
  .rk .go{padding-top:8px}
  .rk .go .btn{width:100%;min-height:50px}
  .kf input[type=text],.kf input[type=tel],.kf input[type=email]{min-height:52px}
  .mbar{display:none!important}
  body{padding-bottom:calc(66px + env(safe-area-inset-bottom))!important}
  .bn{display:grid;grid-template-columns:repeat(4,1fr);position:fixed;left:0;right:0;bottom:0;z-index:90;height:calc(66px + env(safe-area-inset-bottom));padding:0 6px env(safe-area-inset-bottom);background:#fff;border-top:1px solid var(--line);box-shadow:0 -6px 18px rgba(15,20,24,.06)}
  .bn>a,.bn>button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;margin:6px 3px;border:0;border-radius:12px;background:none;font:600 14px/1.1 var(--f);color:var(--ink);text-decoration:none;cursor:pointer;padding:0}
  .bn svg{width:24px;height:24px}
  .bn [aria-current]{font-weight:700;background:#f1f3f4}
  .bn .bn-red{background:var(--red);color:#fff;font-weight:700}
  .bn .bn-red:active{background:var(--red-h)}
}
@media (max-width:520px){ .kf-2{grid-template-columns:1fr} }
@media (prefers-reduced-motion:reduce){ .kp-box,.kp-scrim{transition:none} }`;

  const X = `<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
  /* Formulář má 2 režimy: poptávka (výchozí) a dotaz ({dotaz:true}, pro nerozhodnuté: téma, „Co vás zajímá?“, stačí e-mail NEBO telefon).
     Přepnutí režimu vyšle na kontejneru událost „kf-rezim“ (detail {dotaz, s}), panel i detail stavby podle ní mění nadpis. */
  let nForm = 0;
  const TEMATA = ["Co vybrat", "Na čem závisí cena", "Zaměření a montáž", "Showroom", "Něco jiného"];
  const NADPIS = (d, s) => d ? ["Zeptejte se, poradíme", "Napište, co vás zajímá. Stačí e-mail, nebo telefon.", "Dotaz"]
    : s ? ["Máte zájem o podobnou stavbu?", "Napište pár údajů, ozveme se vám a domluvíme další postup.", "Nezávazná poptávka"]
    : ["Nezávazná poptávka", "Vyberte, o co máte zájem, a napište pár údajů. Ozveme se vám.", "Nezávazná poptávka"];
  const zprava = (s, zam) => !s ? "" : zam === "info"
    ? `Dobrý den, chci víc informací o vaší stavbě „${s.n}“. `
    : zam === "dotaz" ? `Dotaz ke stavbě „${s.n}“: `
    : `Dobrý den, líbí se mi vaše stavba „${s.n}“ a mám zájem o podobnou. `;

  function formular(el, o = {}, keep = {}) {
    const s = najdi(o.id), p = "kf" + (++nForm), ob = o.oblast || (s ? s.typ[0] : ""), D = !!o.dotaz;
    const radio = (name, v, t, on) => `<label><input type="radio" name="${name}" value="${v}"${on ? " checked" : ""}><span class="r" aria-hidden="true"></span>${t}</label>`;
    const fld = (n, lab, typ, ac, req, extra = "") => `<div class="kf-f"><label for="${p}${n}">${lab}</label><input type="${typ}" id="${p}${n}" name="${n}" autocomplete="${ac}"${typ === "tel" ? ' inputmode="tel"' : ""}${req ? ` required aria-describedby="${p}${n}E"` : ""} value="${esc(keep[n] || "")}"${extra}>${req ? `<p class="kf-err" id="${p}${n}E"></p>` : ""}</div>`;
    const zamer = s ? `<fieldset><legend>Co si přejete?</legend><div class="kf-ch z3">${radio("zamer", "podobna", "Chci podobnou stavbu", !D && o.zamer !== "info")}${radio("zamer", "info", "Chci víc informací o této stavbě", !D && o.zamer === "info")}${radio("zamer", "dotaz", "Mám jen dotaz", D)}</div></fieldset>` : "";
    const prepni = s ? "" : `<button type="button" class="kf-sw" data-kf-sw>${D ? "Chci raději nezávaznou poptávku" : "Nevíte si rady? Napište nám jen dotaz"}</button>`;
    el.innerHTML = D ? `<form class="kf" novalidate>
  ${zamer}
  <fieldset><legend>Téma <i class="kf-i">(nepovinné)</i></legend><div class="kf-tags">${TEMATA.map(t => `<label><input type="radio" name="tema" value="${t}"${o.tema === t ? " checked" : ""}><span>${t}</span></label>`).join("")}</div></fieldset>
  <div class="kf-f"><label for="${p}z">Co vás zajímá?</label><textarea id="${p}z" name="zprava" rows="4" required aria-describedby="${p}zE" placeholder="Například jaký systém zasklení se hodí k našemu domu…">${esc(keep.zprava || zprava(s, "dotaz"))}</textarea><p class="kf-err" id="${p}zE"></p></div>
  <div class="kf-2">${fld("email", "E-mail", "email", "email", true)}${fld("telefon", "Telefon", "tel", "tel", false)}</div>
  <p class="kf-hint">Stačí vyplnit jedno, e-mail, nebo telefon.</p>
  ${fld("jmeno", 'Jméno <i>(nepovinné)</i>', "text", "name", false)}
  ${s ? `<input type="hidden" name="stavba" value="${s.id}">` : ""}
  <p class="kf-gd">Odesláním souhlasíte se zpracováním údajů pro vyřízení dotazu.</p>
  <button type="submit" class="btn btn-red">Poslat dotaz</button>
  ${prepni}
  <p class="kf-tel">nebo zavolejte <a href="tel:+420777727328">777 727 328</a></p>
</form>` : `<form class="kf" novalidate>
  ${s ? zamer : `<fieldset><legend>O co máte zájem?</legend><div class="kf-ch">${OBL.map(([k, n]) => radio("oblast", k, n, k === ob)).join("")}</div></fieldset>`}
  <div class="kf-2">${fld("jmeno", "Jméno a příjmení", "text", "name", true)}${fld("telefon", "Telefon", "tel", "tel", true)}${fld("email", 'E-mail <i>(nepovinný)</i>', "email", "email", false)}${fld("obec", "Obec", "text", "address-level2", false)}</div>
  <div class="kf-f"><label for="${p}z">Zpráva</label><textarea id="${p}z" name="zprava" rows="3" placeholder="Co plánujete, přibližné rozměry, fotka domu…">${esc(keep.zprava || zprava(s, o.zamer === "info" ? "info" : "podobna"))}</textarea></div>
  ${s ? `<input type="hidden" name="stavba" value="${s.id}">` : ""}
  <p class="kf-gd">Odesláním souhlasíte se zpracováním údajů pro vyřízení poptávky.</p>
  <button type="submit" class="btn btn-red">Odeslat poptávku</button>
  ${prepni}
  <p class="kf-tel">nebo zavolejte <a href="tel:+420777727328">777 727 328</a></p>
</form>`;
    const f = el.querySelector("form"), ta = f.zprava;
    el.dispatchEvent(new CustomEvent("kf-rezim", { detail: { dotaz: D, s }, bubbles: true }));
    const prekresli = (no, fokus) => {
      const k = {}; ["jmeno", "telefon", "email", "obec"].forEach(n => { if (f[n]) k[n] = f[n].value; });
      const auto = [zprava(s, "podobna"), zprava(s, "info"), zprava(s, "dotaz"), ""];
      if (!auto.includes(ta.value)) k.zprava = ta.value;
      formular(el, { ...o, ...no }, k);
      const t = el.querySelector(fokus); if (t) t.focus();
    };
    f.addEventListener("change", e => {
      if (e.target.name !== "zamer" || !s) return;
      const v = e.target.value;
      if ((v === "dotaz") !== D) return prekresli({ dotaz: v === "dotaz", zamer: v }, `input[name=zamer][value=${v}]`);
      if (ta.value === zprava(s, v === "info" ? "podobna" : "info")) ta.value = zprava(s, v);
    });
    const sw = f.querySelector("[data-kf-sw]");
    if (sw) sw.addEventListener("click", () => prekresli({ dotaz: !D }, D ? "input[name=oblast]" : "input[name=tema]"));
    f.addEventListener("submit", e => {
      e.preventDefault();
      const tel = (f.telefon.value.match(/\d/g) || []).length >= 9, mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim());
      const chyby = D ? [
        [f.zprava, f.zprava.value.replace(zprava(s, "dotaz"), "").trim().length < 3 ? "Napište, prosím, co vás zajímá." : ""],
        [f.email, mail || tel ? "" : "Vyplňte e-mail, nebo telefon, ať vám můžeme odpovědět."]
      ] : [
        [f.jmeno, f.jmeno.value.trim().length < 2 ? "Napište, prosím, své jméno." : ""],
        [f.telefon, tel ? "" : "Napište telefon, ať se vám můžeme ozvat."]
      ];
      chyby.forEach(([i, t]) => { i.setAttribute("aria-invalid", String(!!t)); document.getElementById(i.getAttribute("aria-describedby")).textContent = t; });
      const prvni = chyby.find(c => c[1]); if (prvni) { prvni[0].focus(); return; }
      /* demo: bez sítě, jen poděkování */
      const kam = D ? (mail ? "e-mail " + f.email.value.trim() : "telefon " + f.telefon.value.trim()) : "telefon " + f.telefon.value.trim();
      el.innerHTML = `<div class="kf-dik" role="status" tabindex="-1"><h3>${D ? "Děkujeme za dotaz" : "Děkujeme, poptávku máme"}</h3><p>${D ? "Odpovíme vám" : "Ozveme se vám"} na ${esc(kam)}${D ? "." : " a domluvíme další postup."}</p><p>Nechcete čekat? Zavolejte <a href="tel:+420777727328">777 727 328</a>.</p></div>`;
      el.querySelector(".kf-dik").focus();
    });
    return f;
  }
  st.textContent += `
.kf legend .kf-i,.kf-f label i{font-style:normal;font-weight:500;color:var(--muted)}
.kf-ch.z3 label:last-child{grid-column:1/-1;min-height:48px}
.kf-tags{display:flex;flex-wrap:wrap;gap:8px}
.kf-tags label{position:relative;cursor:pointer}
.kf-tags input{position:absolute;opacity:0;width:1px;height:1px;margin:0}
.kf-tags span{display:inline-flex;align-items:center;min-height:44px;padding:8px 14px;border:1px solid #c3cad0;border-radius:999px;background:#fff;font-size:15px;font-weight:600;color:var(--ink)}
.kf-tags label:hover span{border-color:var(--ink)}
.kf-tags input:checked+span{border-color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink);background:#f1f3f4;font-weight:700}
.kf-tags input:focus-visible+span{outline:3px solid var(--ink);outline-offset:2px}
.kf-hint{margin:-6px 0 0;font-size:14px;color:var(--muted)}
.kf-sw{justify-self:center;background:none;border:0;padding:6px 2px;font:700 16px/1.3 var(--f);color:var(--ink);text-decoration:underline;text-underline-offset:4px;cursor:pointer}`;

  let kp, opener;
  const fokusovatelne = r => [...r.querySelectorAll('a[href],button:not([disabled]),input:not([type=hidden]),textarea,[tabindex="-1"].kf-dik')].filter(x => x.getClientRects().length);
  function zavrit() {
    if (!kp || !kp.classList.contains("open")) return;
    kp.classList.remove("in"); document.body.style.overflow = "";
    setTimeout(() => kp.classList.remove("open"), matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 280);
    if (opener && opener.isConnected && opener.getClientRects().length) opener.focus({ preventScroll: true });
  }
  function KRpoptat(o = {}) {
    if (!kp) {
      kp = document.createElement("div"); kp.className = "kp";
      kp.innerHTML = `<div class="kp-scrim"></div><div class="kp-box" role="dialog" aria-modal="true" aria-labelledby="kpH"><div class="kp-top"><p>Nezávazná poptávka</p><button type="button" class="kp-x">${X}Zavřít</button></div><div class="kp-body"></div></div>`;
      document.body.appendChild(kp);
      kp.querySelector(".kp-x").addEventListener("click", zavrit);
      kp.querySelector(".kp-scrim").addEventListener("click", zavrit);
      kp.addEventListener("kf-rezim", e => {
        const [h, l, t] = NADPIS(e.detail.dotaz, e.detail.s);
        kp.querySelector("#kpH").textContent = h; kp.querySelector(".kp-lead").textContent = l; kp.querySelector(".kp-top p").textContent = t;
      });
      kp.addEventListener("keydown", e => {
        if (e.key === "Escape") { e.stopPropagation(); zavrit(); return; }
        if (e.key !== "Tab") return;
        const L = fokusovatelne(kp.querySelector(".kp-box")); if (!L.length) return;
        if (e.shiftKey && document.activeElement === L[0]) { e.preventDefault(); L[L.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === L[L.length - 1]) { e.preventDefault(); L[0].focus(); }
      });
    }
    const s = najdi(o.id);
    opener = document.activeElement;
    const body = kp.querySelector(".kp-body");
    body.innerHTML = `${s ? `<div class="kp-st"><img src="../assets/foto/${s.id}.jpg" alt=""><div><span>Stavba</span><b>${esc(s.n)}</b></div></div>` : ""}
<h2 id="kpH" tabindex="-1"></h2><p class="kp-lead"></p><div class="kp-f"></div>`;
    formular(body.querySelector(".kp-f"), o);
    body.scrollTop = 0;
    kp.classList.add("open"); document.body.style.overflow = "hidden";
    requestAnimationFrame(() => requestAnimationFrame(() => { kp.classList.add("in"); kp.querySelector("#kpH").focus({ preventScroll: true }); }));
  }
  /* KRpoptat.vlozit(el, o): stejný formulář přímo do stránky; nadpis kolem si stránka mění přes událost „kf-rezim“. */
  KRpoptat.vlozit = (el, o = {}) => formular(el, o);
  KRpoptat.nadpis = NADPIS;
  KRpoptat.zavrit = zavrit;
  window.KRpoptat = KRpoptat;

  window.KRkarta = (s, o = {}) => {
    const f = o.f || {};
    const typ = (f.typ && s.typ.includes(f.typ) ? [f.typ] : s.typ).map(k => KR.label.typ[k]).join(" + ");
    const meta = `<b>${esc(typ)}</b>${s.lok ? " · " + esc(KR.label.lokalita[s.lok]) : ""} · ${kdy(s.d)}`;
    const facts = [...s.sys.slice(0, s.barva ? 2 : 3).map(k => [KR.label.system[k], f.system === k]), ...(s.barva ? [[KR.label.barva[s.barva], f.barva === s.barva]] : [])];
    const H = o.h || "h3";
    return `<article class="card rk"><div class="ph"><img src="../assets/foto/${s.id}.jpg" alt="${esc(s.n)}" loading="lazy" width="944" height="708"></div>
<div class="tx"><p class="meta">${meta}</p><${H}><a href="stavba.html?id=${s.id}">${esc(s.n)}</a></${H}><p class="ex">${esc(s.vytah)}</p>
${facts.length ? `<ul class="facts" aria-label="Systém a barva">${facts.map(([t, hit]) => `<li${hit ? ' class="hit"' : ""}>${esc(t)}</li>`).join("")}</ul>` : ""}
<div class="go"><button type="button" class="btn btn-line" data-poptat="${s.id}" aria-label="Mám zájem o podobnou stavbu: ${esc(s.n)}">Mám zájem o podobnou</button></div></div></article>`;
  };
  window.KRkdy = kdy;

  document.addEventListener("click", e => {
    const b = e.target.closest("[data-poptat]"); if (!b) return;
    e.preventDefault(); KRpoptat({ id: b.dataset.poptat, oblast: b.dataset.oblast || "", dotaz: "dotaz" in b.dataset, tema: b.dataset.tema || "" });
  });
  /* na realizacích a detailu otevře hlavní „Nezávazná poptávka“ panel místo odchodu na úvod */
  const askO = () => ({ id: document.body.dataset.stavba || "", oblast: page === "realizace" ? "" : obl() });
  if (page !== "uvod" && page !== "kategorie" && page !== "poptavka") document.querySelectorAll("[data-hd-ask]").forEach(a => a.addEventListener("click", e => {
    e.preventDefault(); KRpoptat(askO());
  }));

  /* ---------- mobilní spodní navigace (Mark 2026-11-20: „vlastní bottom bar na lepší procházení“) ---------- */
  const I = d => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
  const S = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const bn = document.createElement("nav");
  bn.className = "bn"; bn.setAttribute("aria-label", "Rychlá navigace");
  const pop = page === "uvod" || page === "kategorie";
  bn.innerHTML = `<button type="button" class="bn-sl"${document.getElementById("hdMenu") ? "" : " hidden"}>${I(`<path ${S} d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>`)}Služby</button>
<a href="realizace.html"${cur(page === "realizace" || page === "stavba")}>${I(`<rect ${S} x="3" y="5" width="18" height="14" rx="2"/><path ${S} d="M3 16l5-5 4 4 3-3 6 6"/><circle cx="16" cy="9" r="1.6" fill="currentColor"/>`)}Realizace</a>
<a href="tel:+420777727328" aria-label="Zavolat +420 777 727 328">${I(`<path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/>`)}Zavolat</a>
${pop ? `<a class="bn-red" href="#poptavka">` : `<button type="button" class="bn-red">`}${I(`<path ${S} d="M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4"/>`)}Poptávka${pop ? "</a>" : "</button>"}`;
  document.body.appendChild(bn);
  const bsl = bn.querySelector(".bn-sl"), mbb = document.querySelector(".hd-mb");
  if (mbb) bsl.addEventListener("click", () => mbb.click());
  if (!pop) bn.querySelector(".bn-red").addEventListener("click", () => {
    const f = page === "poptavka" && document.querySelector("main form");
    if (f) { f.scrollIntoView({ behavior: "smooth", block: "start" }); const i = f.querySelector("input,textarea"); if (i) i.focus({ preventScroll: true }); } else KRpoptat(askO());
  });
})();
