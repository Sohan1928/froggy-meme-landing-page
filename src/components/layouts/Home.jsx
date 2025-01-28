import About from "../home/about/About";
import Banner from "../home/banner/Banner";
import Footer from "../home/footer/Footer";
import HowToBuy from "../home/howToBuy/HowToBuy";
import Navbar from "../home/navbar/Navbar";
import OurRoadMap from "../home/ourRoadMap/OurRoadMap";
import Tokenomics from "../home/tokenomics/Tokenomics";

const Home = () => {
  return (
    <div>
      <div className="bg-[#49CA68]">
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <HowToBuy></HowToBuy>
      </div>
      <div className="bg-[#FFAA00]">
        <Tokenomics></Tokenomics>
        <OurRoadMap></OurRoadMap>
      </div>
      <div className="bg-[#49CA68]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
