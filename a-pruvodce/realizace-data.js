/* Data staveb pro směr A (úvod i stránka výsledků). Zdroj: ../assets/prehled-realizaci.json (31 staveb).
   Systém, barva a lokalita jsou vytažené jen z názvů a textů staveb, nic doplněného.
   Výtah = doslovné věty z textu stavby („…“ = vynechaná část). */
window.KR = (() => {
  const typy = [
    ["zahrada", "Zimní zahrada", "Zimní zahrady"],
    ["zaskleni", "Zasklení terasy", "Zasklení teras"],
    ["pergola", "Pergola", "Pergoly"],
    ["stineni", "Stínění", "Stínění"]
  ];
  const systemy = [
    ["Zasklení", [["move", "Bezrámové Patio Living Move"], ["combi", "Rámové Combi"], ["plus", "Rámové Plus"], ["therm", "Patio Living Therm"]]],
    ["Sklo a střecha", [["esg", "Kalené sklo ESG"], ["connex", "Sklo Connex"], ["pcd", "Polykarbonát"], ["dvojsklo", "Dvojsklo"]]],
    ["Stínění a ovládání", [["baldachyn", "Baldachýn"], ["rolety", "Rolety a žaluzie"], ["somfy", "Motory Somfy"]]]
  ];
  const barvy = [
    ["antracit", "Antracit (RAL 7016)", "#383e42"],
    ["hneda", "Hnědá RAL 8017", "#45322e"],
    ["ral8003", "RAL 8003", "#734222"],
    ["alinox", "Alinox, imitace nerezu", "linear-gradient(135deg,#eef1f3,#9aa3a9 55%,#dfe3e6)"],
    ["svetla", "Světlá RAL", "#e6e1d6"]
  ];
  /* lokality doplní klientka – zatím jen to, co je v textech staveb */
  const lokality = [
    ["jih", "Jižní Čechy"],
    ["sever", "Severní Čechy"],
    ["vychod", "Východní Čechy, Žamberk"]
  ];
  // [soubor, název, datum, typy, systémy, barva, lokalita, výtah, odkaz]
  const R = [
    ["29532","Bezrámové zasklení Patio Living Move do dřevěné pergoly, ESG 8 mm, alinox","2026-07",["zaskleni"],["move","esg"],"alinox","",
     "Při této realizaci jsme vsadili na maximální čistotu designu a nerušený výhled do zahrady. … Profily jsme zvolili v luxusním provedení imitace nerezu (alinox), což v kombinaci s masivním dřevem vytváří neobyčejně elegantní kontrast.",
     "https://karasek.cz/reference/bezramove-zaskleni-patio-livnig-move-do-drevene-pergoly-esg-8-mm-alinox/"],
    ["29555","Sezonní zimní zahrada 6×3, hnědá, PCD 16 mm, LED","2026-07",["zahrada"],["pcd"],"hneda","",
     "Tato realizace byla od samého počátku provázena precizním plánováním. Novou sezónní zimní zahradu jsme totiž stavěli namísto původní, již dosluhující dřevěné pergoly.",
     "https://karasek.cz/reference/sezonni-zimni-zahrada-6x3-hneda-pcd-16-mm-led/"],
    ["25483","Rámové zasklení dřevěné pergoly, světlá RAL, Combi, ESG kalené sklo","2026-01",["zaskleni","stineni"],["combi","esg","rolety"],"svetla","",
     "U této realizace jsme dodali rámové zasklení systému COMBI do stávající dřevěné pergoly. Zvolená světlá RAL barva přirozeně ladí s konstrukcí pergoly a zachovává lehký, čistý vzhled celého prostoru.",
     "https://karasek.cz/reference/ramove-zaskleni-drevene-pergoly-svetla-ral-combi-esg-kalene-sklo/"],
    ["25190","Samonosná sezónní zimní zahrada u dřevostavby","2025-12",["zahrada"],["connex","combi","esg"],"antracit","",
     "U této zakázky se jedná o naši konstrukci zimní zahrady se skrytým žlabem a šikmou střechou. Jako krytinu si zákazník vybral čiré bezpečnostní sklo Connex 3.3.2.",
     "https://karasek.cz/reference/samonosna-sezonni-zimni-zahrada-u-drevostavby/"],
    ["24199","Posuvné zasklení terasy u novostavby s atikou, Combi antracit","2025-10",["zaskleni"],["combi","esg"],"antracit","",
     "Na novostavbě, kde byla připravena terasa s rohovým sloupem a s atikou jsme instalovali posuvné zasklení terasy Combi v antracitu RAL 7016 s kaleným sklem ESG, které poskytuje odolnost proti nárazům a bezpečné používání.",
     "https://karasek.cz/reference/posuvne-zaskleni-terasy-u-novostavby-s-atikou-combi-antracit-kalene-sklo-esg/"],
    ["24141","Bezrámový systém Patio Living Move 3.0 Alinox","2025-10",["zaskleni"],["move"],"alinox","",
     "Nová realizace bezrámového systému, který pro Vás nabízíme v nové generaci 3.0. Tato má vylepšené podvozky s dvojitými kolečky, navíc také umožní širší a těžší panely.",
     "https://karasek.cz/reference/bezramovy-system-patio-living-move-3-0-alinox/"],
    ["24173","Bezrámový Patio Living Move, posuvné, antracit","2025-10",["zaskleni"],["move"],"antracit","",
     "Do dřevěné pergoly jsme instalovali bezrámový posuvný systém Patio Living Move v antracitu. … Skla se dají otevírat z obou stran, což zvyšuje komfort a flexibilitu při používání.",
     "https://karasek.cz/reference/bezramovy-patio-living-move-posuvne-antracit/"],
    ["24151","Rámové zasklení Combi antracit – dřevěná pergola k použití po celý rok","2025-10",["zaskleni"],["combi"],"antracit","",
     "Rámové zasklení Combi v antracitu proměnilo tuto dřevěnou pergolu v plnohodnotný obytný prostor. … Majitelé si teď mohou pergolu užívat po celý rok – chráněni před deštěm, větrem i chladem.",
     "https://karasek.cz/reference/ramove-zaskleni-combi-antracit-drevena-pergola-k-pouziti-nyni-po-cely-rok/"],
    ["24158","Posuvné zasklení dřevěné pergoly – Combi Antracit","2025-10",["zaskleni"],["combi"],"antracit","",
     "Posuvné zasklení Combi v antracitu dodalo této dřevěné pergole zcela nový rozměr. … Pergola se stala využitelnou po celý rok – ideální pro posezení s rodinou i odpočinek po práci.",
     "https://karasek.cz/reference/posuvne-zaskleni-drevene-pergoly-combi-antracit/"],
    ["24164","Combi izo – RAL 7016 sezonní dvojsklo","2025-10",["zaskleni"],["combi","dvojsklo"],"antracit","",
     "Do dřevěné pergoly jsme instalovali Combi IZO v antracitu se dvěma systémy po čtyřech panelech. … Díky tomu je pergola komfortní a využitelná po celý rok.",
     "https://karasek.cz/reference/combi-izo-ral-7016-sezonni-dvojsklo/"],
    ["23329","Hliníková pergola se skrytým žlabem a Screen rolety","2025-09",["pergola","stineni"],["pcd","somfy","rolety"],"","",
     "Tato realizace představuje hliníkovou pergolu se skrytým žlabem, která kombinuje moderní design s vysokou odolností. … Ovládání je zajištěno technologií Somfy IO s možností plného propojení do mobilní aplikace.",
     "https://karasek.cz/reference/hlinikova-pergola-se-skrytym-zlabem-a-screen-rolety/"],
    ["23293","Sezonní zimní zahrada, RAL 7016, 4×3 + baldachýn","2025-09",["zahrada","stineni"],["connex","baldachyn"],"antracit","",
     "Tato sezónní zimní zahrada je řešena s elegantní konstrukcí v antracitovém provedení a skrytým žlabem. … O komfortní klima se stará baldachýnové zastínění, které chrání proti přehřívání.",
     "https://karasek.cz/reference/sezonni-zimni-zahrada-ral-7016-4x3-baldachyn/"],
    ["23236","Zasklení pergoly – Rámový systém PLUS RAL, kalené sklo","2025-09",["zaskleni"],["plus","esg"],"","",
     "Odborně jsme namontovali rámové zasklení do této dřevěné pergoly. Jedná se o sezonní variantu posuvného zasklení systému PLUS, který má rámeček pouze 30 mm.",
     "https://karasek.cz/reference/zaskleni-pergoly-ramovy-system-plus-ral-kalene-sklo/"],
    ["23311","Rámové zasklení do pergoly v zahradě, Combi 4D+3D+3D","2025-09",["zaskleni"],["combi","esg"],"antracit","",
     "Do zahradní pergoly jsme realizovali rámové zasklení COMBI v kombinaci sestav 4D + 3D + 3D. … Zasklení bylo instalováno přímo mezi dřevěné sloupky pergoly, takže konstrukce působí přirozeně a neruší celkový vzhled zahrady.",
     "https://karasek.cz/reference/ramove-zaskleni-do-pergoly-v-zahrade-combi-4d3d3d/"],
    ["23300","Sezonní zimní zahrada úzká, bezrámové zasklení","2025-09",["zahrada"],["move","connex"],"antracit","sever",
     "Napojením na rodinný dům došlo k výraznému zvětšení obytné plochy a vytvoření útulného zázemí pro každodenní využití. … Realizace se uskutečnila na severu Čech.",
     "https://karasek.cz/reference/sezonni-zimni-zahrada-uzka-bezramove-zaskleni/"],
    ["22218","Zasklení terasy rodinného domu, RAL 7016 antracit","2025-07",["zaskleni"],[],"antracit","",
     "Další z klasických realizací, kdy vznikne chráněný prostor před deštěm, větrem i sněhem. Konečně mají zákazníci použitelný venkovní prostor po celý rok.",
     "https://karasek.cz/reference/zaskleni-terasy-rodinneho-domu-ral-7016-antracit/"],
    ["22207","Posuvné zasklení antracit, kalené sklo","2025-07",["zaskleni"],["combi","esg"],"antracit","",
     "Instalace přímo mezi sloupky dřevěné pergoly, ideálně připravené. … Instalace rámového posuvného zasklení typu COMBI v oblíbeném antracitu. Samozřejmostí kalené bezpečnostní sklo ESG.",
     "https://karasek.cz/reference/posuvne-zaskleni-antracit-kalene-sklo/"],
    ["21506","Zasklení terasy Combi + hliníkové žaluzie","2025-06",["zaskleni","stineni"],["combi","esg","rolety"],"antracit","",
     "Na zasklení terasy u rodinného domu si zákazník vybral náš hliníkový rámový systém Combi. … Jako vnitřní stínění jsme instalovali hliníkové žaluzie s lamelou do tvaru písmena L.",
     "https://karasek.cz/reference/zaskleni-terasy-combi-hlinikove-zaluzie/"],
    ["21454","Baldachýn do zimní zahrady – béžový dekor a antracitové kolejnice","2025-06",["stineni"],["baldachyn"],"","",
     "Rádi Vám dodáme zastínění baldachýnem do Vaší zimní zahrady. … Systém je pojezdový na ložiskových kolečkách, které jezdí v hliníkové kolejnici.",
     "https://karasek.cz/reference/baldachyn-do-zimni-zahrady-bezovy-dekor-a-antracitove-kolejnice/"],
    ["18873","Zasklená bioklimatická pergola – RAL 7016","2025-03",["pergola","zaskleni"],["combi","somfy"],"antracit","",
     "Bioklimatická pergola s inteligentně ovládanou střechou a rámovým zasklením Combi je ideálním řešením pro každého, kdo chce maximální ochranu, moderní design a variabilní využití prostoru.",
     "https://karasek.cz/reference/zasklena-bioklimaticka-pergola-ral-7016-pohodli-v-kazdem-rocnim-obdobi/"],
    ["18034","Bezrámové zasklení rohu zahradního domku – Patio Living Move","2025-01",["zaskleni"],["move","esg"],"antracit","jih",
     "Velmi povedená a zajímavá realizace bezrámového zasklení v jižních Čechách. … Patio Living Move spojuje užitečnost a eleganci a umožňuje nám výhled do zahrady bez rušivých profilů – rámů.",
     "https://karasek.cz/reference/bezramove-zaskleni-rohu-zahradniho-domku-patio-living-move/"],
    ["17845","Rámové zasklení terasy RD – systém Combi RAL 7016 (antracit)","2025-01",["zaskleni"],["combi"],"antracit","",
     "U realizace v přiložené fotogalerii jsme u nejširší stěny zasklení využili dvě třídílné sestavy, které nám jezdí po jedné koleji a je možné je otevírat od středu směrem ke krajům.",
     "https://karasek.cz/reference/ramove-zaskleni-terasy-rd-system-combi/"],
    ["17747","Zahradní domek – rámové zasklení Combi","2025-01",["zaskleni"],["combi"],"","",
     "Zasklení rohu zahradního domku pomocí rámového zasklení Combi. Kombinace třídílné a čtyřdílné sestavy, obě sestavy se potkávají na rohu u dřevěného sloupku zahradního domku…",
     "https://karasek.cz/reference/zahradni-domek-ramove-combi/"],
    ["17692","Hliníková pergola s jednou zasklenou stěnou a skleněnou střechou","2025-01",["pergola","stineni"],["plus","connex","esg","baldachyn"],"antracit","",
     "Hliníková konstrukce pergoly v antracitové barvě se skrytým žlabem. … O vnitřní stínění střechy se stará baldachýn, který je ovládaný převodovkou a jezdí po vodících lištách integrovaných na spodní strany krokve.",
     "https://karasek.cz/reference/hlinikova-pergola-s-jednou-zasklenou-stenou/"],
    ["17372","Celoroční zimní zahrada a izolační posuvné zasklení Patio Living Therm","2024-12",["zahrada","zaskleni"],["therm","dvojsklo"],"","",
     "Další spokojený klient používá svou zimní zahradu po celý rok! Vyrobili a namontovali jsme posuvné izolační zasklení s přerušeným tepelným mostem.",
     "https://karasek.cz/reference/celorocni-zimni-zahrada-a-izolacni-posuvne-zaskleni-patio-living-therm-dvojskla-24-mm-izo-strecha/"],
    ["17508","Rámové zasklení Plus RAL 8003, ESG 5 mm, široká křídla zasklení","2024-12",["zaskleni"],["plus","esg"],"ral8003","vychod",
     "Na východě Čech u města Žamberk jsme zákazníkovi realizovali rámové zasklení systémem Plus. Vše lakováno do barvy RAL 8003.",
     "https://karasek.cz/reference/ramove-zaskleni-plus-ral-8003-esg-5-mm-siroka-kridla-zaskleni/"],
    ["17454","Rámové zasklení Combi a PCD střecha – uzavření terasy u rodinného domu","2024-12",["zaskleni","pergola"],["combi","pcd","esg"],"antracit","",
     "V první fázi jsme realizovali střechu z mléčného 16 mm polykarbonátu (PCD). Vše sedlo přesně podle výkresu a my se mohli přesunout k instalaci zasklení.",
     "https://karasek.cz/reference/ram-combi-zaskleni-terasa-rd/"],
    ["17448","Zasklení terasy u RD rámovým systémem Plus a fixní zasklení šikminy","2024-12",["zaskleni"],["plus"],"","",
     "Mezi vaznicí, kleštinou a krokvemi je soustava fixních dílů, které na sebe navazují a tvoří prosklený štít. Vše působí jako celek fantasticky a na první pohled taková zasklená terasa zaujme.",
     "https://karasek.cz/reference/zaskleni-terasy-u-rd-ram-sys-plus/"],
    ["17435","Zasklení pergoly bezrámovým, rámovým a fixním zasklením","2024-12",["zaskleni"],["move","plus"],"","",
     "U této zakázky jsme kombinovali bezrámové, rámové a fixní zasklení. Bezrámové zasklení Patio Living Move je použito na bočních průchozích stěnách pergoly.",
     "https://karasek.cz/reference/zaskleni-pergoly-bezramovym-a-fixnim-zasklenim/"],
    ["17392","Terasa RD zasklená rámovým systémem Combi RAL 7016","2024-12",["zaskleni","stineni"],["combi","esg","rolety"],"antracit","",
     "Uzavřené posezení na terase rodinného domu s výhledem na bazén. V rámci přístavby zděné terasy jsme navrhovali a montovali zasklení Combi.",
     "https://karasek.cz/reference/terasa-rd-zasklena-ramovy-systemem-combi-ral-7016/"],
    ["17332","Combi RAL 7016, zasklení terasy, rolety","2024-12",["zaskleni","stineni"],["combi","esg","connex","rolety"],"antracit","",
     "Rámové zasklení terasy systémem Combi s bezpečnostním kaleným sklem ESG 5 mm. … Zasklení jsme později doplnili o vnitřní stínění v provedení roletek bez kazety.",
     "https://karasek.cz/reference/combi-ral-7016-zaskleni-terasy-rolety/"]
  ];
  const stavby = R.map(([id, n, d, typ, sys, barva, lok, vytah, odkaz]) => ({ id, n, d, typ, sys, barva, lok, vytah, odkaz }));
  const KEYS = ["typ", "system", "barva", "lokalita"];
  // filtr: f = {typ, system, barva, lokalita}, prázdná hodnota = vše
  const match = (s, f) =>
    (!f.typ || s.typ.includes(f.typ)) &&
    (!f.system || s.sys.includes(f.system)) &&
    (!f.barva || s.barva === f.barva) &&
    (!f.lokalita || s.lok === f.lokalita);
  const filter = f => stavby.filter(s => match(s, f));
  // kolik staveb by zbylo, kdybychom v jedné skupině zvolili hodnotu v
  const countWith = (f, key, v) => filter({ ...f, [key]: v }).length;
  const fromURL = (search = location.search) => {
    const q = new URLSearchParams(search), f = {};
    for (const k of KEYS) f[k] = q.get(k) || "";
    return f;
  };
  const toQuery = f => { const q = new URLSearchParams(); for (const k of KEYS) if (f[k]) q.set(k, f[k]); const s = q.toString(); return s ? "?" + s : ""; };
  const label = {
    typ: Object.fromEntries(typy.map(([k, n]) => [k, n])),
    system: Object.fromEntries(systemy.flatMap(([, l]) => l)),
    barva: Object.fromEntries(barvy.map(([k, n]) => [k, n])),
    lokalita: Object.fromEntries(lokality)
  };
  const stavbyLabel = n => n === 1 ? "stavbu" : n >= 2 && n <= 4 ? "stavby" : "staveb";
  const stavbyNom = n => n === 1 ? "stavba" : n >= 2 && n <= 4 ? "stavby" : "staveb";
  return { typy, systemy, barvy, lokality, stavby, KEYS, match, filter, countWith, fromURL, toQuery, label, stavbyLabel, stavbyNom };
})();
