/* Obsah služeb pro směr A: vlastní FAQ a srovnání systémů ke každé službě.
   Zdroj: veřejný web karasek.cz, staženo 20. 11. 2026 (stránky produktů, jejich podstránky a články blogu).
   Odpovědi jsou zkrácené parafráze toho, co na webu stojí; nic doplněného. Ceny z článků sem záměrně
   nepřebíráme (jen odkaz na článek), protože jsou orientační a mění se.
   zdroj = URL nebo pole URL. Prázdná buňka tabulky ("") = web parametr neuvádí. */
window.KRobsah = (() => {
  const W = "https://karasek.cz";
  const u = s => `${W}/${s}/`;
  const ZZ = u("produkty/zimni-zahrady"), CZZ = u("produkty/celorocni-zimni-zahrady"),
    ZAS = u("produkty/zaskleni-pergol-a-teras"), PER = u("produkty/pergoly"), STI = u("produkty/stinici-technika");
  const B = {
    cenaZZ: u("zimni-zahrady-cena-za-m2"), cenaZas: u("zaskleni-pergoly-cena"), cenaPer: u("cena-hlinikove-pergoly-2025"),
    povoleni: u("stavebni-povoleni-pergola-zimni-zahrada"), udrzba: u("zaskleni-terasy-pergoly-faq-udrzba-montaz"),
    sezonni: u("co-ocekavat-od-sezonni-zimni-zahrady-realisticke-moznosti-vyuziti-behem-roku"),
    skloPc: u("sezonni-zimni-zahrada-sklo-nebo-polykarbonat-ramove-nebo-bezramove-reseni"),
    stineni: u("markyzy-rolety-nebo-screeny-jak-efektivne-chranit-terasu-ci-pergolu-pred-sluncem"),
    markyzaPece: u("jak-pecovat-o-markyzy")
  };
  const S = {
    ramove: u("produkty/zaskleni-pergol-a-teras/ramove-zaskleni-pergol-a-teras"),
    bezramove: u("produkty/zaskleni-pergol-a-teras/bezramove-zaskleni-pergol-a-teras"),
    therm: u("produkty/zaskleni-pergol-a-teras/izolacni-zaskleni-pergol-a-teras"),
    sklo: u("produkty/pergoly/pergoly-se-sklenenou-strechou"), pc: u("produkty/pergoly/pergoly-s-polykarbonatem"),
    bio: u("produkty/pergoly/lamelove-bioklimaticke-pergoly"), latka: u("produkty/pergoly/pergoly-s-latkovou-strechou"),
    markyzy: u("produkty/stinici-technika/markyzy"), markyzyZZ: u("produkty/stinici-technika/markyzy-pro-zimni-zahrady-a-pergoly"),
    zaluzie: u("produkty/stinici-technika/venkovni-zaluzie-a-rolety"), baldachyn: u("produkty/stinici-technika/baldachynove-zastineni")
  };

  return {
    zahrada: {
      faq: [
        { q: "Kolik stojí zimní zahrada a na čem cena závisí?",
          a: "Pevný ceník za metr čtvereční nemáme: každý dům má jinou dispozici, sněhovou oblast a požadavky na kotvení. Cenu nejvíc ovlivňuje statika konstrukce (krokve 105, 130 nebo 150 mm podle zatížení), střecha (bezpečnostní sklo Connex 3.3.2, nebo úspornější dutinkový polykarbonát 16 mm) a boční zasklení (rámové Plus a Combi, nebo bezrámové Patio Living Move). Cenu spočítáme po zaměření zdarma.",
          zdroj: B.cenaZZ },
        { q: "Potřebuji na zimní zahradu stavební povolení?",
          a: "U rodinného domu bývá zimní zahrada součástí změny stavby. Hlídá se plocha do 40 m², výška do 5 m, odstup alespoň 2 m od hranice pozemku a to, aby na pozemku zůstala alespoň polovina vsakovací plochy. Řešit je potřeba i napojení na dům, požární pásy a odvodnění. Když nám pošlete popis, rozměry a 2–3 fotky, posoudíme, jestli záměr spadá do režimu bez povolení.",
          zdroj: B.povoleni },
        { q: "Jaký je rozdíl mezi sezonní a celoroční zimní zahradou?",
          a: "Sezonní zimní zahrada slouží hlavně na jaře, v létě a na podzim. Obvykle není zateplená ani vytápěná; od dubna do října je pohodlně obyvatelná, v zimě ji bez přitápění dlouhodobě používat nelze. Celoroční zimní zahradu stavíme z lepeného dřeva BSH se systémem Patio Living Therm a izolačním dvojsklem s argonem (U 1,1), takže slouží jako plnohodnotná místnost.",
          zdroj: [B.sezonni, CZZ] },
        { q: "Vydrží zimní zahrada sníh?",
          a: "Pro každou konstrukci počítáme nosnost tak, aby ve vaší sněhové oblasti unesla tíhu sněhu. Podle zatížení volíme krokve 105, 130 nebo 150 mm, případně s výztuhou. Plný polykarbonát (plexisklo) na střechu nedáváme: snadno se poškrábe a vyšší sněhová pokrývka by ho mohla poškodit.",
          zdroj: ZZ },
        { q: "Sklo, nebo polykarbonát na střechu?",
          a: "Bezpečnostní sklo Connex nabízí ostrý výhled na oblohu a je odolné proti poškrábání, ale je těžší a dražší. Komůrkový polykarbonát 16 mm je lehčí, levnější a lépe izoluje; světlo rozptyluje, takže výhled vzhůru je rozostřený.",
          zdroj: B.skloPc },
        { q: "Jak celá zakázka probíhá?",
          a: "Pošlete nezávaznou poptávku s orientačním rozměrem a fotkou a nabídku dostanete zdarma e-mailem. Pak případná schůzka ve showroomu (když jste z dálky, vzorky přivezeme na zaměření), zaměření u vás, finální projekt, výroba a montáž.",
          zdroj: ZZ }
      ],
      srovnani: {
        nadpis: "Jakou zimní zahradu vybrat",
        sloupce: ["Varianta", "Konstrukce", "Střecha a prosklení", "Výhled vzhůru", "Boční stěny", "Kdy ji využijete"],
        radky: [
          ["Sezonní, střecha z polykarbonátu", "Hliník se skrytým žlabem, krokve 105–150 mm", "Dutinkový polykarbonát 16 mm", "Rozostřený, světlo se rozptyluje", "Rámové Plus a Combi nebo bezrámové Patio Living Move", "Od jara do podzimu, bez vytápění"],
          ["Sezonní, střecha ze skla", "Hliník se skrytým žlabem, krokve 105–150 mm", "Bezpečnostní lepené sklo Connex 3.3.2", "Čistý a ostrý", "Rámové Plus a Combi nebo bezrámové Patio Living Move", "Od jara do podzimu, bez vytápění"],
          ["Celoroční z dřeva BSH", "Lepené dřevo BSH, nátěr Remmers", "Izolační dvojsklo 44.2 / 16 / ESG 6 mm s argonem, U 1,1", "", "Patio Living Therm s izolačním dvojsklem", "Celý rok jako plnohodnotná místnost"]
        ],
        zdroj: [ZZ, CZZ, B.skloPc, B.sezonni]
      }
    },

    zaskleni: {
      faq: [
        { q: "Kolik stojí zasklení pergoly nebo terasy?",
          a: "Jednou částkou to říct nejde. Cenu tvoří typ systému (rámový, nebo bezrámový), typ bezpečnostního skla, rozměry, sklon střechy a atypické tvary, případné pomocné profily a náročnost montáže. Rámový systém je ekonomicky výhodnější, bezrámový má vyšší pořizovací náklady. Cenu spočítáme po zaměření zdarma.",
          zdroj: B.cenaZas },
        { q: "Rámové, nebo bezrámové zasklení?",
          a: "Obecně nelze říct, který je lepší. Rámový systém je těsnější pro zimní období a levnější, bezrámový je tu pro nerušený výhled. Všechny naše systémy jsou atestované a velmi odolné větru. Konkrétní typ doporučíme podle vaší poptávky.",
          zdroj: ZAS },
        { q: "Co vydrží bezpečnostní sklo?",
          a: "Bezrámové zasklení Patio Living Move nese kalené bezpečnostní sklo ESG o tloušťce 8–12 mm. Jak sklo ESG obstojí v zátěžové zkoušce, ukazuje náš test ve videu.",
          zdroj: [ZAS, S.bezramove],
          /* starý web, FAQ „Co vydrží bezpečnostní sklo?“ → youtu.be/gwNmQ11dTjM; název z YouTube (kanál Karásek s.r.o.), 28. 11. 2026 */
          video: { yt: "gwNmQ11dTjM", nazev: "Test skla ESG: vydrží sklo přejetí autem?" } },
        { q: "Potřebuji na zasklení pergoly stavební povolení?",
          a: "Ve většině případů není pro zasklení stávající pergoly stavební povolení potřeba. Doporučujeme ale individuální konzultaci.",
          zdroj: B.cenaZas },
        { q: "Je údržba náročná?",
          a: "Ne. Skla umyjete běžným prostředkem na okna. O plynulý chod se postará, když občas vysajete nebo vyfoukáte nečistoty z vodicích kolejnic. Náhradní díly držíme skladem, takže drobná oprava neznamená výměnu celého systému.",
          zdroj: B.udrzba },
        { q: "Dá se zasklená terasa používat i v zimě?",
          a: "Zasklená pergola funguje jako studená zimní zahrada a dá se příležitostně vytápět, například infrazářičem. Pro temperované prostory je izolační systém Patio Living Therm s dvojsklem a přerušeným tepelným mostem.",
          zdroj: [B.cenaZas, S.therm] }
      ],
      srovnani: {
        nadpis: "Rámové, bezrámové, nebo izolační zasklení",
        sloupce: ["Systém", "Konstrukce", "Výplň", "Těsnost a izolace", "Výhled", "V zimě"],
        radky: [
          ["Rámové Combi a Plus", "Hliníkový rám kolem každého panelu", "Sklo 4–6 mm, tvrzené 4–8 mm, lepené do 9 mm, polykarbonát a další", "Vysoká těsnost, velmi vysoká odolnost proti větru", "Rám po obvodu každého panelu", "Sezonně; Combi IZO s dvojsklem 16 mm pro temperování"],
          ["Bezrámové Patio Living Move", "Bez svislých profilů, nosným prvkem je kalené sklo", "Kalené sklo ESG 8–12 mm, čiré nebo matované", "Střední těsnost, nižší tepelná a zvuková izolace", "Nerušený", "Sezonně"],
          ["Izolační Patio Living Therm", "Hliníkový rám s přerušeným tepelným mostem", "Izolační dvojsklo 24 mm (4/16/4) s argonem", "Ug 1,1 W/m²K, celý systém Uw 1,5 W/m²K", "Rám po obvodu panelu; trojdílný otevře až 2/3 plochy", "Pro temperované prostory po celý rok"]
        ],
        zdroj: [B.cenaZas, B.skloPc, S.ramove, S.bezramove, S.therm]
      }
    },

    pergola: {
      faq: [
        { q: "Kolik stojí hliníková pergola?",
          a: "Ceník ke stažení neposíláme, protože každá pergola je jiná. Cenou nejvíc hýbe rozměr a statika, typ střechy (textilie, sklo, polykarbonát, lamely), barva, příprava podloží a montáž, elektro a řízení (Somfy, LED, senzory) a boční prvky jako screeny nebo posuvné zasklení. Pošlete rozměry a fotky místa a připravíme kalkulaci na míru. Cenu spočítáme po zaměření zdarma.",
          zdroj: B.cenaPer },
        { q: "Potřebuji na pergolu stavební povolení?",
          a: "Ve většině případů ne, pokud dodržíte plochu do 40 m², výšku do 5 m, odstup alespoň 2 m od hranice a alespoň polovinu pozemku necháte vsakovat. Pozor na rozdíl: pergola je lehké zastínění, přístřešek je stavba, a stejná konstrukce může spadat do obou kategorií podle záměru a provedení.",
          zdroj: B.povoleni },
        { q: "Jakou střechu zvolit?",
          a: "Textilní střecha je nejrychlejší zakrytí s výborným stíněním. Skleněná dává čistý vzhled, ale je těžší, takže je potřeba připravit statiku; na střechu dáváme lepené sklo Connex 3.3.2, kalené sklo na střechu nepatří. Polykarbonát je lehký a při dešti akusticky příjemný. Bioklimatická lamelová střecha reguluje světlo i odvod vody.",
          zdroj: [B.cenaPer, S.sklo] },
        { q: "Vydrží pergola sníh?",
          a: "Různé výrobky mají různou nosnost a některé nejsou pro zimní provoz vhodné. Pergoly navrhujeme vždy podle sněhové oblasti v místě instalace a nosnost počítáme pro každou konstrukci. Polykarbonát LEXAN používáme jen v síle 16 mm, aby byl dost tuhý pro sněhovou pokrývku.",
          zdroj: [PER, S.sklo, S.pc] },
        { q: "Můžu postavit pergolu teď a zasklení doplnit později?",
          a: "Ano. Pergolu lze postavit hned a boční prvky, tedy screeny nebo zasklení, doplnit později. Při návrhu na to myslíme od začátku.",
          zdroj: B.cenaPer },
        { q: "Co umí bioklimatická pergola?",
          a: "Místo pevné střechy má elektricky naklápěcí lamely. V horku je otevřete a teplo odejde stropem, částečným naklopením regulujete stín, zavřené lamely chrání nábytek před deštěm i sněhem. Doplnit jde rámové či bezrámové zasklení nebo svislé motorické rolety ZIP.",
          zdroj: S.bio }
      ],
      srovnani: {
        nadpis: "Jakou střechu pro pergolu",
        sloupce: ["Typ pergoly", "Střecha", "Konstrukce a rozměry", "Co nabízí"],
        radky: [
          ["Se skleněnou střechou", "Lepené bezpečnostní sklo Connex 3.3.2 (6,8 mm)", "Skrytý žlab, stojiny 110 × 110 mm, hloubka max. 600 cm, sklon 4–12°", "Čistý vzhled a výhled; vyšší hmotnost, statiku je potřeba připravit"],
          ["S polykarbonátem", "Polykarbonát LEXAN 16 mm, čirý, mléčný nebo bronzový", "I s přesahem střechy 5–80 cm, hloubka max. 600 cm, sklon 5–35°", "Nízká hmotnost, příjemná akustika při dešti"],
          ["Lamelová bioklimatická", "Elektricky naklápěcí lamely, u některých modelů odsunutelné ke straně", "Mezi zdi, samostatně stojící, na stěnu nebo dvojmodul; lamely XL až 645 × 470 cm v jednom modulu", "Regulace světla i odvodu vody, zavřená chrání před deštěm i sněhem"],
          ["S látkovou střechou", "Markýzová látka (pergola ZEN, Veranda Box)", "ZEN max. 500 × 500 cm, i s motorem", "Stínění tam, kde nejde o celoroční použití; látku lze úplně odsunout"]
        ],
        zdroj: [S.sklo, S.pc, S.bio, S.latka, B.cenaPer]
      }
    },

    stineni: {
      faq: [
        { q: "Markýza, screen, roleta, nebo žaluzie?",
          a: "Markýza zastíní velkou plochu terasy, ale hůř snáší vítr a boční slunce. Screenová roleta brání přehřívání a nechává výhled ven, snese vítr i déšť a v jednom kuse měří až 600 cm. Venkovní žaluzie plynule regulují světlo. Venkovní rolety stíní a zabezpečí okna, do pergol se ale nehodí.",
          zdroj: B.stineni },
        { q: "Jak zastínit zimní zahradu, aby se nepřehřívala?",
          a: "Nejúčinnější je markýza nad střešní krytinou: sluneční energii zachytí látka a mezerou mezi ní a sklem proudí vzduch. Je finančně náročnější, dodává se vždy s motorem a odolností proti větru. Pod střechou pomůže baldachýn, nebo plissé mezi jednotlivými poli; plissé se ale nehodí do otevřených pergol kvůli vlhkosti.",
          zdroj: S.markyzyZZ },
        { q: "Klasická, nebo kazetová markýza?",
          a: "Klasická markýza nemá látku chráněnou boxem, proto se montuje pod přesah střechy nebo atiku a patří k levnějším typům. Kazetová má hliníkový box, který látku chrání a prodlužuje její životnost; je obecně dražší. Výklopné markýzy se hodí na skleněné fasády.",
          zdroj: S.markyzy },
        { q: "Dá se stínění ovládat motorem?",
          a: "Ano. Žaluzie a rolety dodáváme na kliku či provázek i s motorem a umíme doplnit automatické řízení podle větru. Markýzy jsou na kliku i s motorem, nadstřešní markýzy vždy s motorem.",
          zdroj: [S.zaluzie, S.markyzy, S.markyzyZZ] },
        { q: "Jak se starat o markýzu?",
          a: "Při silném větru markýzu stáhněte. Když ji stáhnete mokrou, co nejdřív ji znovu rozevřete a nechte vyschnout. Běžný prach ze suché látky setřepte nebo vykartáčujte a látku omyjte vlažnou vodou se slabým roztokem přírodního mýdla.",
          zdroj: B.markyzaPece },
        { q: "Zvládnu montáž sám?",
          a: "U některých výrobků ano. Podvěsný baldachýn je vhodný pro instalaci svépomocí a kazetovou roletku City Screen prodáváme i pro vlastní montáž. Screenové rolety naopak potřebují přesné zaměření a odbornou instalaci.",
          zdroj: [S.baldachyn, S.zaluzie, B.stineni] }
      ],
      srovnani: {
        nadpis: "Čím stínit terasu a pergolu",
        sloupce: ["Stínění", "Silné stránky", "Slabší stránky", "Ovládání"],
        radky: [
          ["Horizontální markýza", "Široká plocha stínění, mnoho barev a vzorů, snadná instalace", "Omezená odolnost proti větru a silnému dešti, méně chrání před bočním sluncem", "Ručně nebo motorem s dálkovým ovládáním"],
          ["Screenová roleta", "Brání přehřívání a nechává výhled, odolná vůči větru a dešti, až 600 cm v jednom kuse", "Vyšší cena, potřeba přesného zaměření a odborné montáže", "Automatizace a propojení s chytrou domácností"],
          ["Venkovní hliníkové žaluzie", "Plynulá regulace světla, odolnost proti počasí, dlouhá životnost", "Vyšší pořizovací náklady, údržba lamel, při větru klepou", "Klikou, provázkem nebo motorem"],
          ["Venkovní roleta", "Ochrana před sluncem i hlukem, zabezpečení, úplné zatemnění", "Vyšší náklady, stavební úpravy, brání výhledu, nehodí se do pergol", "Klikou, provázkem nebo motorem"]
        ],
        zdroj: [B.stineni, S.zaluzie]
      }
    }
  };
})();
