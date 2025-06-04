import React, { useEffect, useRef, useState } from "react";
import "./../styles/CTAPanel.css";

export default function CTAPanel() {
    const panelRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target); // Only trigger once
                }
            },
            { threshold: 0.3 }
        );

        if (panelRef.current) {
            observer.observe(panelRef.current);
        }

        return () => {
            if (panelRef.current) {
                observer.unobserve(panelRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={panelRef}
            id="cta-panel"
            className={`cta-container ${visible ? "fade-in" : ""}`}
        >
            <h2 className="cta-title">READY TO BOOK YOUR NEXT TATTOO?</h2>
            <p className="cta-subtext">CHOOSE HOW TO CONNECT:</p>
            <div className="cta-options">
                <a
                    href="https://instagram.com/hurtssogoodtattoostudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                >
                    BOOK VIA INSTAGRAM
                </a>
                <a href="tel:9402437336" className="cta-button">
                    CALL US: (940) 243-7336
                </a>
                <a
                    href="https://maps.google.com/?q=135 E Hickory St, Denton, TX"
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
