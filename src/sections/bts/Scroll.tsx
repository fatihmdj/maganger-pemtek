const Scroll = () => {

    return(
        <div className="min-h-screen">
            <div className="grid grid-flow-col grid-rows-2 auto-cols-max gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
                <div className="row-span-2 w-124 aspect-9/16 bg-blue-400 snap-start rounded-3xl">
                </div>

                <div className="row-span-2 w-124 aspect-9/16 bg-transparent snap-start rounded-3xl grid gap-5">
                    <div className="w-124 h-full bg-blue-500 snap-start rounded-3xl">
                    </div>
                    <div className="w-124 h-full bg-blue-600 snap-start rounded-3xl ">
                    </div>
                </div>

                <div className="row-span-2 w-124 aspect-9/16 bg-blue-400 snap-start rounded-3xl">
                </div>

                <div className="row-span-2 w-124 aspect-9/16 bg-transparent snap-start rounded-3xl grid gap-5">
                    <div className="w-124 h-full bg-blue-500 snap-start rounded-3xl">
                    </div>
                    <div className="w-124 h-full bg-blue-600 snap-start rounded-3xl">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scroll