import { AiFillGithub, AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="bg-zinc-600 md:flex items-center justify-around py-10">
            <div className="text-white md:leading-[2vw] text-xl">
                <h1 className="underline">Contact Name</h1>
                <div>
                    <p>Email : sibomsaha77@gmail.com</p>
                    <p>Git Hub : sibom007</p>
                    <p>FaceBook : Sibom saha</p>
                    <p>WhatsApp : 01625334383</p>
                </div>
            </div>
            <div className="text-white md:leading-[2vw] text-xl">
                <h1 className="underline">Contact Links</h1>
                <div>
                    <p className="flex items-center">Git Hub : <a className="text-3xl ml-3" href="https://github.com/sibom007"><AiFillGithub /></a></p>
                    <p className="flex items-center">FaceBook : <a className="text-3xl ml-3" href="https://www.facebook.com/"> <AiOutlineFacebook /></a></p>
                </div>
            </div>
            <div className="text-white md:leading-[2vw] text-xl">
                <h1 className="underline">Contact Name</h1>
                <div>
                    <p>Email : sibomsaha77@gmail.com</p>
                    <p>Git Hub : sibom007</p>
                    <p>FaceBook : Sibom saha</p>
                    <p>WhatsApp : 01625334383</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;