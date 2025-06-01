import React, { useRef, useEffect } from "react";
import Panel from "./Panel.jsx";
import ArtistCard from "./ArtistCard.jsx";
import FAQItem from "./FAQItem.jsx";
import ArrowNav from "./ArrowNav.jsx";
import "./../styles/HorizontalScroll.css";
import "./../styles/AftercarePanel.css";
import AboutSection from "./AboutSection.jsx";
import AftercarePanel from "./AftercarePanel.jsx";

export default function HorizontalScroll() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        let lastScrollLeft = 0;

        const handleSnapScrollReset = () => {
            const children = container.children;
            for (let panel of children) {
                if (
                    panel.offsetLeft === container.scrollLeft ||
                    Math.abs(panel.offsetLeft - container.scrollLeft) < 2
                ) {
                    panel.scrollTop = 0;
                }
            }
        };

        container.addEventListener("scroll", () => {
            const scrolled = container.scrollLeft;
            if (Math.abs(scrolled - lastScrollLeft) > 50) {
                // debounce with small delay
                setTimeout(handleSnapScrollReset, 100);
                lastScrollLeft = scrolled;
            }
        });
    }, []);


    return (
        <div className="scroll-container" ref={scrollRef}>
            <Panel bgColor="#0C0C0C" id="cover">
                <div className="logo-container">
                    <img src={`${import.meta.env.BASE_URL}images.png`} alt="Hurts So Good Logo" className="oval-logo" />
                </div>
                <h1 className="shop-name">Hurts So Good</h1>
                <p className="shop-address">123 Ink Street, Austin, TX 78701</p>
                <ArrowNav nextId="about" variant="white" />
            </Panel>

            <Panel id="about">
                <AboutSection />
                <ArrowNav prevId="cover" nextId="artists" />
            </Panel>

            <Panel id="artists">
                <h2>Our Artists</h2>
                <div className="artist-grid">
                    <ArtistCard
                        name="Raven Inkshade"
                        desc={`Blackwork, sacred geometry, and Norse symbolism. 12+ years of experience.
Trained in Nordic runic illustration and dotwork. Known for custom sleeves with spiritual themes. 
“Ink is my medium; symmetry is my religion.”`}
                        instagram="https://instagram.com/raven_inkshade"
                        avatar={`${import.meta.env.BASE_URL}artist_1.jpg`}
                    />
                    <ArtistCard
                        name="Lex Needlecraft"
                        desc={`Watercolor-style tattoos with florals and fauna. 8 years of experience.
Fine arts grad blending emotion and color into vivid, translucent designs. 
“Tattooing is painting that lasts forever.”`}
                        instagram="https://instagram.com/raven_inkshade"
                        avatar={`${import.meta.env.BASE_URL}artist_2.jpg`}

                    />
                    <ArtistCard
                        name="Milo Thorn"
                        desc={`American traditional & flash revival. 15 years of experience.
Old-school apprentice turned legend, known for bold eagles, daggers, and pin-up sets.
“Bold lines. Bright color. No apologies.”`}
                        instagram="https://instagram.com/raven_inkshade"
                        avatar={`${import.meta.env.BASE_URL}artist_3.jpg`}

                    />
                </div>
                <ArrowNav prevId="about" nextId="faq" />
            </Panel>


            <Panel id="faq">
                <h2>FAQs</h2>
                <div className="faq-grid">
                    <FAQItem
                        question="Does it hurt?"
                        answer="Yes, but it's manageable—like a scratch or burn depending on placement."
                    />
                    <FAQItem
                        question="Can I bring my own design?"
                        answer="Absolutely. Bring references or sketches and we’ll refine it with you."
                    />
                    <FAQItem
                        question="How much will it cost?"
                        answer="Pricing depends on size, detail, and time. Most tattoos start at $100."
                    />
                    <FAQItem
                        question="Do you accept walk-ins?"
                        answer="Yes, when available. We recommend calling ahead or checking our Instagram."
                    />
                    <FAQItem
                        question="Can I get tattooed while pregnant?"
                        answer="We do not tattoo pregnant or nursing clients for safety reasons."
                    />
                </div>
                <ArrowNav prevId="cover" nextId="aftercare" />
            </Panel>
            <Panel id="aftercare" bgColor="#0C0C0C">
                <AftercarePanel />
            </Panel >

        </div >
    );
}
