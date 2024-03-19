

const Navbar = () => {

    return (
        <div className="w-full fixed z-[999] px-20 py-3 flex justify-between items-center backdrop-filter backdrop-blur-sm">
            <div><img className="size-5 md:size-[50px]" src="../../public/sibom-logo.png" alt="" /></div>
            <div className="text-[2vw] md:text-base font-medium text-white flex gap-2 md:gap-10">{["Home", "Servise", "Our Work", "About Us", "Contact Us"].map((i, index) => (<a className="animate-bounce text-blue-300" key={index}>{i}</a>))}</div>
        </div>
    );
};

export default Navbar;