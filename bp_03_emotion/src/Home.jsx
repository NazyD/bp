import React from "react";
import {HomeContainer, HomeTitle, HomeDescription} from "./HomeStyle.jsx";

const Home = () => {

    return (
        <HomeContainer>
            <HomeTitle>Vítejte</HomeTitle>
            <HomeDescription>Stránka obsahuje články o novinkách z filmového a seriálového světa.</HomeDescription>
        </HomeContainer>
    );

};

export default Home;