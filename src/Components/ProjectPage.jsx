import { Project } from "../Shared/Skills";

const ProjectPage = () => {
    return (
        <div data-scroll data-scroll-speed='0.7' className="px-7  sm:mr-5 xl:px-16">
            <div className="mt-10 uppercase underline text-center text-4xl font-semibold ">
                <h1 className="mb-16">Project</h1>
            </div>
            <div
                className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-10">
                {Project.map((item) => <div
                    key={item.name}>
                    <div data-aos="zoom-in-down" className="w-[300px] xl:w-[450px]  h-[170px] xl:h-[249px]  relative">
                        <img className="rounded-xl" src={item.img} alt="" />
                        <div className="absolute top-0 rounded-xl text-white w-[100%] h-[100%] bg-[#1f3d4738] backdrop-blur-[4px] opacity-60 hover:opacity-100 duration-700 " >
                            <div className="text-white text-center text-2xl font-medium mt-10">
                                <h1>{item.name}</h1>
                                <div className="flex items-center justify-center mt-8  gap-5 px-2 ">
                                    <a href={item.Live} className="p-2 bg-blue-300/60 w-[150px] rounded-xl">Live</a>
                                    <a href={item.CGit} className="p-2 bg-blue-300/60 w-[150px] rounded-xl">Client Git</a>
                                    <a href={item.SG} className="p-2 bg-blue-300/60 w-[150px] rounded-xl">Server Git</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default ProjectPage;