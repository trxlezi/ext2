import Header from "../components/Header";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Help from "../components/Help"
import Faq from "../components/Faq"
import About from "../components/About";
import Donate from "../components/Donate";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Donate />
      {/* <Help /> */}
      <Mission />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
