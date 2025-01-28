import About from "../home/about/About";
import Banner from "../home/banner/Banner";
import HowToBuy from "../home/howToBuy/HowToBuy";
import Navbar from "../home/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <div className="bg-[#49CA68]">
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <HowToBuy></HowToBuy>
      </div>
    </div>
  );
};

export default Home;
