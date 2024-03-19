import { motion } from "framer-motion";

const NeverGiveUpPage = () => {

    return (
        <div className="">
            <div data-scroll data-scroll-speed='0.3' className="uppercase py-12 bg-[#5BA199]">
                <div className="whitespace-nowrap flex overflow-hidden font-semibold gap-10 border-2 border-zinc-300/50 leading-none text-zinc-100/70">
                    <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: "10", }} className="text-[24vw]">never give up</motion.h1>
                    <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: "10", }} className="text-[24vw]">never give up</motion.h1>
                </div>
            </div>
        </div>
    );
};

export default NeverGiveUpPage;