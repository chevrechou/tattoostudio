import React from "react";
import "./../styles/CTAPanel.css";

export default function CTAPanel() {
    return (
        <div className="cta-container">
            <h2 className="cta-title">READY TO BOOK YOUR NEXT TATTOO?</h2>
            <p className="cta-subtext">
                CHOOSE HOW TO CONNECT:
            </p>
            <div className="cta-options">
                <a
                    href="https://instagram.com/hurtssogoodtattoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                >
                    BOOK VIA INSTAGRAM
                </a>
                <a href="tel:5125550199" className="cta-button">
                    CALL US: (512) 555-0199
                </a>
                <a
                    href="https://maps.google.com/?q=123 Ink Street, Austin, TX 78701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                >
                    VISIT FOR CONSULTATION
                </a>
            </div>
        </div>
    );
}
