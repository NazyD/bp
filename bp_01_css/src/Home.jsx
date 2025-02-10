import React from "react";
import "./home.css"
import MoveUpButton from "./components/MoveUpButton.jsx";

const Home = () => {

    return (
        <div className="home-container">
            <MoveUpButton/>
            <div className="home">
                <h1 className="home-title">Vítejte</h1>
                <p className="home-description">Tato webová aplikace je vytvořena k bakalářské práci, která popisuje
                    a porovnává vybrané metodiky stylování webové aplikace. Web je vytvořen na motivy blogu, který má
                    za téma filmový a seriálový svět. Stránka obsahuje články o novinkách z filmového a seriálového světa.
                </p>
            </div>

            <div className="home-information">
                <p>||| VĚTŠÍ ODSAZENÍ OD KRAJŮ DÍK A NA STRÁNCE ČLÁNKU TAKY||| NE TOPIC ALE KATEGORIE PŘEJMENOVAT |||
                    NEFUNFUJE TOPIC UPRAVA PRI UPRAVE CLANKU |||</p>
                <h2>Účel aplikace</h2>
                <p>Aplikace slouží jako podklad pro bakalářskou práci. Tato aplikace byla vytvořena jako blog, aby
                    obsahovala
                    nejzákladnější a nejpoužívanější vizuální komponenty, se kterými se může vývojář setkat (formuláře,
                    tabulky, text,
                    obrázky, responzivita, motivy, animace atd). Vytvořila se v prvním kroku pouze základní kostra
                    aplikace, bez
                    jakéhokoliv stylování s pouze výchozím nastavením. Tato základní aplikace se dále nakopírovala pro
                    jednotlivou metodiku zvlášť a v techto jednotlivých projektech se tato základní aplikace stylovala
                    pouze danou metodikou. Hlavním cílem bylo dosáhnout jednoho uceleného vzhledu aplikace, kterého
                    se má dosáhnout za pomocí každé metodiky, tím se zjistí jak je která metodika užitečná pro dané
                    potřeby.</p>
                <h2>Obsah aplikace</h2>
                <p>Aplikace se skládá z několika stránek. Hlavní úvodní stránka je tato, která obsahuje inofrmace o
                    aplikaci.
                    Další stránkou je Seznam článků, na této stránce jsou všechny články které tady jsou. Seznam článků
                    se dále dělí na další dvě stránky, seznam článků filmů a seznam článků seriálů.
                    Na těchto dvou stránkách jsou pouze články se specifikovanou kategorií filmu nebo seriálu.
                    Po rozkliknutí článku se odkáže na stránku přímo jednoho článku.
                    Další stránkou jsou žebříčky, toto je pouze stránka sloužící jako rozcestník, kde lze přejít
                    na žebříček filmů nebo seriálů. Poslední stránka je stránka kontaků. Následuje podrobnější popis
                    stránek
                    z čeho se skládají a jaké obsahují funkčnosti.
                </p>
                <h3>1.Domovská stránka</h3>
                <p>Zde na domovské stránce je pouze popis aplikace, slouží jako úvodní stránka. Na tuto stránku
                    se dá dostat kliknutím na title v navigačním panelu. Tato stránka kromě stylizace textu obsahuje
                    také
                    animace. Animace je nastavena na hlavní nadpis, text hlavního panelu a poté na samotný sekundární
                    panel.</p>
                <h3>2.Seznam článků</h3>
                <p>Seznam článků je nejrozsáhlejší stránka v aplikaci. Tato stránka je rozdělena na dvě části.
                    První horní část slouží jako panel nastavení seznamu a druhá větší část slouží jako samostatný
                    seznam. Panel nastavení obsahuje pole pro vyhledávání, kde při vložení textu dynamicky vyhledává
                    název článku. Vedle pole vyhledávání se nachází dvě tlačítka nastavující typ panelu článku, kde
                    je možnost malého článku nebo velkého na celou šířku. Za těmito tlačítky jsou tlačítka pro vytvoření
                    článku a úpravu kategorií. Tyto dvě tlačítka otevřou popup ve kterým se nachází formulář. Formulář
                    pro
                    vytvoření článku má pole pro název, pro samotný text a autora, dále lze vybrat kategorie které bude
                    článek mít ze seznamu existujících kategorií. Formulář pro úpravu kategorií má textové pole pro
                    zadání
                    nové kategorie a nebo odstranění stávající kategorie ze seznamu kategorií. Tyto dvě tlačítka pro
                    formuláře
                    nejsou viditelné pro seznam článků specifických pro kategorii filmů nebo seriálů, jsou aktivní pouze
                    na
                    hlavním seznamu článků. Samostatný seznam se skládá z karet článků, jejichž velikost se mění dle
                    vybrané
                    možnosti. Karta má název, část textu a dodatečné inforamce. Kliknutím na název článku se odkáže na
                    stránku článku.</p>
                <h3>3.Článek</h3>
                <p>Stránka článku obsahuje plný text článku. Název text, informace. Jsou zde i tlačítka pro možnost
                    úpravy
                    článku a odstranění článku. Úprava článku je jako formulář pro vytvoření jen s vyplněnými daty
                    daného
                    článku.</p>
                <h3>4.Žebříček</h3>
                <p>Žebříček je ve formě tabulky, zde je 10 děl z kategorie filmů a seriálů. V tabulce jsou sežazeny dle
                daného hodnocení. Každý řádek díla má na konci možnost hodnocení kde uživatel může vybrat hodnocení pro daný
                dílo a aplikace vypočítá nové hodnocení a seřadí dle nového hodnocení.
                </p>

            </div>
        </div>

    );

};

export default Home;