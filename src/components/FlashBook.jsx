import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./FlashBook.css"; // styling

const Page = React.forwardRef(({ children }, ref) => (
  <div className="page" ref={ref}>
    <div className="page-content">{children}</div>
  </div>
));

export default function FlashBook() {
  return (
    <div className="book-container">
      <HTMLFlipBook width={550} height={600} showCover={true}>
        <Page>
          <div className="cover"></div>
        </Page>

        <Page>
          <h2>About Us</h2>
          <p>
            Welcome to Flash Book Tattoo Studio, a modern parlor with vintage
            heart. Established in 2010 in Austin, Texas, we’ve become a staple
            of the community for bold lines and fine detail. Our team of
            passionate artists deliver top-notch work in a clean, creative, and
            welcoming space.
          </p>
        </Page>

        <Page>
          <h2>Raven Inkshade</h2>
          <p>
            Specializes in blackwork and geometric tattoos. 12 years experience.
            Loves sacred geometry and Norse mythology.
          </p>
        </Page>

        <Page>
          <h2>Lex Needlecraft</h2>
          <p>
            Known for watercolor-style and illustrative tattoos. Background in
            fine arts. Brings emotion and color to every piece.
          </p>
        </Page>

        <Page>
          <h2>Milo Thorn</h2>
          <p>
            Bold traditionalist with a modern edge. Expert in American
            traditional, color work, and flash revival pieces.
          </p>
        </Page>

        <Page>
          <h2>Ivy Skintale</h2>
          <p>
            Realism and portrait master. Known for lifelike representations and
            capturing emotions in ink.
          </p>
        </Page>
      </HTMLFlipBook>
    </div>
  );
}
