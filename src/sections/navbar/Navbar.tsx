import NavigationLinks from "./NavigationLinks";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 max-w-400 mx-auto">
      <div>
        <img src="/logo/Medtek.png" alt="Logo Medtek" className="w-auto h-8" />
      </div>
      <div>
        <NavigationLinks />
      </div>
    </div>
  );
};

export default Navbar;
