import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const update = () => {

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / total) * 100;

      setScroll(progress);

    };

    window.addEventListener("scroll", update);

    return () => window.removeEventListener("scroll", update);

  }, []);

  return (
    <>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "4px",
          width: `${scroll}%`,
          background: "#00d9ff",
          zIndex: 99999,
        }}
      />

      <Home />

    </>
  );
}

export default App;