import React from 'react'
import theme_pattern from '/src/assets/theme_pattern.svg'
import { IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { motion } from 'framer-motion';


const Touch = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "574804b1-1f0f-4ccd-9ae4-c1a4c9f3dbf0");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            event.target.reset();
        }
    };

    return (
        <div id='contact' className='flex flex-col gap-[65px] max-w-[1400px] mx-auto my-[140px] px-[20px] w-full lg:px-[50px] md:my-[100px] md:gap-[40px] max-md:m-0 max-md:p-[20px] max-md:gap-[30px] max-[480px]:my-[40px]  '>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='flex items-center justify-center relative mb-[60px] max-md:mb-10 max-md:text-center pt-10'
            >
                <h1 className='text-[70px] font-bold px-[30px] md:text-[45px] max-md:text-[32px] max-md:whitespace-normal max-[480px]:text-[28px] text-center'>Get in touch</h1>
                <img className='theme absolute  z-[-4] w-[150px] md:left-[48%] ' src={theme_pattern} alt="" />
            </motion.div>
            <div className='flex gap-[80px] ml-0 w-full max-lg:flex-col max-lg:gap-[40px] max-md:gap-[30px]'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='flex-1 max-w-[45%] max-lg:w-full max-lg:max-w-full max-md:text-center max-md:!w-full'
                >
                    <h1 className='text-[42px] font-bold bg-gradient-to-r from-[#B822E4] to-[#DF8908] bg-clip-text text-transparent mb-[15px] max-md:text-[32px] max-[480px]:text-[24px]'>Let's talk</h1>
                    <p className='mt-4 font-light text-gray-300 hover:text-white duration-500 leading-[1.6] mb-[30px]'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className='mt-8'>
                        <div className='flex items-center gap-[15px] mb-[20px] duration-300 hover:scale-[1.1] max-md:justify-center'>
                            <IoMailOutline className='text-[35px] font-medium text-gray-300' />
                            <h5 className='text-gray-300 text-[18px] hover:text-white duration-500'>aliumair55013@gmail.com</h5>
                        </div>
                        <div className='flex items-center gap-[15px] mb-[20px] text-gray-300 duration-300 hover:scale-[1.1] max-md:justify-center'>
                            <FiPhoneCall className='text-[35px] font-medium text-gray-300' />
                            <h5 className='text-[18px] hover:text-white duration-500'>+923040638130</h5>
                        </div>
                        <div className='flex items-center gap-[15px] text-gray-300 duration-300 hover:scale-[1.1] max-md:justify-center'>
                            <MdOutlineAddLocationAlt className='text-[35px] font-medium text-gray-300' />
                            <h5 className='text-[18px] hover:text-white duration-500'>Lahore, Pakistan</h5>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className='flex-1 max-w-[55%] w-full max-lg:w-full max-lg:max-w-full'
                >
                    <form onSubmit={onSubmit} className='flex flex-col w-full'>
                        <label className='text-gray-300 text-[18px] block mb-2 max-md:hidden' htmlFor="name">Your Name</label>
                        <input type="text" id="name" name='name' className='bg-[#32323C] p-[18px] mb-[25px] rounded-md text-gray-300 w-full text-[16px] border-none max-md:bg-[#1E1E1E] max-md:p-[16px] max-md:mb-[15px] placeholder:text-gray-500' placeholder='Enter your name' />

                        <label htmlFor="email" className='text-gray-300 text-[18px] block mb-2 max-md:hidden'>Your Email</label>
                        <input type="email" id="email" name='email' className='bg-[#32323C] p-[18px] mb-[25px] rounded-md text-gray-300 w-full text-[16px] border-none max-md:bg-[#1E1E1E] max-md:p-[16px] max-md:mb-[15px] placeholder:text-gray-500' placeholder='Enter your email' />

                        <label htmlFor="message" className='text-gray-300 text-[18px] block mb-2 max-md:hidden'>Write your message here</label>
                        <textarea id="message" name="message" className='bg-[#32323C] p-[18px] mb-[25px] rounded-md text-gray-300 w-full text-[16px] border-none max-md:bg-[#1E1E1E] max-md:p-[16px] max-md:mb-[15px] placeholder:text-gray-500' placeholder='Enter your message' rows={10}></textarea>

                        <div className="flex justify-center mt-8 max-md:mt-5">
                            <button type='submit' className='bg-gradient-to-r from-[#df8908] to-[#b415ff] text-[17px] font-medium hover:scale-[1.05] duration-300 py-[12px] px-[30px] rounded-[50px] self-start max-md:flex max-md:justify-center max-md:bg-gradient-to-r max-md:from-[#B923E1] max-md:to-[#DA7C25] max-md:mx-auto max-md:my-[20px] max-md:px-[40px]'>Submit now</button>
                        </div>
                    </form>
                </motion.div>
            </div>
            <div className='relative flex items-center justify-between mt-[80px] max-md:mt-[60px] max-md:border-t max-md:border-[#333] max-md:pt-[30px] max-md:flex-col'>
                <div className='relative max-md:text-center'>
                    <h1 className='text-[55px] font-bold relative max-md:text-[40px] max-md:mb-[10px] max-[480px]:text-[32px]'>Ali</h1>
                    <img src={theme_pattern} alt="" className='w-[60px] absolute top-11 left-[44%] md:w-[80px] md:left-0 md:z-[-2] ' />
                    <p className='font-medium text-[16px]'>I am a Mern Stack developer from, Pakistan with 3 years of experience.</p>
                </div>
                <div className='flex items-center gap-[20px] justify-center max-md:hidden'>
                    <div className='bg-[#32323C] border flex items-center gap-4 px-6 py-4 rounded-full'>
                        <IoPersonAddOutline className='text-2xl text-gray-300' />
                        <input type="email" name='email' placeholder='Enter your email' className='bg-transparent outline-none w-[200px] text-[#f1f1f1]' />
                    </div>
                    <button className='px-[35px] py-[15px] bg-gradient-to-r from-[#DA7C25] to-[#B923E1] rounded-[30px] flex items-center hover:scale-[1.05] duration-300 text-[15px]'>Subscribe</button>
                </div>
            </div>
            <div className='mt-[60px] max-md:mt-[40px]'>
                <div className='border-t-[1px] border-solid border-white/50 my-[20px] max-md:hidden'></div>
                <div className='flex items-center justify-between py-6 max-md:flex-col max-md:text-center max-md:gap-[15px]'>
                    <div className='text-[14px] text-[#888]'>
                        <h2>© 2023 Ali Umair. All rights reserved.</h2>
                    </div>
                    <div className='flex gap-[40px] items-center max-md:justify-center max-md:gap-[20px] max-md:text-[14px]'>
                        <div><a href="" className='text-[#f1f1f1] header-link no-underline max-md:text-[#888]'>Term of Services</a></div>
                        <div><a href="" className='text-[#f1f1f1] header-link no-underline max-md:text-[#888]'>Privacy Policy</a></div>
                        <div><a href="" className='text-[#f1f1f1] header-link no-underline max-md:text-[#888]'>Connect with me</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Touch