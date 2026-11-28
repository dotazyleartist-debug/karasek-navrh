/* Fakta z katalogů Karásek 2026 (PDF od klienta, 2026-11-26), po klíčích "oblast/podprodukt" jako v katalog.js.
   Zdroj faktů: 05-realizace/2026-11-26-katalogy/katalogy-fakta.md. Bez cen, bez akce z letáku, nic doplněného.
   Tvar: { uvod, zdroj: [název PDF katalogu], systemy: [{ n, par: [[název, hodnota]], vyhody: [text] }] }.
   Vykreslení: produkt.html (sekce "Systémy a parametry"). */
window.KRkatalog2026 = {
  "zahrada/celorocni": {
    uvod: "Celoroční zimní zahrada má konstrukci z pohledového lepeného dřeva BSH s CNC opracováním. Střecha je z izolačního dvojskla a boční stěny tvoří systém Patio Living Therm. Každá zahrada je návrh na míru.",
    zdroj: ["Dřevěná celoroční zimní zahrada"],
    systemy: [{
      n: "Dřevěná celoroční zimní zahrada (BSH)",
      par: [
        ["Konstrukce", "pohledové lepené dřevo BSH, CNC opracování"],
        ["Střecha", "bezpečnostní izolační dvojsklo 44.2 / 16 / ESG 6 mm, plněné argonem, U = 1,1"],
        ["Termoregulace", "volitelně protisluneční varianta skla Stopsol"],
        ["Boční stěny", "posuvné systémy Patio Living Therm s izolačním dvojsklem"],
        ["Ošetření dílů", "ochranný nátěr proti vlhkosti a UV záření"],
        ["Doplňky", "střešní i boční markýzy či rolety, integrované LED osvětlení"]
      ],
      vyhody: [
        "BSH hranoly drží tvar, nepraskají a mají vysokou nosnost i při dlouhodobém zatížení.",
        "CNC opracování zajišťuje, že do sebe prvky přesně zapadají.",
        "Systém Therm má přerušený tepelný most a konstrukce se nerosí.",
        "Zateplená konstrukce a izolační dvojsklo umožňují využití i v mrazivých měsících."
      ]
    }]
  },

  "zahrada/sezonni": {
    uvod: "Sezónní zimní zahrada je hliníková konstrukce vyráběná na míru pro využití od jara do podzimu. Speciální přední profil slouží jako nosník i jako žlab. Šířka konstrukce není omezena.",
    zdroj: ["Sezónní zimní zahrada na míru"],
    systemy: [{
      n: "Sezónní zimní zahrada na míru",
      par: [
        ["Šířka konstrukce", "neomezená, stojiny v rozestupech cca 300–450 cm"],
        ["Zastřešení", "bezpečnostní sklo Connex 3.3.2 (čiré nebo mléčné) nebo dutinkový polykarbonát Lexan 16 mm (čirý nebo mléčný)"],
        ["Boční zasklení", "rámové posuvné systémy nebo bezrámové systémy"],
        ["Barvy", "RAL 7016 antracit struktura, RAL 9006SP stříbrná, RAL 8017 hnědá jemná struktura, RAL 9010C bílá pololesk, další RAL na zakázku"],
        ["Odvod vody", "skrytý, uvnitř 1 nebo 2 předních stojin; neviditelné kování"],
        ["Doplňky", "integrované LED osvětlení, markýzy a rolety na střechu nebo stěny"]
      ],
      vyhody: [
        "Čistá estetika a skrytý odvod vody.",
        "Světlo a nerušený výhled do zahrady.",
        "Řešení na míru, statika podle sněhové oblasti.",
        "Prodloužený pobyt na terase od časného jara do pozdního podzimu."
      ]
    }]
  },

  "zaskleni/ramove": {
    uvod: "Hliníkový rámový zasklívací systém pro terasy a pergoly se vyrábí v řadě Plus a ve zesílené řadě Combi. Sestavy jsou pevné i posuvné. Plynulý a tichý posun umožní otevřít nebo složit zasklení během několika sekund.",
    zdroj: ["Rámový zasklívací systém"],
    systemy: [{
      n: "Řada Plus",
      par: [
        ["Provedení", "standardní subtilní rámový systém pro běžné rozměry"],
        ["Maximální výška", "do 220 cm"],
        ["Profily", "lehké hliníkové s drážkou 8 mm"],
        ["Vedení", "spodní nosná a horní vodicí kolejnice, od 2 do 5 kolejí"],
        ["Tloušťka výplně", "4 až 8 mm (sklo)"],
        ["Sestavy", "pevné i posuvné, 1- až 5-dílné; na jednu stranu se otevře max. 5 dílů, dalších až 5 lze přisunout z druhé strany"]
      ],
      vyhody: [
        "Plynulý a tichý posun, otevření či složení během několika sekund.",
        "U 5dílné varianty se otevře až 4/5 prosklené plochy.",
        "Široká škála výplní o tloušťce 4 až 8 mm.",
        "Ochrana proti větru a dešti při zachování světla."
      ]
    }, {
      n: "Řada Combi",
      par: [
        ["Provedení", "zesílené vertikální profily s vyšší tuhostí a zaoblením"],
        ["Maximální výška", "do 300 cm"],
        ["Zesílený profil „s boulí“", "vyšší tuhost až do výšky 300 cm"],
        ["Profily", "FIX profil, Vertikální Plus, Vertikální Combi, zesílený profil „s boulí“"],
        ["Doplňky", "řetízkové látkové rolety, vertikální žaluzie"]
      ],
      vyhody: [
        "Robustnější a tužší vertikální profily pro větší plochy.",
        "Pevná i posuvná provedení, sestavy lze spojovat.",
        "Ochrana proti větru a dešti při zachování světla."
      ]
    }]
  },

  "zaskleni/bezramove": {
    uvod: "Bezrámové posuvné zasklení z kaleného bezpečnostního skla nemá svislé hliníkové profily, takže neruší výhled do zahrady. Nabízíme generaci Patio Living Move 3.0 s volitelným pohonem a starší provedení Patio Living Move. Obě otevírají křídla z obou stran.",
    zdroj: ["PATIO LIVING MOVE 3.0", "PATIO LIVING MOVE"],
    systemy: [{
      n: "PATIO LIVING MOVE 3.0",
      par: [
        ["Sklo", "10 mm kalené bezpečnostní sklo ESG, broušené (leštěné) hrany"],
        ["Maximální šířka křídla", "1 500 mm"],
        ["Maximální výška křídla", "3 000 mm"],
        ["Váha jednoho panelu", "až 120 kg"],
        ["Počet kolejnic", "2, 3, 4, 5 nebo 6"],
        ["Spodní kolejnice", "výška 20 mm, možnost 100% zapuštění, integrovaná drenáž; zapuštěná nebo s nájezdem"],
        ["Pojezd", "nerezová tandemová ložiska, výškově seřiditelná v rozsahu až 6 mm"],
        ["Ovládání", "dotyk, dálkový ovladač nebo mobilní aplikace (iOS, Android), motorický pohon"],
        ["Osvětlení", "stmívatelné LED v horní vodicí kolejnici"],
        ["Životnost", "certifikováno na více než 40 000 cyklů"]
      ],
      vyhody: [
        "Panoramatický výhled bez svislých rámů.",
        "Tichý a lehký pojezd i u křídel o váze 120 kg.",
        "Bezbariérový průchod při zapuštěné kolejnici.",
        "Odolnost proti nárazovému větru a dešti, drenážní kanálky.",
        "Křídla lze přesunout na pravou i levou stranu."
      ]
    }, {
      n: "PATIO LIVING MOVE",
      par: [
        ["Sklo", "bezpečnostní kalené, tloušťka 8 nebo 10 mm podle rozměrů a pevnosti, čiré nebo pískované"],
        ["Maximální šířka panelu", "1 100 mm"],
        ["Maximální výška zasklení", "3 000 mm"],
        ["Hmotnost panelu", "max. 70 kg"],
        ["Počet kolejnic", "3, 4, 5 nebo 6"],
        ["Spodní kolejnice", "nosná, s integrovanými ložiskovými kolečky"],
        ["Doplňky zasklení pergol", "řetízkové látkové rolety, vertikální žaluzie"]
      ],
      vyhody: [
        "Bez svislých hliníkových profilů, výhled do zahrady.",
        "Vysoká pevnost a odolnost kaleného skla vůči nárazům.",
        "Lehký, tichý a plynulý chod na ložiskových kolečkách.",
        "Vhodné i pro velmi rozměrné prostory díky více kolejnicím."
      ]
    }]
  },

  "zaskleni/izolacni": {
    uvod: "Patio Living Therm je rámový zasklívací systém z hliníkových profilů s drážkou pro izolační dvojsklo 24 mm. Má přerušený tepelný most a je určený pro temperované prostory. Nabízí dvou- i třídílné sestavy.",
    zdroj: ["PATIO LIVING THERM"],
    systemy: [{
      n: "PATIO LIVING THERM",
      par: [
        ["Provedení", "dvou- nebo třídílný systém, dvou- a trojkolejnice; u třídílného až 2/3 otevřeného prostoru"],
        ["Therm Fix", "pevná stěna, případně nadsvětlík"],
        ["Otevíratelné prvky", "okna či dveře v systému 70 mm"],
        ["Dvojsklo", "24 mm (4/16/4): Float 4 mm / 16 mm plastový rámeček / Float 4 mm, pokovení a argon; na přání matovaná, ornamentní, zrcadlová skla"],
        ["Prostup tepla", "sklo Ug = 1,1; systém celkově Uw = 1,5"],
        ["Maximální rozměr panelu", "2200 × 2600 mm"],
        ["Maximální hmotnost křídla", "100 kg"],
        ["Standardní barvy", "antracit RAL 7016, hnědá RAL 8017, stříbrná RAL 9006, bílá RAL 9010; ostatní RAL za příplatek"]
      ],
      vyhody: [
        "Vhodné pro pergoly využívané i v chladných měsících.",
        "Minimální únik tepla díky přerušenému tepelnému mostu.",
        "Použití: relaxace, posezení s rodinou, pěstování rostlin citlivých na teplotu.",
        "Moderní design přizpůsobitelný architektuře, jednoduchá údržba."
      ]
    }]
  },

  "zaskleni/lamelove": {
    uvod: "Patio Living Tilt jsou boční posuvné lamelové panely k lamelové pergole Panorama 2.0 nebo k přístřeškům pro auta. Panely se posouvají k jedné straně nebo centrálně jako opona. Rámy lze lakovat podle vzorníku RAL.",
    zdroj: ["PATIO LIVING TILT"],
    systemy: [{
      n: "PATIO LIVING TILT",
      par: [
        ["Výplně", "lamela pevná, lamela pevná s látkou, lamela zkosená, lamela zkosená otočná, panel s látkou"],
        ["Otevírání", "posun k jedné straně nebo centrální (jako opona)"],
        ["Otvor k vyplnění", "šířka 1 000–7 000 mm, výška 550–2 700 mm"],
        ["Jednotlivý panel", "šířka 500–1 250 mm, výška 550–2 700 mm"],
        ["Barvy", "hliníkové rámy dle kompletního vzorníku RAL; technologie Decoral pro dekorativní povrchy panelů"],
        ["Vedení", "boční vodicí lišty, pevnost i při větru"]
      ],
      vyhody: [
        "Pohyb bez námahy, panely po spodní kolejnici vedené v horním profilu.",
        "Stabilita i za větru.",
        "Ochrana před počasím a okolním hlukem, soukromí.",
        "Dlouhá životnost a bezúdržbový provoz.",
        "Variabilita výplní."
      ]
    }]
  },

  "zaskleni/steny": {
    uvod: "Interiérové posuvné dělící stěny z hliníkových profilů a skla či jiných výplní rozdělí byt nebo kancelář na zóny a propouštějí přitom světlo. Nabízíme systémy Plus, Combi a Fix. Křídla pojíždějí po nízké kolejnici, kterou lze zapustit do podlahy.",
    zdroj: ["DĚLÍCÍ STĚNY"],
    systemy: [{
      n: "Systém PLUS",
      par: [
        ["Použití", "univerzální základ s maximální variabilitou"],
        ["Sestavy", "z 2 až 5 křídel, posuvné i pevné; při 5dílné sestavě lze otevřít až 4/5 stavebního otvoru"],
        ["Maximální světlá výška", "2 200 mm"],
        ["Šířka vertikálního profilu", "3 cm"]
      ],
      vyhody: [
        "Velkoformátové sklo zachovává světlo a opticky propojuje prostor.",
        "Jasně definované zóny pro práci i odpočinek."
      ]
    }, {
      n: "Systém COMBI",
      par: [
        ["Použití", "zesílená konstrukce pro vysoké stropy"],
        ["Maximální světlá výška", "3 000 mm"],
        ["Šířka vertikálního profilu", "5 cm"]
      ],
      vyhody: [
        "Zesílená konstrukce pro vysoké stropy.",
        "Křídla pojíždějí po nízké kolejnici, bezbariérový průchod."
      ]
    }, {
      n: "Systém FIX",
      par: [
        ["Použití", "pevné zasklení a atypická řešení (světlíky, rohové sestavy, pevná pole)"]
      ],
      vyhody: [
        "Řešení pro atypické tvary a pevná pole.",
        "Barevné přizpůsobení profilů a dekorů interiéru."
      ]
    }, {
      n: "Společné parametry všech systémů",
      par: [
        ["Pojezdová kolejnice", "výška 17 mm, lze ji zapustit do podlahy"],
        ["Výplně", "bezpečnostní kalené či lepené sklo, komůrkový i plný polykarbonát, laminovaná dřevotříska (LTD) v široké škále dekorů"],
        ["Skla", "čirá, kouřová, pískovaná, kombinace s dřevodekory"],
        ["Profily", "hliník, barevně přizpůsobitelný nábytku, podlaze či stěnám"],
        ["Těsnění", "obvodové kartáčkové (prach, útlum zvuku)"],
        ["Zamykání", "volitelně bezpečnostní"],
        ["Životnost", "minimálně 20 let (předpokládaná až 50 let)"],
        ["Odolnost", "testováno Centrem stavebního inženýrství"]
      ],
      vyhody: [
        "Kvalitní těsnění brání pronikání hluku a víření prachu."
      ]
    }]
  },

  "pergola/bioklima": {
    uvod: "Panorama 2.0 je lamelová pergola s elektricky natáčecími lamelami, které po zavření nepropustí vodu. Přední profil je nosný a skrývá žlab, voda odtéká svodem uvnitř stojin. K pergole lze doplnit svislé dekorativní lamely Patio Living Pillar.",
    zdroj: ["PANORAMA 2.0", "PATIO LIVING PILLAR"],
    /* podtémata s vlastním H2 (TOP-CR B3): řádky Lamely, Sněhové zatížení, Ovládání, Boční uzavření a Doplňky přesunuté z par.
       f = foto ze stavby 18873 (assets/foto), odkazy = typy webu, které na téma navazují. Strany = PDF katalogu. */
    temata: [{
      h: "Ovládání lamel a senzory",
      p: "Lamely se natáčejí elektricky až o 170°. Natočením regulujete slunce i větrání, po zavření lamely nepropustí vodu. Na stavbě v galerii lamely pohánějí motory Somfy a senzory samy rozpoznají déšť či silný vítr.",
      par: [["Natáčení lamel", "elektricky, až 170°"],
        ["Ovládání", "dálkový ovladač nebo mobilní aplikace"],
        ["Automatika", "volitelný větrný senzor a dešťové čidlo, které lamely samy uzavřou či otevřou"],
        ["Osvětlení", "úsporné LED osvětlení"]],
      f: ["18873-g3", "Lamely pergoly zespodu, natočené do otevřené polohy"]
    }, {
      h: "Odvod vody a sníh",
      p: "Přední profil je nosný a skrývá žlab. Voda z lamel odtéká svodem uvnitř stojin.",
      par: [["Zavřená střecha", "lamely uzavřou střechu zcela nepropustně"],
        ["Odvod vody", "žlab v předním profilu, svod uvnitř stojin"],
        ["Sněhové zatížení", "až 250 kg/m²"],
        ["Dimenze", "přizpůsobí se sněhové oblasti, zatížení a krytině"]],
      f: ["18873-g4", "Pergola zvenku: lamelová střecha a nosný přední profil"]
    }, {
      h: "Boční uzavření a doplňky",
      p: "Boky pergoly lze uzavřít navazujícími systémy: sklem, svislými roletami ZIP nebo posuvnými lamelovými stěnami. Na této stavbě je rámové zasklení Combi.",
      par: [["Zasklení", "skleněné výplně rámové i bezrámové"],
        ["Rolety ZIP", "svislé motorické rolety; Screen Zip Lamelovka má šířku pole až 6 m a výšku až 3,5 m"],
        ["Lamelové stěny", "boční posuvné panely Patio Living Tilt k pergole Panorama 2.0"],
        ["Stínění střechy", "markýzy a rolety na střechu a boční stěny"],
        ["Dekorativní lamely", "svislé lamely Patio Living Pillar s LED podsvícením"]],
      f: ["18873-g5", "Pohled zevnitř na zasklené boky pergoly"],
      odkazy: [["zaskleni", "ramove", "Rámové zasklení"], ["zaskleni", "bezramove", "Bezrámové zasklení"], ["stineni", "screen", "Screenové rolety ZIP"], ["zaskleni", "lamelove", "Lamelové stěny Tilt"]]
    }],
    systemy: [{
      n: "PANORAMA 2.0 – lamelová pergola",
      par: [
        ["Provedení", "samostatně stojící nebo kotvená ke stěně; více modulů lze propojit; varianta s pevnou střechou z kompozitního materiálu nebo kombinace pevné části a pohyblivých lamel"],
        ["Šířka jednoho modulu", "až 645 cm"],
        ["Délka lamel / vyložení", "až 470 cm"],
        ["Barvy", "konstrukce i lamely v libovolném odstínu RAL, mohou mít odlišnou barvu"]
      ],
      vyhody: [
        "Regulace slunce a větrání natáčením lamel.",
        "Ochrana před deštěm i sněhem.",
        "Šířka není omezena, stojiny podle dispozice terasy.",
        "Barevné kombinace konstrukce a lamel na přání.",
        "Boční stínění a zasklení navazujícími systémy."
      ]
    }, {
      n: "PATIO LIVING PILLAR – doplněk: svislé dekorativní lamely s LED",
      par: [
        ["Rozměr lamely", "šířka 60 mm, výška 120 mm"],
        ["Standardní rozteč", "120 mm (osová vzdálenost)"],
        ["Výška lamel", "podle výšky pergoly, na míru"],
        ["Materiál", "lakovaný hliník odolný povětrnostním vlivům"],
        ["Barva", "hliníkový rám dle vzorníku RAL"],
        ["Provedení", "zapuštěné nebo vystupující vůči nosnému profilu"],
        ["LED podsvícení", "teplá bílá 3000 K, studená bílá 4000 K, RGB; pásky zabudované do profilu 120 × 60 mm"]
      ],
      vyhody: [
        "Rovnováha mezi hrou světla a soukromím.",
        "Stabilita a odolnost po celou dobu životnosti.",
        "Jednoduchá montáž i údržba.",
        "Nízká spotřeba LED."
      ]
    }]
  },

  "stineni/markyzy-zz": {
    uvod: "Střešní markýzy stíní zimní zahradu nebo prosklenou střechu a chrání před přehříváním. Katalog nabízí markýzy Ancona (pod nebo nad sklem), Capri (nad střechou) a Portofino se ZIP systémem. Všechny jsou vyrobeny a složeny v Německu a odpovídají normě EN 13561.",
    zdroj: ["ANCONA MARKÝZA", "CAPRI MARKÝZA", "PORTOFINO"],
    systemy: [{
      n: "ANCONA – STŘEŠNÍ MARKÝZA",
      par: [
        ["Montáž", "podvěsná (verze Interior) pod skleněnou střechu, nebo nástřešní na krokve"],
        ["Maximální šířka", "1 modul 600 cm"],
        ["Maximální výsuv", "450 cm (zahrnuje kazetu a pojezdové zakončení)"],
        ["Výška systému", "154 mm (podvěsná), 175 mm (nástřešní)"],
        ["Volán Vario", "volitelný doplněk pouze pro verzi Interior"],
        ["Barvy rámu", "29 standardních bez příplatku, speciální RAL a efektové laky na přání"],
        ["Potah", "vysoce světlostálý značkový akryl; pro volán Vario perforovaná tkanina Soltis 92"],
        ["Motor", "Somfy iO, rádiový s dálkovým ovládáním; za příplatek automatika na počasí a aplikace Tahoma"]
      ],
      vyhody: [
        "Pojezdová kolečka uvnitř lišt zajišťují tichý a plynulý chod.",
        "Podvěsná verze je chráněna před deštěm, větrem i znečištěním.",
        "Nástřešní verze má standardně ochrannou stříšku.",
        "Výroba na míru podle délky krokví."
      ]
    }, {
      n: "CAPRI – MARKÝZA NAD STŘECHOU",
      par: [
        ["Provedení", "samostatný modul nebo spojený systém (2 moduly); Capri Pergola se stojinami; posunuté umístění lišt pro valbovou střechu a šikmé skleněné plochy"],
        ["Maximální šířka", "1 modul 700 cm; spojený systém (2 moduly) 1200 cm"],
        ["Výška systému", "241 mm včetně standardního uchycení"],
        ["Barvy rámu", "29 standardních bez příplatku, další RAL a efektové laky na přání"],
        ["Látky", "značkový akryl probarvený ve hmotě, nebo polyester / recyklovaný polyester"],
        ["Vedení", "vodicí vozík látky v jehlových ložiscích; vodicí lišty s plynovými písty"],
        ["Motor", "Somfy iO, rádiový s dálkovým ovládáním; volitelně automatika na počasí a aplikace Tahoma"]
      ],
      vyhody: [
        "Stíní zimní zahradu zvenčí a odráží teplo dříve, než projde sklem.",
        "Plně kazetová: kazeta chrání mechanismus i látku před počasím.",
        "Tichý a plynulý chod výsuvného profilu.",
        "Spojený systém je vhodný i pro velké plochy.",
        "Plynové písty ve vodicích lištách: dlouhá životnost, bezúdržbovost."
      ]
    }, {
      n: "PORTOFINO – MARKÝZA SE ZIP SYSTÉMEM",
      par: [
        ["Provedení", "jednodílné nebo dvoudílné spojené; montáž nad střechu, pod střechu nebo pergola se stojinami"],
        ["Šířka", "jednodílná max. 600 cm, dvoudílná spojená max. 1 200 cm"],
        ["Výsuv", "max. 500 cm, min. 150 cm"],
        ["Pergolová verze", "stahovací Vario-Volán nebo posuvné Vario-sloupky; výška sloupků standardně 250 cm, lze upravit"],
        ["Vedení látky", "uzavřené lišty (ZIP) s patentovaným pružinovým napínáním"],
        ["Pohon", "elektromotor Somfy iO; volitelně čidla větru, slunce a deště, integrace do chytré domácnosti"],
        ["Osvětlení", "volitelně integrované LED v kazetě"],
        ["Barvy rámu", "29 standardních bez příplatku, další RAL a efektové laky na přání"]
      ],
      vyhody: [
        "Zachycuje sluneční paprsky před dopadem na sklo a brání přehřívání.",
        "Tkanina je v každé poloze napnutá, bez světelných mezer po stranách.",
        "Odolá i silnému větru.",
        "Tichý motorický pohon a volitelná čidla."
      ]
    }]
  },

  "stineni/baldachyn": {
    uvod: "Baldachýn s markýzovou látkou zastíní pergolu nebo zimní zahradu zespodu a pohlcuje sluneční paprsky dříve, než prostor rozpálí. Ovládá se jednoduše šňůrou a kladkovým systémem. Moduly lze řadit za sebe bez omezení.",
    zdroj: ["BALDACHÝN"],
    systemy: [{
      n: "BALDACHÝN S MARKÝZOVOU LÁTKOU",
      par: [
        ["Maximální šířka modulu", "6 000 mm"],
        ["Maximální vyložení", "6 000 mm"],
        ["Rozměr profilu", "40 × 40 mm"],
        ["Rozteč vodicích kolejnic", "max. 4 000 mm"],
        ["Přesah profilu přes kolejnici", "max. 1 000 mm"],
        ["Výška nábalu vč. kolejnice", "40 cm"],
        ["Pohon", "mechanický: tažná šňůra a kladkový převod, integrovaná fixace v požadované poloze"],
        ["Látka", "akrylová markýzová tkanina s nano-fluorokarbonovou impregnací TEXgard Easy Clean"],
        ["Barva konstrukce", "RAL 9010 bílá, RAL 7016 antracit; jiný odstín RAL za příplatek"],
        ["Varianta", "s vyspádováním (ochrana před mírným letním deštěm)"]
      ],
      vyhody: [
        "Pohlcuje sluneční paprsky dříve, než rozpálí prostor pod střechou.",
        "S vyspádováním chrání i před mírným letním deštěm.",
        "Látka odpuzuje vodu a nečistoty a odolává plísním.",
        "Moduly lze řadit za sebe: malý altán i rozsáhlá terasa.",
        "Jednoduché ovládání šňůrou a kladkami."
      ]
    }]
  },

  "stineni/screen": {
    uvod: "Screen Zip je svislá kazetová markýza se ZIP systémem, který drží potah napnutý a zajistí ho proti vytržení i za silného větru. Bez mezer u kolejnice slouží spuštěná markýza zároveň jako ochrana proti hmyzu. Zvláštní provedení Screen Zip Lamelovka uzavírá bok bioklimatické pergoly.",
    zdroj: ["SCREEN ZIP", "SCREEN ZIP LAMELOVKA"],
    systemy: [{
      n: "SCREEN ZIP – svislá kazetová markýza",
      par: [
        ["Kazety", "95, 105 a 125 mm hranaté a zkosené s lištou (k dispozici i 120 mm); 150 mm hranatá s lištou"],
        ["Konstrukce", "celohliníková, dvoudílná kazeta chrání navíjecí válec"],
        ["Montáž", "čelně na fasádu, do ostění nebo na rám okna"],
        ["Potah", "technická tkanina (skleněná nebo polyesterová vlákna) s přivařeným zipem vedeným v hliníkové kolejnici"],
        ["Sestavení", "modulární (např. dvoumodul) pro větší plochy"],
        ["Motor", "Somfy iO, rádiový s dálkovým ovládáním; za příplatek automatika na počasí a aplikace Tahoma"]
      ],
      vyhody: [
        "Chrání před sluncem a UV zářením, brání přehřívání a snižuje náklady na klimatizaci.",
        "Potah je za všech okolností napnutý a zajištěný proti vytržení.",
        "Vysoká odolnost proti silnému větru.",
        "Bez mezer mezi látkou a kolejnicí, funguje i jako síť proti hmyzu."
      ]
    }, {
      n: "SCREEN ZIP LAMELOVKA – k bioklimatické pergole",
      par: [
        ["MODEL 105", "Ø hřídele 70 mm, max. plocha 10 m², šířka 800–4 500 mm, výška 500–3 000 mm"],
        ["MODEL 130", "Ø hřídele 78 mm, max. plocha 21 m², šířka 800–6 000 mm, výška 500–3 500 mm"],
        ["Tkaniny", "Sarga 5 % (525 g/m², tloušťka 0,74 mm) a Sarga 1 % (638 g/m², tloušťka 0,78 mm)"],
        ["Odolnost proti větru", "třída V6 dle ČSN EN 13561 (400 Pa / 600 Pa, až 112 km/h)"],
        ["Mechanická životnost", "10 000 cyklů (třída C3 dle UNE-EN 13561:2015)"],
        ["Reakce na oheň", "tkaniny s nehořlavou úpravou, třída C-s3, d0 dle UNE-EN 13501"],
        ["LED podsvícení", "lineární osvětlení ve spodní části kazety, 3000 K nebo 4000 K"],
        ["Povrch", "profily lakované v certifikaci Qualicoat a Qualanod, všechny odstíny RAL, matné i strukturované"],
        ["Pohon", "motor, lze integrovat do řízení pergoly nebo chytré domácnosti"]
      ],
      vyhody: [
        "Zastínění velkých modulů lamelových pergol, šířka pole až 6 m, výška až 3,5 m.",
        "Tkanina je vypnutá bez vlnění; prostor je chráněný před větrem, sluncem i hmyzem.",
        "Sarga 5 % dobře propouští pohled ven; Sarga 1 % dává maximální tepelnou ochranu a vyšší soukromí.",
        "Kazeta a lišty se lakují v barvě pergoly."
      ]
    }]
  }
};

