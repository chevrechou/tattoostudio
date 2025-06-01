import React from "react";
import ArrowNav from "./ArrowNav.jsx";
import "./../styles/AftercarePanel.css";
import html2pdf from "html2pdf.js";

export default function AftercarePanel() {
    function handlePrint() {
        const element = document.getElementById("aftercare-print");

        const opt = {
            margin: [0.5, 0.5, 0.5, 0.5], // top, left, bottom, right in inches
            filename: 'HurtsSoGood_Aftercare_Guide.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,        // Higher for better quality
                useCORS: true,
                scrollX: 0,
                scrollY: 0,
                windowWidth: 800 // matches CSS max-width
            },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };


        html2pdf().set(opt).from(element).save();
    }

    return (
        <section className="aftercare-panel" id="aftercare">
            <div id="aftercare-print">
                <div className="aftercare-container">
                    <h2 className="aftercare-title">Tattoo Aftercare</h2>

                    <div className="aftercare-split">
                        <div className="aftercare-do">
                            <h2>✅ To Do</h2>
                            <ul>
                                <li>Wash 1–2x daily with fragrance-free soap</li>
                                <li>Use ointment: Aquaphor, A+D, Magic Balm</li>
                                <li>Switch to lotion after first week</li>
                                <li>Keep it moisturized — especially during peeling</li>
                                <li>Wear loose clothes & protect from sun</li>
                                <li>Stay hydrated for skin health</li>
                            </ul>
                        </div>

                        <div className="aftercare-dont">
                            <h3>🚫 NOT to Do</h3>
                            <ul>
                                <li>No scratching, peeling, or picking scabs</li>
                                <li>Avoid 100% petroleum products (like Vaseline)</li>
                                <li>Don’t submerge in water (baths, pools)</li>
                                <li>No direct sun exposure while healing</li>
                                <li>Avoid tight or abrasive clothing on fresh tattoos</li>
                                <li>Don’t skip aftercare — infection risks are real</li>
                            </ul>
                        </div>
                    </div>

                    <div className="healing-timeline">
                        <h2>🕒 Healing Timeline</h2>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="day-label">Day 1</div>
                                <p>Dressing stays on. Skin may ooze fluid/ ink. Wash gently with fragrance-free soap.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="day-label">Days 2–3</div>
                                <p>Scabbing may begin. Keep clean, lightly moisturized. Ink may shed.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="day-label">Days 4–6</div>
                                <p>Remove second skin if used. Light scabs form. Redness fades.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="day-label">Days 6–14</div>
                                <p>Scabs flake off. Intense itching starts. Keep moisturizing.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="day-label">Days 15–30</div>
                                <p>Outer layer healed. Skin may still appear dry or dull. Continue hydration.</p>
                            </div>
                        </div>
                    </div>
                    <p className="aftercare-note">
                        <h2> Questions? </h2>
                        📩 Have questions or concerns? Feel free to reach out to your artist or contact the shop directly—we’re here to help you heal right.
                    </p>
                    <button className="download-btn" onClick={handlePrint}>
                        🖨️ Print as PDF
                    </button>

                    <ArrowNav prevId="faq" />
                </div>
            </div>
        </section>
    );
}
