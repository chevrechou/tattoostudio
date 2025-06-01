"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AboutSection;
var react_1 = require("react");
require("./../styles/AboutSection.css");
var fa_1 = require("react-icons/fa");
function AboutSection() {
    var mapRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), mapVisible = _a[0], setMapVisible = _a[1];
    (0, react_1.useEffect)(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting)
                setMapVisible(true);
        }, { threshold: 0.3 });
        if (mapRef.current)
            observer.observe(mapRef.current);
        return function () {
            if (mapRef.current)
                observer.unobserve(mapRef.current);
        };
    }, []);
    return (<>
      <h2 className="about-title-outer">About Us</h2>

      {/* Full-width bio section */}
      <div className="about-bio-wrapper">
        <p>
          <strong>Hurts So Good Tattoo Studio</strong> is located in the heart of Denton, Texas at <strong>135 E Hickory St</strong>. 
          Known for bold aesthetic and dedication to craft, our studio blends modern precision with classic tattoo culture. 
          Whether it’s your first tattoo or your tenth, we make every piece personal and unforgettable.
        </p>
      </div>

      {/* Grid layout with cards and map */}
      <div className="about-wrapper">
        <div className="about-left">
          <div className="about-grid">
            <div className="about-box">
              <div className="box-header">
                <fa_1.FaPhone className="icon"/>
                <h4>Book a Session</h4>
              </div>
              <p>
                <a href="tel:9402437336">(940) 243-7336</a> — Call to book or ask about walk-ins.
              </p>
            </div>

            <div className="about-box">
              <div className="box-header">
                <fa_1.FaClock className="icon"/>
                <h4>Studio Hours</h4>
              </div>
              <p>Open daily from 12 PM</p>
            </div>

            <div className="about-box">
              <div className="box-header">
                <fa_1.FaUserAlt className="icon"/>
                <h4>Our Artists</h4>
              </div>
              <p>Custom tattoos in traditional and modern styles — every piece is unique.</p>
            </div>

            <div className="about-box">
              <div className="box-header">
                <fa_1.FaInstagram className="icon"/>
                <h4>Follow Us</h4>
              </div>
              <p>
                <a href="https://instagram.com/hurtssogoodtattoostudio" target="_blank" rel="noopener noreferrer">
                  @hurtssogoodtattoostudio
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-map-wrapper">
            <div className="about-image-card" ref={mapRef}>
              {mapVisible && (<iframe title="Hurts So Good Tattoo Studio Map" className="about-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.779166183448!2d-97.1309537!3d33.2146789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dcb2b299b9e29%3A0x42bbfe56fb7fa7b!2sHurts%20So%20Good%20Tattoo%20Studio!5e0!3m2!1sen!2sus!4v1717291709051!5m2!1sen!2sus" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>)}
            </div>
            <a className="directions-button" href="https://www.google.com/maps/dir/?api=1&destination=Hurts+So+Good+Tattoo+Studio,+135+E+Hickory+St,+Denton,+TX" target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </>);
}
