



import NavBar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import SpecialMenu from "../components/SpecialMenu/SpecialMenu";
import Chef from "../components/Chef/Chef";
import Intro from "../components/Intro/Intro";
import Laurels from "../components/Laurels/Laurels";
import FindUs from "../components/FindUs/FindUs";
import Gallery from "../components/Gallery/Gallery";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
export default function App() {
  return (
    <div >
      <NavBar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}
