const NavigationLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <div
      className={`${isMobile ? "flex flex-col gap-4 text-lg text-neutral-900" : "font-medium text-lg space-x-8 text-neutral-900"}`}
    >
      <a href="#about">About</a>
      <a href="#divisions">Divisions</a>
      <a href="#proker">Proker</a>
      <a href="#team">Team</a>
      <a href="#journey">Journey</a>
    </div>
  );
};

export default NavigationLinks;
