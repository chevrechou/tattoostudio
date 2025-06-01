import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './Parallax.css';

export default function ParallaxPage() {
  return (
    <div className="parallax-wrapper">
      <section className="hero">
        <Parallax speed={-20}>
          <img src="/logo.png" alt="Studio Logo" className="logo" />
        </Parallax>
        <h1 className="title">Flash Book Tattoo Studio</h1>
      </section>

      <section className="about">
        <Parallax speed={10}>
          <h2>About Us</h2>
          <p>
            Based in Austin, Texas, we’ve been crafting bold tattoos since 2010.
            Expect precision, creativity, and a touch of soul in every piece.
          </p>
        </Parallax>
      </section>

      <section className="artists">
        <h2>Our Artists</h2>
        <Parallax speed={-10}>
          <div className="artist-card">
            <h3>Raven Inkshade</h3>
            <p>Blackwork & geometry. 12 years of experience. Norse mythology nerd.</p>
          </div>
        </Parallax>
        <Parallax speed={-15}>
          <div className="artist-card">
            <h3>Lex Needlecraft</h3>
            <p>Watercolor wizard. Fine arts background. Emotive, expressive work.</p>
          </div>
        </Parallax>
        <Parallax speed={-20}>
          <div className="artist-card">
            <h3>Milo Thorn</h3>
            <p>Bold American traditional. Loves flash revival. Modern vintage style.</p>
          </div>
        </Parallax>
      </section>
    </div>
  );
}
