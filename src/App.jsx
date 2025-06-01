import React, { useEffect } from "react";
import HorizontalScroll from "./components/HorizontalScroll.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return <HorizontalScroll />;
}

export default App;
