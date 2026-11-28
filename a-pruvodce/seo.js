/* seo.js – centrální SEO prototypu podle 05-realizace/2026-11-28-dostavba/MAPA-WEBU.md (dávka 3b, 28. 11. 2026).
   Tabulka T (vygenerovaná z mapy, kap. 2): klíč stránky → [cílová URL na karasek.cz, title, description, H1].
   Klíč = body[data-page] + parametry: uvod, sluzby, kategorie:<oblast>, produkt:<o>:<p>, region:<r>, realizace, … ;
   šablony detailu stavby (stavba.html?id=) a archivu realizací (realizace.html?typ=…) skládá kód z realizace-data.js.
   Co dělá: title, meta description, H1 parametrické stránky, <meta name="kr:cilova-url">, Open Graph a JSON-LD (@graph) podle mapy
   kap. 2 a 6. Rel=canonical záměrně ne a noindex zůstává (mapa kap. 7). Firma jen s údaji, které web ukazuje (název, adresa,
   telefon, IČO, otevírací doba showroomu); bez AggregateRating a Review. FAQPage a VideoObject se čtou z DOM, aby schema = obsah.
   Načíst v <head> s defer (po skriptech stránky). API: KRseo.obnov() po změně filtru, KRseo.T, KRseo.cil(href). */
