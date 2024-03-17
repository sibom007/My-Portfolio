

const Navbar = () => {

    return (
        <div className="w-full fixed z-[999] px-20 py-8 flex justify-between items-center">
            <div><img className="size-[50px]" src="../../public/sibom-logo.png" alt="" /></div>
            <div className="text-base font-medium text-white flex gap-10">{["Home", "Servise", "Our Work", "About Us", "Contact Us"].map((i, index) => (<a className="animate-pulse text-blue-300" key={index}>{i}</a>))}</div>
        </div>
    );
};

export default Navbar;