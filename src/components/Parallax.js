"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ParallaxPage;
var react_1 = require("react");
var react_scroll_parallax_1 = require("react-scroll-parallax");
require("./Parallax.css");
function ParallaxPage() {
    return (<div className="parallax-wrapper">
      <section className="hero">
        <react_scroll_parallax_1.Parallax speed={-20}>
          <img src="/logo.png" alt="Studio Logo" className="logo"/>
        </react_scroll_parallax_1.Parallax>
        <h1 className="title">Flash Book Tattoo Studio</h1>
      </section>

      <section className="about">
        <react_scroll_parallax_1.Parallax speed={10}>
          <h2>About Us</h2>
          <p>
            Based in Austin, Texas, we’ve been crafting bold tattoos since 2010.
            Expect precision, creativity, and a touch of soul in every piece.
          </p>
        </react_scroll_parallax_1.Parallax>
      </section>

      <section className="artists">
        <h2>Our Artists</h2>
        <react_scroll_parallax_1.Parallax speed={-10}>
          <div className="artist-card">
            <h3>Raven Inkshade</h3>
            <p>Blackwork & geometry. 12 years of experience. Norse mythology nerd.</p>
          </div>
        </react_scroll_parallax_1.Parallax>
        <react_scroll_parallax_1.Parallax speed={-15}>
          <div className="artist-card">
            <h3>Lex Needlecraft</h3>
            <p>Watercolor wizard. Fine arts background. Emotive, expressive work.</p>
          </div>
        </react_scroll_parallax_1.Parallax>
        <react_scroll_parallax_1.Parallax speed={-20}>
          <div className="artist-card">
            <h3>Milo Thorn</h3>
            <p>Bold American traditional. Loves flash revival. Modern vintage style.</p>
          </div>
        </react_scroll_parallax_1.Parallax>
      </section>
    </div>);
}