/* Sezonní, nebo celoroční? (TOP-CR C3): tabulka na obou typech zimních zahrad. Jen údaje z katalogů
   „Sezónní zimní zahrada na míru“ (str. 1–2) a „Dřevěná celoroční zimní zahrada“ (str. 1), nic doplněného.
   Rozměrové limity celoroční zahrady katalog neuvádí (otázka O-ODP-3). */
window.KRkatalog2026["zahrada/sezonni"].srovnani = window.KRkatalog2026["zahrada/celorocni"].srovnani = {
  h: "Sezonní, nebo celoroční?",
  p: "Obě zimní zahrady stavíme na míru. Liší se tím, jak dlouho v roce v nich chcete pobývat, a podle toho konstrukcí, střechou i bočními stěnami.",
  sloupce: [["sezonni", "Sezonní zimní zahrada"], ["celorocni", "Celoroční zimní zahrada"]],
  radky: [
    ["Využití", "od časného jara do pozdního podzimu", "po celý rok, i v mrazivých měsících"],
    ["Konstrukce", "hliník, přední profil slouží jako nosník i žlab", "pohledové lepené dřevo BSH s CNC opracováním"],
    ["Střecha", "bezpečnostní sklo Connex 3.3.2, nebo polykarbonát Lexan 16 mm", "bezpečnostní izolační dvojsklo 44.2 / 16 / ESG 6 mm s argonem, U = 1,1"],
    ["Boční stěny", "rámové posuvné systémy (ekonomická varianta), nebo bezrámové (nejčistší výhled)", "posuvné Patio Living Therm s izolačním dvojsklem a přerušeným tepelným mostem, konstrukce se nerosí"],
    ["Rozměry", "šířka neomezená, vyložení až 550 cm", "návrh na míru podle zaměření"],
    ["Doplňky", "LED osvětlení, markýzy a rolety na střechu nebo stěny", "markýzy či rolety na střechu i boky, LED osvětlení, protisluneční sklo Stopsol"]
  ],
  zdroj: ["Sezónní zimní zahrada na míru", "Dřevěná celoroční zimní zahrada"]
};
