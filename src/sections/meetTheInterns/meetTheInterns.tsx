const medKom = [
  {
    nama: "Alfann Naufal Rabbani",
    peran: "Maganger MedKom",
    angkatan: "Informatika 2025",
    foto: "/anggota/foto1.jpg",
    quote: "\"Design is not just how it looks, but how it works.\""
  },
  {
    nama: "Rahadyan Naufal Rabbani",
    peran: "Maganger MedKom",
    angkatan: "Informatika 2025",
    foto: "/anggota/foto2.jpg",
    quote: "\"Design is not just how it looks, but how it works. is it?\""
  },
  {
    nama: "Akmal Mustofa",
    peran: "Maganger MedKom",
    angkatan: "Informatika 2025",
    foto: "/anggota/foto3.jpg",
    quote: "\"Design is not just how it looks, but how it works.\""
  },
  {
    nama: "Angelina Jouly",
    peran: "Maganger MedKom",
    angkatan: "Informatika 2025",
    foto: "/anggota/foto4.jpg",
    quote: "\"Design is not just how it looks, but how it works.\""  },
];

const pemTek = [
  {
    nama: "Muhammad Aqiel Adhi R",
    peran: "Maganger PemTek",
    angkatan: "Informatika 2025",
    foto: "/anggota/foto1.jpg",
    quote: "\"As long as it works, it works.\""
  },
  {
    nama: "Axel Christian Nugraha",
    peran: "Maganger PemTek",
    angkatan: "Informatika 2025",
    foto: "/anggota/foto2.jpg",
    quote: "\"As long as it works, it works.\""
  },
  {
    nama: "Akmal Mustofa",
    peran: "Maganger PemTek",
    angkatan: "Informatika 2025",
    foto: "/anggota/foto3.jpg",
    quote: "\"As long as it works, it works.\""
  },
  {
    nama: "Angelina Jouly",
    peran: "Maganger PemTek",
    angkatan: "Informatika 2025",
    foto: "/anggota/foto4.jpg",
    quote: "\"As long as it works, it works.\""
  },
];

export default function meetTheInterns() {
  return (
    <section className="w-full py-32 bg-boxed-pattern1">
      <div className="max-w-7xl mx-auto px-8">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-6xl font-black text-neutral-900">
            Meet The Interns
          </h2>
          <p className="text-2xl font-black font-light text-neutral-500 mt-5">
            Orang-orang di balik layar yang mengubah ide menjadi realita.
          </p>
          
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 my-20">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#c05d20] to-[#54290e]" />
          <p className="text-3xl font-semibold
            bg-gradient-to-r from-[#c05d20] to-[#54290e]
            bg-clip-text text-transparent">
            Creative Minds of MedKom
          </p>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#c05d20] to-[#54290e]" />
        </div>  

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {medKom.map((p, i) => (
            <div
              key={i}
              className="relative h-[420px] rounded-3xl overflow-hidden group shadow-lg">
                
              <img
                src={p.foto}
                alt={p.nama}
                className="w-full h-full object-cover"
                />

            {/* BLACK GRADIENT (default) */}
            <div
            className="absolute inset-0
                bg-gradient-to-t from-black/80 via-black/30 to-transparent
                transition-opacity duration-700
                group-hover:opacity-100"
                />

            {/* ORANGE GRADIENT (hover) */}
            <div
            className="absolute inset-0
                bg-gradient-to-t from-[#c05d20]/70 via-[#c05d20]/10 to-transparent
                opacity-0
                transition-opacity duration-700
                group-hover:opacity-100"
                />

            {/* text wrapper */}
            <div className="absolute bottom-0 left-6 right-6 text-white">
                {/* Information Block */}
                <div className="transition-all duration-700 group-hover:translate-y-[-40px]">
                    <p className="text-lg">{p.peran}</p>
                        <h3 className="text-xl mt-1 font-bold">{p.nama}</h3>
                    <p className="text-sm">{p.angkatan}</p>
                </div>
                {/* Quotes Block */}
                <div className="
                    flex gap-2
                    opacity-0 translate-y-0
                    transition-all duration-700 delay-150
                    group-hover:opacity-100
                    group-hover:-translate-y-7
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
          ))}
        </div>
      </div>
      
      <div>
        <div className="max-w-7xl mx-auto px-8">
            {/* Divider */}
            <div className="flex items-center gap-6 my-20">
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#2a5bfb] to-[#132a73]" />
                    <p className="text-3xl font-semibold
                        bg-gradient-to-r from-[#2a5bfb] to-[#132a73]
                        bg-clip-text text-transparent">
                        Tech Wizards of PemTek
                    </p>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-[#2a5bfb] to-[#132a73]" />
            </div>  

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {pemTek.map((p, i) => (
                  <div
                    key={i}
                    className="relative h-[420px] rounded-3xl overflow-hidden group shadow-lg"
                    >
                    
                <img
                    src={p.foto}
                    alt={p.nama}
                    className="w-full h-full object-cover"
                    />

                {/* BLACK GRADIENT (default) */}
                <div
                className="absolute inset-0
                    bg-gradient-to-t from-black/80 via-black/30 to-transparent
                    transition-opacity duration-700
                    group-hover:opacity-100"
                    />

                {/* BLUE GRADIENT (hover) */}
                <div
                className="absolute inset-0
                    bg-gradient-to-t from-[#2a5bfb]/70 via-[#2a5bfb]/10 to-transparent
                    opacity-0
                    transition-opacity duration-700
                    group-hover:opacity-100"
                    />

                {/* text wrapper */}
                <div className="absolute bottom-0 left-6 right-6 text-white">
                    {/* Information Block */}
                    <div className="transition-all duration-700 group-hover:translate-y-[-40px]">
                        <p className="text-lg">{p.peran}</p>
                            <h3 className="text-xl mt-1 font-bold">{p.nama}</h3>
                        <p className="text-sm">{p.angkatan}</p>
                    </div>
                    {/* Quotes Block */}
                    <div className="
                        flex gap-2
                        opacity-0 translate-y-0
                        transition-all duration-700 delay-150
                        group-hover:opacity-100
                        group-hover:-translate-y-7
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
                ))}
            </div>
        </div>
      </div>
    </section>

  );
}