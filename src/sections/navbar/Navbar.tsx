import NavigationLinks from "./NavigationLinks";
import MedtekLogo from "../../assets/logo/Medtek.avif";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 max-w-400 mx-auto">
      <div>
        <img
          src={MedtekLogo}
          alt="Logo-Medtek-BEM-Fatisda-UNS"
          className="w-auto h-8"
        />
      </div>
      <div>
        <NavigationLinks />
      </div>
    </div>
  );
};

export default Navbar;
