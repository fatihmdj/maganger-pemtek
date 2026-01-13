import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";
import MeetTheInterns from "./sections/meetTheInterns/meetTheInterns";

const App = () => {
  return (
    <div>
      <div className="border-b border-b-neutral-200 fixed top-0 left-0 w-full bg-white z-50">
        <Navbar />
      </div>
      <div className="pt-12">
        <Hero />
      </div>
      <div className="bg-[#FBF9FF]" id="about">
        <About />
      </div>
      <div className="bg-[#fdfcff]" id="meetTheInterns">
        <MeetTheInterns />
      </div>
    </div>
  );
};

export default App;
