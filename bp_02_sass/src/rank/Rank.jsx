import {Link} from "react-router-dom";
import React from "react";
import '../styles/styles.scss';

const Rank = () => {

    return (
        <div className="rank">
            <h3>Vyberte si žebříček: </h3>
            <div>
                <Link to="/ranking/movies" className="title">
                    Žebříček filmů
                </Link>
            </div>
            <div>
                <Link to="/ranking/shows" className="title">
                    Žebříček seriálů
                </Link>
            </div>
        </div>
    );

};

export default Rank;