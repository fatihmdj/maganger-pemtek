import Scroll from "./Scroll"

const Bts = () => {
    return(
        <section className="w-full px-32 text-black py-24">
            <div className="">
                <h1 className="text-6xl font-black tracking-tight text-neutral-900">Behind The Scenes</h1>
                <h3 className="text-2xl font-medium text-neutral-500 mt-4">Bukan sekadar magang, tapi proses belajar, bertumbuh, dan berkarya bersama.</h3>
            </div>
            <div className="pt-20">
                <Scroll />
            </div>
        </section>
    )
}

export default Bts