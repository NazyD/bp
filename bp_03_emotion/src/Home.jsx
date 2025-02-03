import React from "react";
import {HomeContainer, HomeTitle, HomeDescription, HomeSection, HomeInfo} from "./HomeStyle.jsx";

const Home = () => {

    return (
        <HomeContainer>
            <HomeSection>
                <HomeTitle>Vítejte</HomeTitle>
                <HomeDescription>Stránka obsahuje články o novinkách z filmového a seriálového světa.</HomeDescription>
            </HomeSection>

            <HomeInfo>
                ||| VĚTŠÍ ODSAZENÍ OD KRAJŮ DÍK A NA STRÁNCE ČLÁNKU TAKY||| NE TOPIC ALE KATEGORIE PŘEJMENOVAT |||
                NEFUNFUJE TOPIC UPRAVA PRI UPRAVE CLANKU |||
            </HomeInfo>
        </HomeContainer>
    );

};

export default Home;