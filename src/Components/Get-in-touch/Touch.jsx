import React from 'react'
import './touch.css'
import theme_pattern from '/src/assets/theme_pattern.svg'
import { IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";


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
    <div id='contact' className='getInTouch  flex flex-col gap-[65px]  mt-[18vh] mb-[18vh] ml-[10vw] mr-[10vw] relative '>
        <div className='git-tittle flex  items-center justify-center  relative     '  >
            <h1 className=' get text-[70px]  font-bold  whitespace-nowrap' >Get in touch</h1>
            <img  className='theme  w-[170px] absolute top-[5vh] right-[47vh] z-[-2]  '  src={theme_pattern} alt="" />
        </div>
        <div  className='link-sec flex gap-[5vw] ml-7 ' >
            <div className='link-left  '  >
                <h1 className=' talk text-[42px]'  >Let's talk</h1>
                <p  className=' mt-1 font-light text-gray-300 hover:text-white duration-500 ' >I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work  on. You can contact anytime.</p>
                <div className='mt-5' >
                <div className='cicon flex items-center gap-5 mb-3 hover:scale-[1.1] duration-500 ' >
                <IoMailOutline className='micon  text-gray-300 '/>
                <h5 className='text-gray-300  text-[18px] hover:text-white duration-500 ' > aliumair55013@gmail.com</h5>
                </div>
                <div className='cicon flex items-center gap-5 mt-5 text-gray-300 hover:scale-[1.1] duration-500 ' >
                <FiPhoneCall  className='micon'/>
                <h5 className='text-[18px] hover:text-white duration-500  ' >+923040638130</h5>
                </div>
                <div className='cicon flex items-center gap-5 mt-5 text-gray-300  hover:scale-[1.1] duration-500 ' >
                <MdOutlineAddLocationAlt  className='micon'/>
                <h5 className='text-[18px] hover:text-white duration-500 ' >Lahore,Pakistan</h5>
                </div>
                </div> 
            </div>
            <div onSubmit={onSubmit} className='link-right  grid  grid-cols-3  '>
               <form  className='contact-right'>
                <label  className='text-gray-300'  htmlFor="">Your Name</label>
                <input type="text" name='name'  className='p-4 mb-3 w-[40vw] rounded-md border-white w-80 mt-3 text-gray-300 '  placeholder='Enter Your Name'  />
                <label htmlFor=""  className='text-gray-300' >Your Email</label>
                <input type="email" name='email'  className='p-4 mb-3 w-[40vw] rounded-md border-white w-80 mt-3 text-gray-300'  placeholder='Enter Your mail Here' />
                <label htmlFor="" className=' textArea   text-gray-300  text-[15px] ' >Write your message here</label>
                <textarea name="message"    className=' p-[25px]  w-[450px] rounded-[4px] border-white w-80 mt-3 text-gray-300'  placeholder='Enter Your Message' rows={8} ></textarea>
                <button type='submit' className='contact-submit whitespace-nowrap  text-[17px] font-normal  mt-[5vh]  hover:scale-[1.06] duration-500 py-3 px-7 rounded-[50px]  '  >Submit here</button>
               </form>
            </div>
        </div>
        <div className='lastPart relative flex items-center justify-between ' >
                <div className='last-left relative  ' >
                    <h1 className='text-[55px] font-bold ' > Ali</h1>
                    <img src={theme_pattern} alt="" className=' h-[5vh] absolute top-8 left-1 z-[-2] '  />
                <p className='font-medium  text-[16px]  ' >I am a MERN STACK Developer from pakistan. </p>
                </div>
                <div className='last-right flex items-center gap-[2vw] justify-center mt-[18px]' >
                    <div className=' picon   bg-[#32323B]  border flex items-center gap-4 px-4 py-4 rounded-full '>
                    <IoPersonAddOutline className='text-2xl text-gray-300 '/>
                    <input type="mail" name='mail' placeholder='Enter Your Mail' className='bg-transparent outline-none '  />
                     </div>
                <button  className=' px-[35px] py-[15px] mb-5 bg-gradient-to-r from-[#DA7C25] to-[#B923E1] rounded-[30px] items-center hover:scale-[1.05] duration-300  text-[15px] ' >Subscribe</button>
                </div>
            </div>
            <div  className='footer  ' >
                <div className='border'  ></div>
                <div className='ft-last flex item-center justify-between  ' >
                    <div  className='rights  mt-11 ' >
                        <h2 className='rights' >© 2024 Ali Umair. All rights reserved.</h2>
                    </div>
                    <div className=' link flex gap-[3vw] items-center mt-7' >
                       <div><a href="">Term of Services</a></div> 
                       <div><a href="">Privacy Policy</a></div> 
                       <div><a href="">Privacy Policy</a></div> 
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Touch