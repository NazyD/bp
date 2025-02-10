import React, { useState, useEffect } from "react";

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
            <button
                onClick={handleClick}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "80px",
                    background: "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px 15px",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                    zIndex: 1000,
                }}
            >
                ↑ Nahoru
            </button>
        )
    );
};

export default MoveUpButton;
