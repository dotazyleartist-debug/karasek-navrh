/* Katalog všech podproduktů ze 4 služeb původního karasek.cz (stav 20. 11. 2026).
   t = 1–2 věty zkrácené z dané stránky karasek.cz, url = zdroj. Nic doplněného.
   f = filtr pro realizace.html (jen když v KR.stavby existuje shoda; jinak null).
   Vykreslení: KRkatalog.vykresli(el, oblast) je v sluzby-doplnky.js. */
window.KRkatalog = (() => {
  const P = s => `https://karasek.cz/produkty/${s}/`;
  const k = (k, n, t, url, f = null) => ({ k, n, t, url, f });
  return {
    zahrada: [
      k("sezonni", "Sezonní zimní zahrady", "Hliníkové zimní zahrady se skrytým žlabem, designové k moderním stavbám i ke klasickým rodinným domům. Nosnost počítáme pro každou konstrukci podle sněhové oblasti.", P("zimni-zahrady"), { typ: "zahrada" }),
      k("celorocni", "Celoroční zimní zahrady", "Konstrukce z lepeného dřeva BSH s izolačním dvojsklem s argonem (U 1,1) a systémem Patio Living Therm. Prostor, který slouží jako plnohodnotná místnost po celý rok.", P("celorocni-zimni-zahrady"), { typ: "zahrada", system: "therm" }),
      k("led", "LED osvětlení", "LED pásky v integrované liště v krokvích osvětlí místo nad stolem či posezením, novinkou je osvětlení předního žlabu. Kabely jsou vždy skryté v konstrukci, světlo lze stmívat.", P("zimni-zahrady"))
    ],
    zaskleni: [
      k("ramove", "Rámové zasklení", "Uzavřete terasu či pergolu a získáte tzv. tepelný nárazník, který snižuje tepelné ztráty domu. Výplň může být sklo, polykarbonát i další materiály.", P("zaskleni-pergol-a-teras/ramove-zaskleni-pergol-a-teras"), { typ: "zaskleni", system: "combi" }),
      k("bezramove", "Bezrámové zasklení", "Systémy bez svislých profilů, které neruší výhled z terasy; nosným prvkem je bezpečnostní kalené sklo. Hodí se na všechny typy pergol a teras.", P("zaskleni-pergol-a-teras/bezramove-zaskleni-pergol-a-teras"), { typ: "zaskleni", system: "move" }),
      k("izolacni", "Izolační zasklení Patio Living Therm", "Rámový posuvný systém s drážkou pro izolační dvojsklo 24 mm a přerušeným tepelným mostem. Vhodný pro temperované prostory.", P("zaskleni-pergol-a-teras/izolacni-zaskleni-pergol-a-teras"), { system: "therm" }),
      k("lamelove", "Posuvné lamelové stěny Patio Living Tilt", "Posuvné boční panely s hliníkovými lamelami nebo screenovou látkou. Chrání před větrem, sluncem a částečně i deštěm a přidají pergole soukromí.", P("zaskleni-pergol-a-teras/posuvne-lamelove-steny")),
      k("steny", "Dělící stěny a příčky", "Mobilní příčky pro oddělení místností v bytech, domech i komerčních objektech bez stavebních úprav. Rámové a bezrámové posuvné stěny i shrnovací dveře.", P("zaskleni-pergol-a-teras/delici-steny-a-pricky")),
      k("podlahy", "Podlahy Termowood a WPC", "Podlahy k hliníkovým konstrukcím a zasklení teras či pergol: tepelně upravené dřevo ThermoWood nebo dřevoplastové podlahy WPC.", P("zaskleni-pergol-a-teras/podlahy-termowood-a-wpc"))
    ],
    pergola: [
      k("sklo", "Pergoly se skleněnou střechou", "Hliníkové pergoly se skrytým žlabem a střechou z lepeného bezpečnostního skla Connex 3.3.2. Bez typizovaných rozměrů, s výpočtem nosnosti na sníh.", P("pergoly/pergoly-se-sklenenou-strechou"), { typ: "pergola", system: "connex" }),
      k("polykarbonat", "Pergoly s polykarbonátem", "Střecha z polykarbonátu LEXAN 16 mm v čirém, mléčném nebo bronzovém provedení. I klasické pergoly s přesahem střechy ke starším domům.", P("pergoly/pergoly-s-polykarbonatem"), { typ: "pergola", system: "pcd" }),
      k("bioklima", "Lamelové bioklimatické pergoly", "Místo pevné střechy elektricky naklápěcí lamely: v horku teplo odejde stropem, zavřené chrání před deštěm i sněhem. Doplnit jde zasklení nebo rolety ZIP.", P("pergoly/lamelove-bioklimaticke-pergoly")),
      k("carporty", "Carporty", "Parkovací stání pro jedno či více aut ze systému pergol se skrytým žlabem. Lze osadit i fotovoltaické panely, výpočet nosnosti je součástí.", P("pergoly/parkovaci-stani-carporty")),
      k("vytahovaci", "Pergoly s vytahovací střechou", "Motorizované posuvné panely střechy umožňují postupné odvětrání prostoru. Střecha z lepeného skla, izolačního dvojskla nebo polykarbonátu.", P("pergoly/pergoly-s-vytahovaci-strechou")),
      k("latkova", "Pergoly s látkovou střechou", "Hliníková konstrukce se zastíněním pro terasy, kde nejde o celoroční použití a kde chcete látku úplně odsunout. Například pergola ZEN nebo Veranda Box.", P("pergoly/pergoly-s-latkovou-strechou"))
    ],
    stineni: [
      k("markyzy", "Markýzy", "Klasické, kazetové a výklopné markýzy na kliku či s motorem, vyráběné na zakázku. Vyberete si z mnoha dekorů látek i barvu konstrukce. Realizace pouze v Jižních Čechách.", P("stinici-technika/markyzy")),
      k("markyzy-zz", "Markýzy pro zimní zahrady a pergoly", "Nejúčinnější je stínění nad střešní krytinou, pod kterým proudí vzduch a brání přehřívání. Pod střechu se hodí podvěsná markýza, baldachýn nebo plissé.", P("stinici-technika/markyzy-pro-zimni-zahrady-a-pergoly")),
      k("velux", "Doplňky Velux", "Jsme autorizovaným prodejcem vnitřního a vnějšího zastínění střešních oken Velux: žaluzie, rolety, plissé, sítě proti hmyzu a další.", P("stinici-technika/doplnky-velux")),
      k("site", "Sítě proti hmyzu", "Sítě do oken i dveří: snadno demontovatelné, rolovací, s panty nebo plissé tam, kde je málo místa. Všechny v barvách podle vzorníku RAL.", P("stinici-technika/site-proti-hmyzu")),
      k("screen", "Screen rolety ZIP", "Svislé kazetové markýzy se ZIP systémem, který drží potah napnutý a zajistí ho proti vytržení i za silného větru. Chrání před sluncem a UV zářením a bez mezer u kolejnice slouží i jako ochrana proti hmyzu.", P("stinici-technika")),
      k("zaluzie", "Venkovní žaluzie a rolety", "Ochrana před ostrým sluncem i pro soukromí, na kliku, provázek nebo s motorem. Doplnit lze automatické řízení podle větru. Realizace pouze v Jižních Čechách.", P("stinici-technika/venkovni-zaluzie-a-rolety"), { system: "rolety" }),
      k("vnitrni", "Vnitřní zastínění", "Hliníkové či dřevěné žaluzie, rolety, duo-rolety, plissé a japonské stěny do domu, bytu, pergoly i zimní zahrady. Realizace pouze v Jižních Čechách.", P("stinici-technika/vnitrni-zastineni")),
      k("baldachyn", "Baldachýnové zastínění", "Podvěsná terasová markýza s kladkovou mechanikou a akrylovou látkou, až 600 × 600 cm. Lze ji namontovat i na stávající dřevěnou pergolu.", P("stinici-technika/baldachynove-zastineni"), { system: "baldachyn" })
    ]
  };
})();
