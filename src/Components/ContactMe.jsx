import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { toast } from 'sonner';
const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_lbpd4bb', 'template_em3jggo', form.current, {
                publicKey: 'FULUw3YYWkBSNpi-R',
            })
            .then(
                () => {
                    toast.success('SUCCESS!');
                },
                (error) => {
                    toast.error('FAILED...', error.text);
                },
            );
    };

    return (
        <div data-scroll data-scroll-speed='0.5'>
            <h1 className="text-center uppercase underline text-3xl font-semibold">
                Contact Me
            </h1>
            <div data-aos="zoom-in-up" className='mt-5 w-full flex items-center justify-center'>
                <form ref={form} onSubmit={sendEmail} className='bg-zinc-600/20 p-28 rounded-lg shadow-2xl'>
                    <h1 className='text-center underline font-medium'>Send Email To Me</h1>
                    <br />
                    <input className='w-[300px] mb-4 p-2 rounded-xl outline-blue-500/40 bg-white' placeholder='Name' name="user_name" type="text" />
                    <br />
                    <input className='w-[300px] mb-3 p-2 rounded-xl outline-blue-500/40 bg-white' placeholder='Email' name="user_email" type="email" />
                    <br />
                    <textarea className='w-[300px] mb-3 p-2 rounded-xl outline-blue-500/40 bg-white' placeholder='Text' name="message" type="text" />
                    <br />
                    <div className='flex items-center justify-center'> <button type="submit" value="Send" className='w-9/12 py-2 text-white rounded-xl  bg-gray-400 hover:bg-gray-400/60 duration-500 hover:text-gray-700/60'>Send</button></div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;



{/* <form className='bg-yellow-600 space-y-5' ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <br />
    <label>Email</label>
    <input type="email" name="user_email" />
    <br />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
</form> */}