import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";

const App = () => {
  return (
    <div>
      <div className="border-b border-b-neutral-200">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default App;
