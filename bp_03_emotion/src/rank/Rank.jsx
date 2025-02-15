import {Link} from "react-router-dom";
import React from "react";

import styled from "@emotion/styled";

const RankContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    text-align: center;
    h3 {
        font-size: 24px;
        color: ${({ theme }) => theme.textColor};
        margin-bottom: 20px;
    }
`;

const LinkCon = styled.div`
    margin: 15px 0;
    .title {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 10px 20px;
        color: ${({ theme }) => theme.textColor};
        text-decoration: none;
        background-color: ${({ theme }) => theme.componentBackground};
        border-radius: 10px;
        transition: background-color 0.3s ease, transform 0.2s ease;
        &:hover {
            background-color: ${({ theme }) => theme.componentBackgroundHover};
            transform: scale(1.3);
        }
    }
`;

const Rank = () => {

    return (
        <RankContainer>
            <h3>Vyberte si žebříček: </h3>
            <LinkCon>
                <Link to="/ranking/movies" className="title">
                    Žebříček filmů
                </Link>
            </LinkCon>
            <LinkCon>
                <Link to="/ranking/shows" className="title">
                    Žebříček seriálů
                </Link>
            </LinkCon>
        </RankContainer>
    );

};

export default Rank;