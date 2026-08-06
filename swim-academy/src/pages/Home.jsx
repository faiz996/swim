// import Navbar from "../components/Navbar/Navbar";

// function Home() {
//   return (
//     <>
//       <Navbar />

//       <section
//         id="home"
//         style={{
//           height: "100vh",
//           background: "#0b2c82",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "#fff",
//           fontSize: "40px",
//           fontWeight: "bold",
//         }}
//       >
//         Swim Academy
//       </section>
//     </>
//   );
// }

// export default Home;

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Timing from "../components/Timing/Timing";
import Gallery from "../components/Gallery/Gallery";
import Branches from "../components/Branches/Branches";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Timing />
      <Gallery />
      <Branches />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default Home;