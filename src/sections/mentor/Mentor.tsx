import { Icon } from "@iconify/react";


const Mentor = () => {
    return(
        <section className="px-6 xl:px-32 mt-4 lg:mt-32">
            <div className="text-center pb-16 w-full">
                <h1 className="text-[26px] md:text-4xl lg:text-6xl font-black tracking-tight text-neutral-900">
                To Our Mentors & Guides.
                </h1>
                <div className="w-full h-fit flex justify-center">
                    <div className="max-w-175 xl:max-w-250">
                        <h3 className="text-xs md:text-lg lg:text-2xl font-medium text-neutral-500 py-3 lg:py-6 wrap-break-words">
                        Sebuah pesan kecil untuk dampak yang besar. Terima kasih telah mengubah 'magang' menjadi sebuah perjalanan penemuan jati diri.
                        </h3>
                    </div>
                </div>
            </div>
            <div className="mb-8 lg:my-16 rounded-2xl h-fit p-4 lg:p-12 shadow-xl border-neutral-100 border-2">
                <h1 className="text-[8px]  md:text-[20px] lg:text-2xl font-medium leading-relaxed bg-linear-to-r from-[#2249CA] to-[#C15E20] bg-clip-text text-transparent">
                    "Terima kasih telah menjadi kompas bagi kreativitas kami yang terkadang liar, dan menjadi debugger bagi logika kami yang terkadang buntu. Bimbingan kalian bukan hanya tentang skill teknis, tapi tentang bagaimana berkarya dengan hati."
                </h1>
                <div className="flex justify-between mt-6 md:mt-12 lg:mt-24 items-center">
                    <div className="flex gap-2 lg:gap-5">
                        <div className="w-fit h-fit p-2 lg:p-3 rounded-full bg-linear-to-r from-[#2249CA] to-[#C15E20]">
                            <Icon icon="material-symbols:chat-rounded"  className="w-3 h-3 md:h-5 md:w-5 lg:h-7 lg:w-7"/>
                        </div>
                        <div className="w-fit h-full mt-1 md:mt-0">
                            <h1 className="tracking-tight text-neutral-900 text-[8px] md:text-sm lg:text-lg font-bold">
                                With Love & Respect
                            </h1>
                            <h3 className="font-medium text-neutral-400 text-[8px] md:text-sm lg:text-lg">
                                Maganger Medtek 2025
                            </h3>
                        </div>
                    </div>
                    <div className="avatar-group -space-x-4 lg:-space-x-6">
                        <div className="avatar border-white">
                            <div className="w-8 md:w-10 lg:w-12">
                            <img src="/public/anggota/foto1.jpg" className="object-top" />
                            </div>
                        </div>
                        <div className="avatar border-white">
                            <div className="w-8 md:w-10 lg:w-12">
                            <img src="/public/anggota/foto2.jpg" className="object-top" />
                            </div>
                        </div>
                        <div className="avatar border-white">
                            <div className="w-8 md:w-10 lg:w-12">
                            <img src="/public/anggota/foto3.jpg" className="object-top"/>
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder border-white">
                            <div className="bg-linear-to-r from-[#2249CA] to-[#C15E20] text-neutral-content w-8 md:w-10 lg:w-12 font-semibold lg:font-bold">
                            <span className="text-xs lg:text-xl">+5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mentor