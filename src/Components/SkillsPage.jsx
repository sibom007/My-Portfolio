import Aos from "aos";
import { skill } from "../Shared/Skills";


const SkillsPage = () => {
    Aos.init()
    return (
        <div className="px-7 sm:mr-5 xl:px-16">
            <div className="mt-10 uppercase underline text-center text-4xl font-semibold">
                <h1 className="mb-16">Skill</h1>
            </div>
            <div
                className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-10">
                {skill.map((item) => <div
                    key={item.name}>
                    <div data-aos="zoom-in-down" className="w-[300px] xl:w-[450px]  h-[170px] xl:h-[249px]  relative">
                        <img className="rounded-xl" src={item.img} alt="" />
                        <div className="absolute top-0 rounded-xl text-white w-[100%] h-[100%] bg-[#1f3d4738] backdrop-blur-[4px] opacity-60 hover:opacity-100 duration-700 " >
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