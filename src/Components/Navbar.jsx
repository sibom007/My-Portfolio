import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {

    return (
        <div className="w-full fixed z-[999] px-20 py-3 flex justify-between items-center backdrop-filter backdrop-blur-sm">
            <div><img className="size-5 md:size-[50px]" src="../../public/sibom-logo.png" alt="" /></div>
            <div className="text-[2vw] md:text-base font-medium text-white flex gap-2 md:gap-10">{["Home", "Servise", "Our Work", "About Us", "Contact Us"].map((i, index) => (<a className="animate-bounce text-blue-300" key={index}>{i}
            </a>))}</div>
            <a
                href={"../../public/Reme 1.pdf.pdf"}
                download={"Resume"}
                className="ml-5 bg-[#f1eaed] p-2 rounded-lg uppercase flex items-center border-2 shadow-md hover:bg-[#ebdfe4] duration-200">My resume <AiOutlineCloudDownload className="size-5 ml-3" /> </a>
        </div>
    );
};

export default Navbar;