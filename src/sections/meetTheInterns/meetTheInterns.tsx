import anggota from "../../data/anggota.json";

type anggota = {
  nama: string;
  peran: string;
  angkatan: string;
  foto: string;
  quote: string;
};

const medKom = anggota.medKom as anggota[];
const pemTek = anggota.pemTek as anggota[];

export default function meetTheInterns() {
  return (
    <section className="w-full py-32 bg-boxed-pattern1">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900">
            Meet The Interns
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl
                        font-black font-light text-neutral-500
                        mt-1 md:mt-3 lg:mt-5">
            Orang-orang di balik layar yang mengubah ide menjadi realita.
          </p>
          
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 my-5 md:my-12.5 lg:my-30">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#c05d20] to-[#54290e]" />
          <p className="text-center text-xl md:text-2xl lg:text-3xl font-semibold
            bg-gradient-to-r from-[#c05d20] to-[#54290e]
            bg-clip-text text-transparent">
            Creative Minds of MedKom
          </p>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#c05d20] to-[#54290e]" />
        </div>  

        {/* Cards */}
        <div className="grid place-items-center
                        grid-cols-2 md:grid-cols-2 lg:grid-cols-3
                        gap-14 md:gap-12 lg:gap-10
                        my-10 md:my-5 lg:-my-5">
          {medKom.map((p, i) => (
            <div
              key={i}
              className="relative">

              <div
                tabIndex={0}
                className="peer absolute inset-0 z-10 rounded-3xl cursor-pointer"
              />

              <div
                className="group h-[320px] md:h-[370px] lg:h-[420px]
                          relative w-[240px] md:w-[277.5px] lg:w-[315px]
                          rounded-3xl overflow-hidden shadow-lg">
                  
                <img
                  src={`/anggota/${p.foto}`}
                  alt={p.nama}
                  className="w-full h-full object-cover"
                  />

              {/* BLACK GRADIENT (default) */}
              <div
              className="absolute inset-0
                  bg-gradient-to-t from-black/80 via-black/30 to-transparent
                  transition-opacity duration-700
                  group-hover:opacity-100
                  peer-focus:opacity-100"
                  />

              {/* ORANGE GRADIENT (hover) */}
              <div
              className="absolute inset-0
                  bg-gradient-to-t from-[#c05d20]/70 via-[#c05d20]/10 to-transparent
                  opacity-0
                  transition-opacity duration-700
                  group-hover:opacity-100
                  peer-focus:opacity-100"
                  />

              {/* text wrapper */}
              <div className="text-white absolute bottom-0 left-2 right-2
                              md:left-3 md:right-3
                              lg:left-4 lg:right-4">
                  {/* Information Block */}
                  <div className="transition-all duration-700 group-hover:translate-y-[-40px] peer-focus:translate-y-[-40px]">
                      <p className="text-sm md:text-base lg:text-lg">{p.peran}</p>
                          <h3 className="text-base md:text-lg lg:text-xl mt-1 font-bold">{p.nama}</h3>
                      <p className="text-xs md:text-xs lg:text-sm">{p.angkatan}</p>
                  </div>
                  {/* Quotes Block */}
                  <div className="
                      flex gap-2
                      opacity-0 translate-y-0
                      transition-all duration-700 delay-150
                      group-hover:opacity-100
                      peer-focus:opacity-100
                      group-hover:-translate-y-7
                      peer-focus:-translate-y-7
                      ">

                      {/* vertical line */}
                      <div className="w-[2px] bg-white rounded-full"></div>

                      {/* quote */}
                      <p className="text-sm italic text-white/90 leading-relaxed">
                          {p.quote}
                      </p>
                  </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <div className="max-w-7xl mx-auto px-8">
            {/* Divider */}
            <div className="flex items-center gap-6 mt-10 my-5 md:my-12.5 lg:my-30">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#2a5bfb] to-[#132a73]" />
                    <p className="text-center text-xl md:text-2xl lg:text-3xl font-semibold
                                  bg-gradient-to-r from-[#2a5bfb] to-[#132a73]
                                  bg-clip-text text-transparent">
                        Tech Wizards of PemTek
                    </p>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#2a5bfb] to-[#132a73]" />
            </div>  

          {/* Cards */}
          <div className="grid place-items-center
                          grid-cols-2 md:grid-cols-2 lg:grid-cols-3
                          gap-14 md:gap-12 lg:gap-10
                          my-10 md:my-5 lg:-my-5">
            {pemTek.map((p, i) => (
              <div
                key={i}
                className="relative">

                <div
                  tabIndex={0}
                  className="peer absolute inset-0 z-10 rounded-3xl cursor-pointer"
                />

                <div
                  className="group h-[320px] md:h-[370px] lg:h-[420px]
                            relative w-[240px] md:w-[277.5px] lg:w-[315px]
                            rounded-3xl overflow-hidden shadow-lg">
                    
                  <img
                    src={`/anggota/${p.foto}`}
                    alt={p.nama}
                    className="w-full h-full object-cover"
                    />

                {/* BLACK GRADIENT (default) */}
                <div
                className="absolute inset-0
                    bg-gradient-to-t from-black/80 via-black/30 to-transparent
                    transition-opacity duration-700
                    group-hover:opacity-100
                    peer-focus:opacity-100"
                    />

                {/* BLUE GRADIENT (hover) */}
                <div
                className="absolute inset-0
                    bg-gradient-to-t from-[#2a5bfb]/70 via-[#2a5bfb]/10 to-transparent
                    opacity-0
                    transition-opacity duration-700
                    group-hover:opacity-100
                    peer-focus:opacity-100"
                    />

                {/* text wrapper */}
                <div className="text-white absolute bottom-0 left-2 right-2
                                md:left-3 md:right-3
                                lg:left-4 lg:right-4">
                    {/* Information Block */}
                    <div className="transition-all duration-700 group-hover:translate-y-[-40px] peer-focus:translate-y-[-40px]">
                        <p className="text-sm md:text-base lg:text-lg">{p.peran}</p>
                            <h3 className="text-base md:text-lg lg:text-xl mt-1 font-bold">{p.nama}</h3>
                        <p className="text-xs md:text-xs lg:text-sm">{p.angkatan}</p>
                    </div>
                    {/* Quotes Block */}
                    <div className="
                        flex gap-2
                        opacity-0 translate-y-0
                        transition-all duration-700 delay-150
                        group-hover:opacity-100
                        peer-focus:opacity-100
                        group-hover:-translate-y-7
                        peer-focus:-translate-y-7
                        ">

                        {/* vertical line */}
                        <div className="w-[2px] bg-white rounded-full"></div>

                        {/* quote */}
                        <p className="text-sm italic text-white/90 leading-relaxed">
                            {p.quote}
                        </p>
                    </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
