import { ChatTeardropTextIcon } from "@phosphor-icons/react"


const Mentor = () => {
    return(
        <section className="px-32">
            <div className="text-center pb-16">
                <h1 className="text-6xl font-black tracking-tight text-neutral-900">
                To Our Mentors & Guides.
                </h1>
                <h3 className="text-2xl font-medium text-neutral-500 py-6 wrap-break-words">
                Sebuah pesan kecil untuk dampak yang besar. Terima kasih telah <br />
                mengubah 'magang' menjadi sebuah perjalanan penemuan jati diri.
                </h3>
            </div>
            <div className="my-16 rounded-2xl h-fit p-12 shadow-xl border-neutral-100 border-2">
                <h1 className="text-2xl font-medium leading-relaxed bg-linear-to-r from-[#2249CA] to-[#C15E20] bg-clip-text text-transparent">
                    "Terima kasih telah menjadi kompas bagi kreativitas kami yang terkadang liar, dan menjadi debugger bagi logika kami yang terkadang buntu. Bimbingan kalian bukan hanya tentang skill teknis, tapi tentang bagaimana berkarya dengan hati."
                </h1>
                <div className="flex justify-between mt-24">
                    <div className="flex gap-5">
                        <div className="w-fit h-fit p-3 rounded-full bg-linear-to-r from-[#2249CA] to-[#C15E20]">
                            <ChatTeardropTextIcon size={32} color="white" weight="fill"/>
                        </div>
                        <div className="w-fit h-full">
                            <h1 className="tracking-tight text-neutral-900 text-lg font-bold">
                                With Love & Respect
                            </h1>
                            <h3 className="font-medium text-neutral-400 text-lg">
                                Maganger Medtek 2025
                            </h3>
                        </div>
                    </div>
                    <div className="avatar-group -space-x-6">
                        <div className="avatar border-white">
                            <div className="w-12">
                            <img src="/public/anggota/foto1.jpg" className="object-top" />
                            </div>
                        </div>
                        <div className="avatar border-white">
                            <div className="w-12">
                            <img src="/public/anggota/foto2.jpg" className="object-top" />
                            </div>
                        </div>
                        <div className="avatar border-white">
                            <div className="w-12">
                            <img src="/public/anggota/foto3.jpg" className="object-top"/>
                            </div>
                        </div>
                        <div className="avatar avatar-placeholder border-white">
                            <div className="bg-linear-to-r from-[#2249CA] to-[#C15E20] text-neutral-content w-12 font-bold">
                            <span>+5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mentor