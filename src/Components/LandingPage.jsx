const LandingPage = () => {
    return (
        <div data-scroll data-scroll-speed='-.1' className="w-full ">
            <div className="pt-32 md:flex items-center justify-between gap-10 md:px-32">
                <div className="flex-1 relative">
                    <img src="../../public/bg-5.png" alt="Photo" />
                    <div className="absolute top-24 left-20 w-[250px]"><img src="../../public/prtofil.2.png" alt="" /></div>
                </div>
                <div className="uppercasec text-[5vw] md:text-[4vw] font-semibold md:leading-[5vw] lg:leading-[4vw] flex-1"><p>Hello EveryOne <br /> How Are you I Think You Are Fine <br />Welcome My PortPolio Site</p></div>
            </div>
            <p className="border-[1px] border-zinc-700 "></p>
        </div>
    );
};

export default LandingPage;