"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HorizontalScroll;
var react_1 = require("react");
var Panel_1 = require("./Panel");
var ArtistCard_1 = require("./ArtistCard");
var FAQItem_1 = require("./FAQItem");
var ArrowNav_1 = require("./ArrowNav");
var MouseScrollHint_1 = require("./MouseScrollHint");
require("./../styles/HorizontalScroll.css");
require("./../styles/AftercarePanel.css");
var AboutSection_1 = require("./AboutSection");
var AftercarePanel_1 = require("./AftercarePanel");
function HorizontalScroll() {
    var scrollRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var container = scrollRef.current;
        var lastScrollLeft = 0;
        var handleSnapScrollReset = function () {
            var children = container.children;
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var panel = children_1[_i];
                if (panel.offsetLeft === container.scrollLeft ||
                    Math.abs(panel.offsetLeft - container.scrollLeft) < 2) {
                    panel.scrollTop = 0;
                }
            }
        };
        container.addEventListener("scroll", function () {
            var scrolled = container.scrollLeft;
            if (Math.abs(scrolled - lastScrollLeft) > 50) {
                // debounce with small delay
                setTimeout(handleSnapScrollReset, 100);
                lastScrollLeft = scrolled;
            }
        });
    }, []);
    return (<div className="scroll-container" ref={scrollRef}>
            <Panel_1.default bgColor="#0C0C0C" id="cover">
                <div className="logo-container">
                    <img src="public/images.png" alt="Hurts So Good Logo" className="oval-logo"/>
                </div>
                <h1 className="shop-name">Hurts So Good</h1>
                <p className="shop-address">123 Ink Street, Austin, TX 78701</p>
                <ArrowNav_1.default nextId="about" variant="white"/>
            </Panel_1.default>

            <Panel_1.default id="about">
                <AboutSection_1.default />
                <ArrowNav_1.default prevId="cover" nextId="artists"/>
            </Panel_1.default>

            <Panel_1.default id="artists">
                <h2>Our Artists</h2>
                <div className="artist-grid">
                    <ArtistCard_1.default name="Raven Inkshade" desc={"Blackwork, sacred geometry, and Norse symbolism. 12+ years of experience.\nTrained in Nordic runic illustration and dotwork. Known for custom sleeves with spiritual themes. \n\u201CInk is my medium; symmetry is my religion.\u201D"} instagram="https://instagram.com/raven_inkshade" avatar="public/artist_1.jpg"/>
                    <ArtistCard_1.default name="Lex Needlecraft" desc={"Watercolor-style tattoos with florals and fauna. 8 years of experience.\nFine arts grad blending emotion and color into vivid, translucent designs. \n\u201CTattooing is painting that lasts forever.\u201D"} instagram="https://instagram.com/raven_inkshade" avatar="public/artist_2.jpg"/>
                    <ArtistCard_1.default name="Milo Thorn" desc={"American traditional & flash revival. 15 years of experience.\nOld-school apprentice turned legend, known for bold eagles, daggers, and pin-up sets.\n\u201CBold lines. Bright color. No apologies.\u201D"} instagram="https://instagram.com/raven_inkshade" avatar="public/artist_3.jpg"/>
                </div>
                <ArrowNav_1.default prevId="about" nextId="faq"/>
            </Panel_1.default>


            <Panel_1.default id="faq">
                <h2>FAQs</h2>
                <div className="faq-grid">
                    <FAQItem_1.default question="Does it hurt?" answer="Yes, but it's manageable—like a scratch or burn depending on placement."/>
                    <FAQItem_1.default question="Can I bring my own design?" answer="Absolutely. Bring references or sketches and we’ll refine it with you."/>
                    <FAQItem_1.default question="How much will it cost?" answer="Pricing depends on size, detail, and time. Most tattoos start at $100."/>
                    <FAQItem_1.default question="Do you accept walk-ins?" answer="Yes, when available. We recommend calling ahead or checking our Instagram."/>
                    <FAQItem_1.default question="Can I get tattooed while pregnant?" answer="We do not tattoo pregnant or nursing clients for safety reasons."/>
                </div>
                <ArrowNav_1.default prevId="cover" nextId="aftercare"/>
            </Panel_1.default>
            <Panel_1.default id="aftercare" bgColor="#0C0C0C">
                <AftercarePanel_1.default />
            </Panel_1.default>

        </div>);
}
