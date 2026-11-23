/* Doplňky stránek služeb (směr A): katalog podproduktů, FAQ a srovnání systémů.
   Data: katalog.js (window.KRkatalog), obsah-sluzeb.js (window.KRobsah). Poptávka: KRpoptat z web.js.
   API: KRkatalog.vykresli(el, oblast) · KRfaq(el, oblast) · KRsrovnani(el, oblast). CSS si vkládá sám. */
(() => {
  const css = `
.kd{padding:56px 0}
.kd-h{font-size:34px;line-height:1.12;margin:0 0 8px}
.kd-l{color:var(--muted,#4a545c);font-size:17px;max-width:680px;margin:0 0 24px}
.kd-g{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;list-style:none;margin:0;padding:0}
.kd-c{scroll-margin-top:96px;border:1px solid var(--line,#dde2e5);border-radius:14px;padding:20px 20px 18px;display:flex;flex-direction:column;gap:8px;background:#fff;transition:box-shadow .3s,border-color .3s}
.kd-c h3{font-size:19px;line-height:1.25}
.kd-c p{font-size:15px;line-height:1.5;color:var(--muted,#4a545c);flex:1}
.kd-a{display:flex;flex-wrap:wrap;gap:6px 18px;margin-top:6px}
.kd-a a,.kd-a button{font:700 15px/1.3 var(--f,inherit);color:var(--ink,#0f1418);background:none;border:0;padding:6px 0;cursor:pointer;text-decoration:underline;text-underline-offset:4px;text-decoration-thickness:1px}
.kd-a a:hover,.kd-a button:hover{text-decoration-thickness:2px}
.kd-c.kd-on{border-color:var(--ink,#0f1418);box-shadow:0 0 0 1px var(--ink,#0f1418),0 14px 32px rgba(15,20,24,.12)}
.kd-src{font-size:14px;color:var(--muted,#4a545c);margin-top:14px}
.kd-src a{color:inherit;text-underline-offset:3px}
.kf{max-width:860px;border-top:1px solid var(--line,#dde2e5)}
.kf details{border-bottom:1px solid var(--line,#dde2e5)}
.kf summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:18px 0;font-weight:700;font-size:18px;line-height:1.35}
.kf summary::-webkit-details-marker{display:none}
.kf summary::after{content:"";flex:0 0 12px;height:12px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(45deg) translate(-3px,-3px);transition:transform .2s}
.kf details[open] summary::after{transform:rotate(225deg) translate(-3px,-3px)}
.kf .kf-a{padding:0 0 20px;font-size:16px;line-height:1.6;color:var(--ink,#0f1418);max-width:760px}
.kf .kf-z{display:block;margin-top:8px;font-size:14px;color:var(--muted,#4a545c)}
.kf .kf-z a{color:inherit;text-underline-offset:3px}
.kf-end{margin-top:22px;font-size:17px;font-weight:600}
.kf-end button{font:700 17px/1.3 var(--f,inherit);background:none;border:0;padding:4px 0;color:var(--ink,#0f1418);text-decoration:underline;text-underline-offset:4px;cursor:pointer}
.ks-t{width:100%;border-collapse:separate;border-spacing:0;font-size:15px;line-height:1.45}
.ks-t th,.ks-t td{text-align:left;vertical-align:top;padding:14px 16px;border-bottom:1px solid var(--line,#dde2e5)}
.ks-t thead th{position:sticky;top:72px;background:#f4f6f7;font-size:14px;font-weight:700;z-index:1}
.ks-t thead th:first-child{border-top-left-radius:10px}.ks-t thead th:last-child{border-top-right-radius:10px}
.ks-t tbody th{font-weight:700;font-size:16px;min-width:160px}
.ks-m{display:none;list-style:none;margin:0;padding:0;gap:12px}
.ks-m li{border:1px solid var(--line,#dde2e5);border-radius:14px;padding:16px 18px}
.ks-m h3{font-size:18px;margin-bottom:8px}
.ks-m dl{margin:0;display:grid;gap:8px}
.ks-m dt{font-size:14px;font-weight:700;color:var(--muted,#4a545c)}
.ks-m dd{margin:0;font-size:15px}
.ks-e{display:flex;flex-wrap:wrap;align-items:center;gap:14px 20px;margin-top:24px}
.ks-e p{font-weight:700;font-size:18px}
@media (max-width:980px){.kd-g{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:820px){
  .kd{padding:36px 0}.kd-h{font-size:26px}.kd-l{font-size:16px;margin-bottom:18px}
  .kd-g{grid-template-columns:1fr;gap:10px}.kd-c{padding:16px}
  .kf summary{font-size:16px;padding:15px 0}.kf .kf-a{font-size:15px}
  .ks-t{display:none}.ks-m{display:grid}
  .ks-e .btn{width:100%}
}
@media (prefers-reduced-motion:reduce){.kd-c,.kf summary::after{transition:none}}`;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const poptat = o => { if (window.KRpoptat) window.KRpoptat(o); else location.href = "index.html#poptavka"; };
  const host = u => { try { return new URL(u).pathname.replace(/\/$/, "").split("/").pop() || "karasek.cz"; } catch { return u; } };
  const zdroje = z => (Array.isArray(z) ? z : [z]).filter(Boolean);

  /* 1. Katalog: „Všechno, co u nás najdete“ */
  const vykresli = (el, oblast) => {
    const K = (window.KRkatalog || {})[oblast]; if (!el || !K) return;
    el.classList.add("kd");
    el.innerHTML = `<div class="wrap"><h2 class="kd-h" id="kd-h-${oblast}">Všechno, co u nás najdete</h2>
<p class="kd-l">Přehled všech variant a doplňků. U každé se můžete podívat na hotové stavby nebo se rovnou zeptat.</p>
<ul class="kd-g" aria-labelledby="kd-h-${oblast}">${K.map(p => {
      const q = p.f ? "realizace.html?" + new URLSearchParams(p.f) : "";
      return `<li class="kd-c" id="k-${esc(p.k)}"><h3>${esc(p.n)}</h3><p>${esc(p.t)}</p><div class="kd-a"><a href="produkt.html?o=${oblast}&p=${esc(p.k)}">Detail typu<span class="sr"> – ${esc(p.n)}</span></a>${q ? `<a href="${q}">Hotové stavby<span class="sr"> – ${esc(p.n)}</span></a>` : ""}<button type="button" data-k="${esc(p.k)}">Zeptat se<span class="sr"> na ${esc(p.n)}</span></button></div></li>`;
    }).join("")}</ul>
<p class="kd-src">Zdroj popisů: <a href="https://karasek.cz/produkty/" target="_blank" rel="noopener">karasek.cz/produkty</a></p></div>`;
    el.querySelectorAll(".kd-a button").forEach(b => b.addEventListener("click", () => {
      const p = K.find(x => x.k === b.dataset.k); poptat({ dotaz: true, tema: p.n, oblast });
    }));
    const zvyrazni = () => {
      const h = decodeURIComponent(location.hash || ""); if (!/^#k-/.test(h)) return;
      const c = el.querySelector(h.replace(/[^#\w-]/g, "")); if (!c) return;
      const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
      c.scrollIntoView({ behavior: rm ? "auto" : "smooth", block: "start" });
      c.classList.add("kd-on"); setTimeout(() => c.classList.remove("kd-on"), 2400);
    };
    /* po načtení písma a hlavičky, ať posun nesedí na starém rozvržení */
    const start = () => setTimeout(zvyrazni, 250);
    if (document.readyState === "complete") start(); else addEventListener("load", start, { once: true });
    addEventListener("hashchange", zvyrazni);
  };
  window.KRkatalog = window.KRkatalog || {};
  window.KRkatalog.vykresli = vykresli;

  /* 2. FAQ: přístupný akordeon + JSON-LD FAQPage */
  window.KRfaq = (el, oblast) => {
    const O = (window.KRobsah || {})[oblast]; if (!el || !O) return;
    el.classList.add("kd");
    el.innerHTML = `<div class="wrap"><h2 class="kd-h">Časté otázky</h2><div class="kf">${O.faq.map(f => `<details><summary>${esc(f.q)}</summary><div class="kf-a"><p>${esc(f.a)}</p><span class="kf-z">Zdroj: ${zdroje(f.zdroj).map(u => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(host(u))}</a>`).join(", ")}</span></div></details>`).join("")}</div>
<p class="kf-end">Nenašli jste odpověď? <button type="button">Zeptejte se nás</button></p></div>`;
    el.querySelector(".kf-end button").addEventListener("click", () => poptat({ dotaz: true, tema: "Něco jiného", oblast }));
    const ld = document.createElement("script"); ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: O.faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
    document.head.appendChild(ld);
  };

  /* 3. Srovnání: PC tabulka s lepicí hlavičkou, mobil karty */
  window.KRsrovnani = (el, oblast) => {
    const O = (window.KRobsah || {})[oblast]; if (!el || !O || !O.srovnani) return;
    const S = O.srovnani, v = c => c ? esc(c) : `<span aria-label="neuvedeno">—</span>`;
    el.classList.add("kd");
    el.innerHTML = `<div class="wrap"><h2 class="kd-h">${esc(S.nadpis)}</h2>
<table class="ks-t"><thead><tr>${S.sloupce.map(s => `<th scope="col">${esc(s)}</th>`).join("")}</tr></thead>
<tbody>${S.radky.map(r => `<tr><th scope="row">${esc(r[0])}</th>${r.slice(1).map(c => `<td>${v(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>
<ul class="ks-m">${S.radky.map(r => `<li><h3>${esc(r[0])}</h3><dl>${r.slice(1).map((c, i) => `<div><dt>${esc(S.sloupce[i + 1])}</dt><dd>${v(c)}</dd></div>`).join("")}</dl></li>`).join("")}</ul>
<div class="ks-e"><p>Nevíte, co vybrat? Poradíme.</p><button type="button" class="btn btn-red">Poradit s výběrem</button></div>
<p class="kd-src">Zdroj: ${zdroje(S.zdroj).map(u => `<a href="${esc(u)}" target="_blank" rel="noopener">karasek.cz</a>`).slice(0, 1).join("")}</p></div>`;
    el.querySelector(".ks-e .btn").addEventListener("click", () => poptat({ dotaz: true, tema: "Co vybrat", oblast }));
  };
})();
