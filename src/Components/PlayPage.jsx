import { useEffect, useState } from "react";


const PlayPage = () => {

    const [rotate, setrotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let dealtaX = mouseX - window.innerWidth / 2
            let dealtaY = mouseY - window.innerWidth / 2

            var angle = Math.atan2(dealtaY, dealtaX) * (180 / Math.PI)
            setrotate(angle - 180)
        })
    })

    return (
        <div data-scroll data-scroll-speed='-.2' className=" h-screen overflow-hidden w-full px-32 py-14 pt-0 ">
            <h1 className="underline uppercase text-4xl text-center mb-5 font-semibold">Play With me</h1>
            <div style={{ backgroundImage: 'url(../../public/eye2.png)' }} className='w-full rounded-lg relative h-full'>
                <div className="absolute flex gap-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                        <div className={`w-2/3 h-2/3 relative rounded-full bg-zinc-900 `}>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className=" w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                        <div className="w-2/3 h-2/3 relative rounded-full bg-zinc-900">
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className=" w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PlayPage;