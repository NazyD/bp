import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const MoveButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 80px;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    z-index: 1000;
`;

const MoveUpButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        showButton && (
            <MoveButton onClick={handleClick}>
                ↑ Nahoru
            </MoveButton>
        )
    );
};

export default MoveUpButton;
