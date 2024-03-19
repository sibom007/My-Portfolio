import { skill } from "../Shared/Skills";

const SkillsPage = () => {



    return (
        <div data-scroll data-scroll-speed='0.7' className="pt-10 h-screen px-10">
            <div className="mt-10 uppercase underline text-center text-4xl font-semibold mb-16">
                <h1>Skill</h1>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {skill.map((item) => <div key={item.name}>
                    <div className="w-[500px] h-[249px] relative">
                        <img className="rounded-xl" src={item.img} alt="" />

                        <div className="absolute top-0 rounded-xl text-white w-[100%] h-[100%] bg-[#1f3d4738] backdrop-blur-[4px] opacity-60 hover:opacity-100 duration-700  p-8" >
                            <div className="text-white text-center text-2xl font-medium mt-10">
                                <h1>{item.name}</h1>
                                <p>{item.Progress}</p>
                            </div>
                        </div>

                    </div>
                </div>)}
            </div>

        </div>
    );
};

export default SkillsPage;