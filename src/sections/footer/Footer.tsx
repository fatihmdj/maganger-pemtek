import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top amber slash line */}
      <div className="w-full h-2 bg-amber-200 slash-line"></div>

      {/* Main Footer Section */}
      <div className="bg-[#132971] py-10 lg:py-14 -mt-px">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-0 justify-between items-start">
          
          {/* Left Section */}
          <div className="max-w-xl">
            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight mb-4 lg:mb-5">
              Medtek
            </h2>
            <p className="text-[#EAEFFF] text-base sm:text-lg lg:text-4.5 font-medium leading-relaxed lg:leading-7.5">
              Dibuat dengan dedikasi oleh Maganger Pemtek Medkom. Landing page
              ini adalah hasil kolaborasi dan pembelajaran tim teknis kami untuk
              memajukan digitalisasi organisasi.
            </p>
          </div>

          {/* Right Section */}
          <div className="max-w-xl">
            <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-8 lg:mb-12">
              Ready to collaborate and innovate with us?
            </h3>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-7.5">
              
              {/* Contact Button */}
              <a
                href="https://wa.me/6281255125600"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full px-6 py-3 lg:py-4.5 flex items-center justify-center hover:scale-[1.03] transition-transform"
              >
                <span className="text-[#2249CA] text-base sm:text-lg lg:text-4.5 font-semibold">
                  Contact Us
                </span>
              </a>

              {/* Social Icons */}
              <div className="flex gap-3 lg:gap-4.25">
                {[
                  ["simple-icons:instagram", "Instagram"],
                  ["material-symbols:mail-rounded", "Email"],
                  ["brandico:linkedin", "LinkedIn"],
                ].map(([icon, label]) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-10 h-10 lg:w-12.5 lg:h-12.5 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon icon={icon} className="w-5 h-5 lg:w-6 lg:h-6 text-[#B2B2B2]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#193797] py-4 lg:py-6.75 -mt-px">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center text-center sm:text-left">
          <p className="text-[#FEF1EA] text-sm sm:text-base lg:text-4.5 font-medium">
            © 2025 Maganger Kemenko Media & Teknologi - Pemtek Division.
          </p>
          <p className="text-[#FEF1EA] text-sm sm:text-base lg:text-4.5">
            <span className="font-medium">Built with </span>
            <span className="font-bold">React</span>
            <span className="font-medium"> & passion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