(() => {
  const K = "https://karasek.cz", FID = K + "/#firma";
  const T = {
    "uvod": ["/","Zimní zahrady, zasklení teras, pergoly a stínění | Karásek","Rodinná firma z Českých Budějovic od roku 1995: zimní zahrady, zasklení teras, pergoly a stínění. 6500+ realizací. Cenu spočítáme po zaměření zdarma.","Zimní zahrada / Zasklená terasa / Pergola / Stínění (rotující slovo) + pevný text; záložní H1 bez JS: „Zimní zahrady, zasklení teras, pergoly a stínění od roku 1995“"],
    "sluzby": ["/produkty/","Co stavíme: zimní zahrady, zasklení, pergoly | Karásek","Přehled všeho, co stavíme: sezonní a celoroční zimní zahrady, rámové i bezrámové zasklení, hliníkové a lamelové pergoly, carporty a stínění.","Co pro vás postavíme"],
    "kategorie:zahrada": ["/produkty/zimni-zahrady/","Zimní zahrada na míru, sezonní i celoroční | Karásek","Hliníkové sezonní a dřevěné celoroční zimní zahrady na míru, se skrytým žlabem a statikou podle sněhové oblasti. Cenu spočítáme po zaměření zdarma.","Zimní zahrady sezonní i celoroční"],
    "kategorie:zaskleni": ["/produkty/zaskleni-pergol-a-teras/","Zasklení pergoly a terasy, rámové i bezrámové | Karásek","Posuvné zasklení teras a pergol: bezrámové Patio Living Move, rámové Plus a Combi, izolační Patio Living Therm. Cenu spočítáme po zaměření zdarma.","Zasklení teras a pergol"],
    "kategorie:pergola": ["/produkty/pergoly/","Hliníková pergola se skrytým žlabem na míru | Karásek","Hliníkové pergoly se skleněnou nebo polykarbonátovou střechou, lamelové bioklimatické pergoly a carporty. Nosnost počítáme podle sněhové oblasti.","Hliníkové pergoly"],
    "kategorie:stineni": ["/produkty/stinici-technika/","Stínění pergol a zimních zahrad: markýzy, screeny | Karásek","Markýzy nad sklo i pod něj, screenové rolety ZIP, baldachýny a žaluzie k pergole a zimní zahradě. Klasické markýzy a vnitřní stínění jen v Jižních Čechách.","Stínění pergol, teras a zimních zahrad"],
    "produkt:zahrada:sezonni": ["/produkty/zimni-zahrady/sezonni-zimni-zahrady/","Sezonní zimní zahrada z hliníku na míru | Karásek","Hliníková sezonní zimní zahrada se skrytým žlabem, vyložení až 550 cm, střecha ze skla Connex nebo polykarbonátu. Pro jaro až podzim, zaměření zdarma.","Sezonní zimní zahrady"],
    "produkt:zahrada:celorocni": ["/produkty/celorocni-zimni-zahrady/","Celoroční zimní zahrada z lepeného dřeva BSH | Karásek","Celoroční zimní zahrada z lepeného dřeva BSH, střecha z izolačního dvojskla s argonem (U = 1,1) a posuvné stěny Patio Living Therm. Slouží i v zimě.","Celoroční zimní zahrady"],
    "produkt:zahrada:led": ["/produkty/zimni-zahrady/led-osvetleni/","LED osvětlení zimní zahrady a pergoly | Karásek","LED pásky v liště v krokvích i v předním žlabu, kabely skryté v konstrukci, světlo lze stmívat. Doplněk k zimní zahradě a pergole od Karáska.","LED osvětlení zimní zahrady a pergoly"],
    "produkt:zaskleni:ramove": ["/produkty/zaskleni-pergol-a-teras/ramove-zaskleni-pergol-a-teras/","Rámové posuvné zasklení terasy Plus a Combi | Karásek","Hliníkový rámový systém Plus (výška do 220 cm) a zesílený Combi (do 300 cm), sestavy od 1 do 5 dílů. U pětidílné se otevře až 4/5 plochy.","Rámové zasklení teras a pergol"],
    "produkt:zaskleni:bezramove": ["/produkty/zaskleni-pergol-a-teras/bezramove-zaskleni-pergol-a-teras/","Bezrámové zasklení terasy Patio Living Move | Karásek","Posuvné zasklení z kaleného skla bez svislých rámů. Move 3.0: křídla až 1 500 × 3 000 mm, kolejnice 20 mm zapustitelná do podlahy, volitelně motor.","Bezrámové zasklení Patio Living Move"],
    "produkt:zaskleni:izolacni": ["/produkty/zaskleni-pergol-a-teras/izolacni-zaskleni-pergol-a-teras/","Izolační zasklení Patio Living Therm s dvojsklem | Karásek","Rámové posuvné zasklení s dvojsklem 24 mm a přerušeným tepelným mostem pro temperované prostory. Sklo Ug = 1,1, celý systém Uw = 1,5.","Izolační zasklení Patio Living Therm"],
    "produkt:zaskleni:lamelove": ["/produkty/zaskleni-pergol-a-teras/posuvne-lamelove-steny/","Posuvné lamelové stěny Patio Living Tilt | Karásek","Boční posuvné panely s lamelami nebo látkou k lamelové pergole a carportu. Otvor šíře 1 000–7 000 mm a výšky 550–2 700 mm, rámy v barvě RAL.","Posuvné lamelové stěny Patio Living Tilt"],
    "produkt:zaskleni:steny": ["/produkty/zaskleni-pergol-a-teras/delici-steny-a-pricky/","Posuvné dělící stěny a skleněné příčky | Karásek","Interiérové posuvné dělící stěny Plus (do 2 200 mm), Combi (do 3 000 mm) a pevné Fix. Kolejnici 17 mm lze zapustit do podlahy, průchod bez prahu.","Dělící stěny a příčky"],
    "produkt:zaskleni:podlahy": ["/produkty/zaskleni-pergol-a-teras/podlahy-termowood-a-wpc/","Terasové podlahy ThermoWood a WPC | Karásek","Podlahy k hliníkovým konstrukcím a zasklení teras či pergol: tepelně upravené dřevo ThermoWood nebo dřevoplastové podlahy WPC.","Podlahy ThermoWood a WPC"],
    "produkt:pergola:sklo": ["/produkty/pergoly/pergoly-se-sklenenou-strechou/","Hliníková pergola se skleněnou střechou | Karásek","Hliníková pergola se skrytým žlabem a střechou z bezpečnostního skla Connex 3.3.2. Bez typizovaných rozměrů, nosnost počítáme podle sněhové oblasti.","Pergoly se skleněnou střechou"],
    "produkt:pergola:polykarbonat": ["/produkty/pergoly/pergoly-s-polykarbonatem/","Pergola s polykarbonátovou střechou LEXAN | Karásek","Hliníková pergola se střechou z polykarbonátu LEXAN 16 mm v čirém, mléčném nebo bronzovém provedení. I klasické pergoly s přesahem ke starším domům.","Pergoly s polykarbonátovou střechou"],
    "produkt:pergola:bioklima": ["/produkty/pergoly/lamelove-bioklimaticke-pergoly/","Bioklimatická pergola s lamelami Panorama 2.0 | Karásek","Lamelová pergola Panorama 2.0: lamely natáčené motorem až o 170°, modul až 645 × 470 cm, sněhová zátěž až 250 kg/m². Ovládání ovladačem i aplikací.","Lamelové bioklimatické pergoly"],
    "produkt:pergola:carporty": ["/produkty/pergoly/parkovaci-stani-carporty/","Hliníkový carport pro jedno i více aut | Karásek","Parkovací stání ze systému pergol se skrytým žlabem, pro jedno i více aut. Lze osadit fotovoltaické panely, výpočet nosnosti je součástí.","Carporty: hliníková parkovací stání"],
    "produkt:pergola:vytahovaci": ["/produkty/pergoly/pergoly-s-vytahovaci-strechou/","Pergola s posuvnou vytahovací střechou | Karásek","Motorem posuvné panely střechy pro postupné odvětrání prostoru. Střecha z lepeného skla, izolačního dvojskla nebo polykarbonátu.","Pergoly s vytahovací střechou"],
    "produkt:pergola:latkova": ["/produkty/pergoly/pergoly-s-latkovou-strechou/","Pergola s látkovou střechou, ZEN a Veranda Box | Karásek","Hliníková pergola se zastíněním pro terasy, kde nepotřebujete celoroční zastřešení a látku chcete úplně odsunout. Například ZEN nebo Veranda Box.","Pergoly s látkovou střechou"],
    "produkt:stineni:markyzy": ["/produkty/stinici-technika/markyzy/","Markýza na terasu na kliku i s motorem | Karásek","Klasické, kazetové a výklopné markýzy na zakázku, na kliku nebo s motorem, s výběrem látek a barvy konstrukce. Realizace pouze v Jižních Čechách.","Markýzy na terasu"],
    "produkt:stineni:markyzy-zz": ["/produkty/stinici-technika/markyzy-pro-zimni-zahrady-a-pergoly/","Markýza na zimní zahradu a pergolu | Karásek","Střešní markýzy Ancona, Capri a Portofino nad sklo i pod něj, s motorem Somfy iO. Stínění nad střechou odráží teplo dřív, než projde sklem.","Markýzy pro zimní zahrady a pergoly"],
    "produkt:stineni:velux": ["/produkty/stinici-technika/doplnky-velux/","Žaluzie, rolety a sítě pro okna Velux | Karásek","Vnitřní i venkovní stínění střešních oken Velux: žaluzie, rolety, plissé a sítě proti hmyzu. Poradíme v showroomu v Českých Budějovicích.","Stínění střešních oken Velux"],
    "produkt:stineni:site": ["/produkty/stinici-technika/site-proti-hmyzu/","Sítě proti hmyzu do oken a dveří | Karásek","Rolovací, pantové a plissé sítě proti hmyzu do oken i dveří, snadno demontovatelné a v barvách podle vzorníku RAL.","Sítě proti hmyzu"],
    "produkt:stineni:screen": ["/produkty/stinici-technika/screenove-rolety-zip/","Screenové rolety ZIP na pergolu a terasu | Karásek","Svislé kazetové markýzy se ZIP vedením drží látku napnutou i ve větru a chrání před sluncem i hmyzem. Na fasádu, do ostění i na bok pergoly.","Screenové rolety ZIP"],
    "produkt:stineni:zaluzie": ["/produkty/stinici-technika/venkovni-zaluzie-a-rolety/","Venkovní žaluzie a rolety s motorem | Karásek","Venkovní žaluzie a rolety na kliku, provázek nebo s motorem, s možností automatiky podle větru. Realizace pouze v Jižních Čechách.","Venkovní žaluzie a rolety"],
    "produkt:stineni:vnitrni": ["/produkty/stinici-technika/vnitrni-zastineni/","Vnitřní žaluzie, rolety a plissé | Karásek","Hliníkové a dřevěné žaluzie, rolety, duo rolety, plissé a japonské stěny do domu, bytu, pergoly i zimní zahrady. Realizace pouze v Jižních Čechách.","Vnitřní stínění"],
    "produkt:stineni:baldachyn": ["/produkty/stinici-technika/baldachynove-zastineni/","Baldachýn pod střechu pergoly a zimní zahrady | Karásek","Podvěsný baldachýn s markýzovou látkou TEXgard, modul až 6 000 × 6 000 mm, ovládání šňůrou. Lze namontovat i na stávající dřevěnou pergolu.","Baldachýnové zastínění"],
    "realizace": ["/realizace/","Realizace zimních zahrad, zasklení a pergol | Karásek","995 zveřejněných realizací z více než 6500 staveb. Filtrujte podle typu, systému, barvy a kraje, u každé stavby fotky a parametry.","Naše realizace: zimní zahrady, zasklení teras, pergoly a stínění"],
    "realizace:archiv": ["/kategorie/<typ>/","Realizace {termín} – fotky a parametry | Karásek (vzor)","Hotové stavby {termín} od Karáska: fotky, systém, barva a kraj u každé realizace. Podobnou stavbu vám rádi spočítáme po zaměření zdarma. (vzor)","Realizace: {název termínu} (např. „Realizace: Patio Living Move“)"],
    "stavba": ["/reference/<slug>/","Sezonní zimní zahrada RAL 7016, PCD 16 – realizace Karásek","Sezonní zimní zahrada napojená na původní pergolu: antracit RAL 7016, střecha z polykarbonátu 16 mm, sklon 11°, LED. Fotky, video a parametry.","název stavby (např. „Sezonní zimní zahrada, napojená na původní pergolu, antracit 7016, PCD 16“)"],
    "recenze": ["/recenze/","Recenze zákazníků z Googlu a Seznamu | Karásek","Hodnocení zákazníků z Googlu a Firmy.cz se zdrojem a datem. Přečtěte si, jak u nás proběhla poptávka, zaměření i montáž.","Co říkají zákazníci"],
    "radce": ["/radce/","Rádce: zimní zahrady, zasklení a pergoly | Karásek","Odpovědi na otázky před nákupem: co ovlivní cenu, stavební povolení, sníh, údržba, sklo nebo polykarbonát. Z našich článků a praxe.","Rádce: vše o zimních zahradách, zasklení, pergolách a stínění"],
    "postup": ["/jak-to-probiha/","Jak probíhá zakázka: od poptávky po montáž | Karásek","Šest kroků od poptávky po montáž: schůzka ve vzorkovně, zaměření, projekt a smlouva, výroba a montáž za 1–3 dny. Záloha 60 %, doplatek po kontrole.","Jak spolupráce probíhá"],
    "showroom": ["/showroom/","Showroom zimních zahrad, České Budějovice | Karásek","Showroom 250 m² v Nemanické 437/5 v Českých Budějovicích: zasklení, zimní zahrady a stínění naživo. Po–Pá 8–16, parkování zdarma.","Showroom v Českých Budějovicích"],
    "onas": ["/o-nas/","O nás: rodinná firma Karásek od roku 1995","Rodinná firma z Českých Budějovic od roku 1995. Zimní zahrady, zasklení teras, pergoly a stínění, 6500+ realizací a showroom 250 m².","Rodinná firma z Českých Budějovic"],
    "kontakt": ["/kontakty/","Kontakt a otevírací doba showroomu | Karásek","Infolinka +420 777 727 328, showroom Nemanická 437/5, České Budějovice, Po–Pá 8–16. Tým, fakturační údaje, obchodní podmínky a reklamace.","Kontakt"],
    "poptavka": ["/poptavka/","Nezávazná poptávka, zaměření zdarma | Karásek","Popište, co plánujete, přiložte fotky nebo nákres a napište obec. Ozveme se vám, domluvíme zaměření a cenu spočítáme po zaměření zdarma.","Nezávazná poptávka"],
    "dekujeme": ["/poptavka/dekujeme/","Děkujeme za poptávku | Karásek","Poptávku máme. Co bude dál, kontakt a showroom Karásek s.r.o. v Českých Budějovicích.","Děkujeme, poptávku jsme přijali"],
    "videa": ["/videa/","Videa z realizací zimních zahrad a zasklení | Karásek","Videa z hotových staveb, ze showroomu a od zákazníků: zimní zahrady, zasklení teras, pergoly a stínění. Podívejte se, jak vypadají naživo.","Videa ze staveb"],
    "region:jizni-cechy": ["/region/jizni-cechy/","Zimní zahrady a zasklení teras v Jižních Čechách | Karásek","Rodinná firma s showroomem v Českých Budějovicích. Zimní zahrady, zasklení, pergoly a stínění v Jihočeském kraji, včetně markýz a vnitřního stínění.","Zimní zahrady, zasklení teras a pergoly v Jižních Čechách"],
    "region:plzensko": ["/region/plzensko/","Zimní zahrady a zasklení teras na Plzeňsku | Karásek","Zimní zahrady, zasklení teras a pergoly pro Plzeňský kraj od rodinné firmy z Českých Budějovic. Zaměříme u vás, cenu spočítáme po zaměření zdarma.","Zimní zahrady, zasklení teras a pergoly na Plzeňsku"],
    "region:vysocina": ["/region/vysocina/","Zimní zahrady a zasklení teras na Vysočině | Karásek","Zimní zahrady, zasklení teras a pergoly pro kraj Vysočina od rodinné firmy z Českých Budějovic. Zaměříme u vás, cenu spočítáme po zaměření zdarma.","Zimní zahrady, zasklení teras a pergoly na Vysočině"],
    "gdpr": ["/ochrana-osobnich-udaju/","Ochrana osobních údajů | Karásek s.r.o.","Jak Karásek s.r.o. zpracovává osobní údaje a přílohy z poptávkového formuláře, jak dlouho je uchovává a jaká máte práva.","Ochrana osobních údajů"],
    "cookies": ["/cookies-web/","Zásady používání cookies | Karásek s.r.o.","Které cookies web karasek.cz používá, k čemu slouží měření návštěvnosti a jak souhlas kdykoli změníte nebo odvoláte.","Zásady cookies"],
    "nenalezeno": ["404.php","Stránka nenalezena | Karásek","Tuto stránku jsme nenašli. Pokračujte na služby, realizace nebo nezávaznou poptávku.","Tuto stránku jsme nenašli"]
  };
  /* rozměry fotek assets/foto (šířka, výška) pro ImageObject u detailu stavby */
  const ROZ = {"17332":[1400,1050],"17372":[1400,1050],"17392":[1400,1050],"17435":[1400,1050],"17448":[1400,1106],"17454":[1400,900],"17508":[1400,1026],"17692":[1400,1050],"17747":[1400,1064],"17845":[1400,1050],"18034":[1400,950],"18873":[1400,1050],"21454":[1400,1050],"21506":[1400,1054],"22207":[1400,1050],"22218":[1400,1050],"23236":[1400,1050],"23293":[1400,1050],"23300":[1400,1050],"23311":[1400,1050],"23329":[1400,1050],"24141":[1400,1050],"24151":[1400,1050],"24158":[1400,1050],"24164":[1400,1050],"24173":[1400,1050],"24199":[1400,1050],"25190":[1400,1054],"25483":[1400,1050],"29532":[1400,1050],"29555":[1400,1050],"29570":[1400,1867],"17845-g1":[1400,1866],"17845-g2":[1389,1874],"17845-g3":[1400,1597],"17845-g4":[1400,1977],"17845-g5":[1400,1888],"17845-video":[480,360],"29555-g1":[1400,1866],"29555-g2":[1400,1050],"29555-g3":[1400,1866],"29555-g4":[1400,1866],"29555-g5":[1400,1866],"29570-g1":[1024,768],"29570-g2":[1024,768],"29570-g3":[768,1024],"29570-video":[480,270]};
  const SOUBOR = { "index.html": "uvod", "": "uvod", "sluzby.html": "sluzby", "kategorie.html": "kategorie", "produkt.html": "produkt", "realizace.html": "realizace",
    "stavba.html": "stavba", "recenze.html": "recenze", "radce.html": "radce", "postup.html": "postup", "showroom.html": "showroom", "o-nas.html": "onas",
    "kontakt.html": "kontakt", "poptavka.html": "poptavka", "dekujeme.html": "dekujeme", "videa.html": "videa", "region.html": "region",
    "ochrana-osobnich-udaju.html": "gdpr", "cookies.html": "cookies" };
  const SLUZBA = { zahrada: "Zimní zahrady", zaskleni: "Zasklení teras a pergol", pergola: "Pergoly", stineni: "Stínění" };
  const KRAJ = { "jizni-cechy": "Jihočeský kraj", plzensko: "Plzeňský kraj", vysocina: "Kraj Vysočina" };
  /* archivy realizací: doložená je jen /kategorie/zimni-zahrady/; ostatní termíny typů NEOVĚŘENO (O-TEC-2), proto parametr na /realizace/.
     Systém, barva a kraj jsou NOVÉ adresy (mapa 2.4) – slug = klíč prototypu, kraj jih = jizni-cechy. */
  const ARCH = { typ: k => k === "zahrada" ? "/kategorie/zimni-zahrady/" : `/realizace/?typ=${k}`, system: k => `/realizace/system/${k}/`,
    barva: k => `/realizace/barva/${k}/`, lokalita: k => `/realizace/kraj/${k === "jih" ? "jizni-cechy" : k}/` };
  const abs = h => new URL(h, location.href).href;
  const page = () => document.body.dataset.page || "";
  const stavba = id => id && window.KR ? KR.stavby.find(s => s.id === String(id)) || null : null;
  const fit = (s, n) => { if (s.length <= n) return s; let c = s.slice(0, n); const i = c.lastIndexOf(", "); c = i > n * .5 ? c.slice(0, i) : c.replace(/\s+\S*$/, ""); return c.replace(/[\s,–-]+$/, ""); };
  const fitD = (s, n = 155) => s.length <= n ? s : s.slice(0, n - 1).replace(/\s+\S*$/, "").replace(/[\s,.:–-]+$/, "") + "…";
  const filtry = q => window.KR ? KR.KEYS.filter(k => q.get(k) && KR.label[k] && KR.label[k][q.get(k)]) : [];

  /* Popis stránky podle adresy prototypu: {klic, url, title, desc, h1, nf, s (stavba), f (filtry)} */
  function info(href) {
    const u = new URL(href || location.href, location.href), q = u.searchParams;
    const soub = u.pathname.split("/").pop();
    const p = href ? SOUBOR[soub] || "" : page();
    let k = p;
    if (p === "kategorie") k = "kategorie:" + (q.get("oblast") || (!href && document.body.dataset.oblast) || "zahrada");
    else if (p === "produkt") k = `produkt:${q.get("o")}:${q.get("p")}`;
    else if (p === "region") k = "region:" + q.get("r");
    if (p === "stavba") {
      const s = stavba(q.get("id") || (!href && document.body.dataset.stavba));
      if (!s) return { klic: "stavba", nf: true };
      const typy = s.typ.map(t => KR.label.typ[t]).join(" + "), lok = s.lok ? ", " + KR.label.lokalita[s.lok] : "";
      return { klic: "stavba", s, url: s.odkaz, h1: s.n, title: fit(s.n, 60 - 20) + " – realizace Karásek",
        desc: fitD(`${s.n}. ${typy}${lok}: fotky, systém, barva a parametry hotové stavby. Podobnou vám spočítáme po zaměření zdarma.`) };
    }
    if (p === "realizace") {
      const f = filtry(q);
      if (f.length === 1) {
        const t = f[0], v = q.get(t), nm = t === "typ" ? KR.typy.find(x => x[0] === v)[2] : KR.label[t][v];
        let ti = `Realizace ${nm} – fotky a parametry | Karásek`; if (ti.length > 60) ti = `Realizace ${nm} | Karásek`; if (ti.length > 60) ti = fit(`Realizace ${nm}`, 49) + " | Karásek";
        return { klic: "realizace:archiv", f, url: K + ARCH[t](v), title: ti, h1: `Realizace: ${nm}`,
          desc: fitD(`Hotové stavby ${nm} od Karáska: fotky, systém, barva a kraj u každé realizace. Podobnou stavbu vám rádi spočítáme po zaměření zdarma.`) };
      }
      if (f.length > 1) { const r = T.realizace; return { klic: "realizace:kombinace", f, url: K + "/realizace/?" + f.map(t => t + "=" + q.get(t)).join("&"), title: r[1], desc: r[2], h1: r[3] }; }
    }
    if (p === "dekujeme" && q.get("oblast")) { const r = T.dekujeme; return { klic: k, url: K + r[0] + "?typ=" + q.get("oblast"), title: r[1], desc: r[2], h1: r[3] }; }
    const r = T[k];
    if (!r) return { klic: k, nf: true };
    return { klic: k, url: r[0].startsWith("/") ? K + r[0] : r[0], title: r[1], desc: r[2], h1: r[3] };
  }
  const cil = href => { const i = info(href); return i.nf ? "" : i.url; };

  const meta = (attr, name, val) => {
    let m = document.head.querySelector(`meta[${attr}="${name}"]`);
    if (!val) { if (m) m.remove(); return; }
    if (!m) { m = document.createElement("meta"); m.setAttribute(attr, name); document.head.appendChild(m); }
    m.setAttribute("content", val);
  };

  const FIRMA = () => ({ "@type": "HomeAndConstructionBusiness", "@id": FID, name: "Karásek s.r.o.", url: K + "/", telephone: "+420777727328",
    image: abs("../assets/foto/29570.jpg"), logo: abs("../assets/logo.svg"),
    identifier: { "@type": "PropertyValue", propertyID: "IČO", value: "25164589" },
    address: { "@type": "PostalAddress", streetAddress: "Nemanická 437/5", postalCode: "370 10", addressLocality: "České Budějovice", addressCountry: "CZ" },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "16:00" }] });

  /* otázky jen ty, které stránka ukazuje: details > summary končící otazníkem, odpověď = odstavce uvnitř */
  const faq = () => [...document.querySelectorAll("main details")].map(d => {
    const sm = d.querySelector("summary"), q = sm ? sm.textContent.trim() : "";
    const a = [...d.querySelectorAll("p")].filter(p => !p.closest("summary")).map(p => p.textContent.trim()).filter(Boolean).join(" ");
    return /\?$/.test(q) && a ? { "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } } : null;
  }).filter(Boolean);

  /* videa vložená na stránce: [data-yt], iframe YouTube, náhled i.ytimg.com. Datum nahrání v podkladech není → uploadDate se nevypisuje (NEOVĚŘENO). */
  const videa = () => {
    const V = new Map(), M = document.querySelector("main") || document.body;
    const add = (id, el) => {
      if (!id || V.has(id)) return;
      const box = el.closest("article,figure,section,li") || el.parentElement;
      const img = el.querySelector("img") || (box && box.querySelector("img"));
      const hd = box && box.querySelector("h2,h3,h4,figcaption");
      const alt = img && img.getAttribute("alt") || "";
      const name = (el.dataset.ytNazev || alt || (hd && hd.textContent) || document.querySelector("h1").textContent).trim().replace(/\s+/g, " ");
      const p = box && box.querySelector("p:not(.meta)");
      V.set(id, { "@type": "VideoObject", name, description: ((p && p.textContent) || alt || name).trim().replace(/\s+/g, " "),
        thumbnailUrl: img ? abs(img.getAttribute("src")) : `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, embedUrl: `https://www.youtube.com/embed/${id}` });
    };
    M.querySelectorAll("[data-yt]").forEach(el => add(el.dataset.yt, el));
    M.querySelectorAll('iframe[src*="youtube"]').forEach(el => add((el.src.match(/embed\/([\w-]{11})/) || [])[1], el));
    M.querySelectorAll('img[src*="ytimg.com/vi/"]').forEach(el => add((el.src.match(/vi\/([\w-]{11})/) || [])[1], el));
    return [...V.values()];
  };

  const drobky = () => {
    if (typeof window.KRcesta !== "function") return null;
    const C = window.KRcesta();
    return { "@type": "BreadcrumbList", itemListElement: C.map(([h, n], i) => ({ "@type": "ListItem", position: i + 1, name: n,
      item: i === C.length - 1 ? info().url : cil(abs(h)) || K + "/" })) };
  };

  const fotka = (src, cap) => {
    const f = (src.match(/foto\/([\w-]+)\.jpg/) || [])[1], r = ROZ[f] || [];
    return { "@type": "ImageObject", contentUrl: abs(src), ...(r[0] ? { width: r[0], height: r[1] } : {}), caption: cap };
  };

  function schema(I) {
    const p = page(), G = [];
    const web = { "@type": "WebPage", "@id": I.url + "#stranka", url: I.url, name: I.h1 || I.title, inLanguage: "cs" };
    if (!["uvod", "dekujeme", "nenalezeno"].includes(p)) { const b = drobky(); if (b) G.push(b); }
    if (p === "uvod") G.push(FIRMA(), { "@type": "WebSite", "@id": K + "/#web", url: K + "/", name: "Karásek s.r.o.", inLanguage: "cs", publisher: { "@id": FID } });
    if (p === "showroom") G.push(FIRMA());
    if (p === "kontakt") G.push({ ...web, "@type": "ContactPage", about: { "@id": FID } }, FIRMA());
    if (p === "onas") G.push({ ...web, "@type": "AboutPage", about: { "@id": FID } });
    if (p === "sluzby") G.push({ "@type": "ItemList", name: I.h1, itemListElement: Object.entries(SLUZBA).map(([k, n], i) => ({ "@type": "ListItem", position: i + 1, name: n, url: cil(abs("kategorie.html?oblast=" + k)) })) });
    if (p === "kategorie" || p === "produkt" || p === "region") {
      const o = p === "kategorie" ? I.klic.split(":")[1] : (I.klic.split(":")[1] || "");
      const area = p === "region" ? { "@type": "AdministrativeArea", name: KRAJ[I.klic.split(":")[1]] }
        : /pouze v Jižních Čechách/.test(I.desc) ? { "@type": "AdministrativeArea", name: "Jihočeský kraj" } : { "@type": "Country", name: "Česko" };
      G.push({ "@type": "Service", name: I.h1, ...(p !== "region" ? { serviceType: SLUZBA[o] } : {}), description: I.desc, url: I.url, provider: { "@id": FID }, areaServed: area });
    }
    if (p === "realizace" || p === "radce") {
      const L = [...new Map([...document.querySelectorAll('main a[href*="stavba.html?id="]')].map(a => [new URL(a.href).searchParams.get("id"), a])).keys()].map(stavba).filter(Boolean);
      G.push({ ...web, "@type": "CollectionPage", ...(p === "realizace" ? { mainEntity: { "@type": "ItemList", numberOfItems: L.length,
        itemListElement: L.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.n, url: s.odkaz })) } } : {}) });
    }
    if (p === "stavba" && I.s) {
      const th = [...document.querySelectorAll("#thumbs button:not(.vid) img")].map(i => [i.getAttribute("src").replace(/-t\.jpg$/, ".jpg"), i.getAttribute("alt")]);
      const im = (th.length ? th : [[`../assets/foto/${I.s.id}.jpg`, I.s.n]]).map(([s, c]) => fotka(s, c));
      G.push({ ...web, primaryImageOfPage: im[0], image: im });
    }
    if (["kategorie", "produkt", "postup", "radce"].includes(p)) { const Q = faq(); if (Q.length) G.push({ "@type": "FAQPage", mainEntity: Q }); }
    if (["uvod", "kategorie", "produkt", "recenze", "showroom", "onas", "stavba", "videa"].includes(p)) {
      const V = videa();
      if (p === "videa" && V.length) G.push({ "@type": "ItemList", name: I.h1, itemListElement: V.map((v, i) => ({ "@type": "ListItem", position: i + 1, item: v })) });
      else G.push(...V);
    }
    return G;
  }

  function hlavniFoto(I) {
    if (I.s) return abs(`../assets/foto/${I.s.id}.jpg`);
    if (page() === "uvod") return abs("../assets/video/hero-pc-poster.jpg");
    const i = document.querySelector('main img[fetchpriority="high"]') || [...document.querySelectorAll("main img")].find(x => /\.jpe?g/.test(x.getAttribute("src") || ""));
    return abs(i ? i.getAttribute("src") : "../assets/foto/29570.jpg");
  }

  function obnov() {
    const I = info(), p = page();
    if (I.nf) { meta("name", "kr:cilova-url", "404.php"); vloz([]); return I; }
    if (I.title) document.title = I.title;
    if (I.desc) meta("name", "description", I.desc);
    meta("name", "kr:cilova-url", I.url);
    /* H1 z mapy jen u stránek, které skládá skript (typy produktů, archiv realizací); statické stránky ho mají v HTML */
    const h = document.querySelector("main h1");
    if (h && I.h1 && (p === "produkt" || p === "realizace") && !h.children.length) h.textContent = I.h1;
    meta("property", "og:title", I.title); meta("property", "og:description", I.desc);
    meta("property", "og:type", "website"); meta("property", "og:locale", "cs_CZ"); meta("property", "og:site_name", "Karásek s.r.o.");
    meta("property", "og:image", hlavniFoto(I)); meta("name", "twitter:card", "summary_large_image");
    vloz(schema(I));
    return I;
  }
  /* jediný blok JSON-LD na stránce: cizí bloky (dřívější skripty stránek) se odstraní, aby schema neexistovalo dvakrát */
  let ld;
  function vloz(G) {
    document.querySelectorAll('script[type="application/ld+json"]:not([data-kr-seo])').forEach(s => s.remove());
    if (!G.length) { if (ld) { ld.remove(); ld = null; } return; }
    if (!ld) { ld = document.createElement("script"); ld.type = "application/ld+json"; ld.dataset.krSeo = ""; document.head.appendChild(ld); }
    ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": G });
  }
  new MutationObserver(m => { if (m.some(r => [...r.addedNodes].some(n => n.type === "application/ld+json" && !n.hasAttribute("data-kr-seo")))) obnov(); })
    .observe(document.head, { childList: true });

  window.KRseo = { obnov, T, cil, info };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", obnov); else obnov();
  addEventListener("load", obnov);
  addEventListener("popstate", () => setTimeout(obnov));
})();
