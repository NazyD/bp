import {Link} from "react-router-dom";
import React from "react";

const Rank = () => {

    return (
        <div className="rank">
            <h3>Vyberte si žebříček: </h3>
            <div>
                <Link to="/ranking/movies" className="title">
                    žebříček filmů
                </Link>
            </div>
            <div>
                <Link to="/ranking/shows" className="title">
                    žebříček seriálů
                </Link>
            </div>
        </div>
    );

};

export default Rank;