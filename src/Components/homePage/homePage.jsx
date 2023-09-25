import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedIn from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import Arrowright from '../images/Arrowright.svg'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import  bootstrap from '../images/bootstrap.png'
import github from '../images/github.png'
import api from '../images/Api.png'
import react from '../images/react.png'
import tailwind from '../images/tailwind.png'
import mongodb from '../images/mongodb.png'
import mysql from '../images/mysql.png'
import mail2 from '../images/mail2.png'
import instagram2 from '../images/instagram2.png'
import linkedIn2 from '../images/linkedIn2.png'
import {useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import emailjs from '@emailjs/browser';




function Home( ) {
    const first = useRef();  
    const second = useRef();
    const third = useRef();
    const fourth = useRef();
    const fifth = useRef();
    const sixth = useRef();

    

    console.log(process.env)
    const form = useRef();
              
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
            "service_v4ceoyb",
            "template_qmzybuc",
            form.current,
            "xU16Oen8ylKiEHrzm"
        )
        .then(
          (result) => {
            e.target.reset();
            console.log(result.text);
            toast.success("Message sent");
          },
          (error) => {
            toast.error("An Error Occurred")
            console.log(error.text);
          }
        );
    };
    
    


    return(
        
        <body className="bg-[#101630]">
            <ToastContainer/>
            <body className="pt-[6rem] md:pt-[2rem]">                
                <nav className="flex items-center justify-between mx-[15rem] px-2 py-2 font-semibold text-[18px] leading-[25.5px] text-[white] fixed w-[60rem]  md:w-screen md:px-10 md:py-2 md:mx-[1rem] md:text-[10px] sm:w-screen sm:px-10 sm:py-2 sm:mx-[1rem] sm:text-[10px]">
                    <div className="text-[#0028FC]">                        
                        <button onClick={() => first.current.scrollIntoView({behavior: 'smooth' })}>
                            Home
                        </button>                        
                    </div>
                    <div>                       
                        <button onClick={() => second.current.scrollIntoView({behavior: 'smooth' })}>
                            About
                        </button>                        
                    </div>
                    <div>                        
                        <button onClick={() => third.current.scrollIntoView({behavior: 'smooth' })}>
                            Services
                        </button>                        
                    </div>
                    <div>                        
                        <button onClick={() => fourth.current.scrollIntoView({behavior: 'smooth' })}>
                            portfolio
                        </button>                        
                    </div>
                    <div>
                        <button onClick={() => fifth.current.scrollIntoView({behavior: 'smooth' })}>
                            Skills
                        </button>                        
                    </div>
                    <div className="bg-[#0028FC] text-white rounded px-2 text-[16px] md:text-[10px]">
                        <button onClick={() => sixth.current.scrollIntoView({behavior: 'smooth' })}>
                            Contactme
                        </button>                        
                    </div>
                </nav>
                <div className="ml-[5rem] py-[10rem] md:ml-[2rem] md:py-[8rem] sm:ml-[2rem] sm:py-[8rem]" ref={first}>
                    <h1 className="font-bold text-[60px] leading-[80px] text-white mb-[1rem]  md:text-[40px] md:leading-[50px]">
                        <p>I’M AZEEZ</p>
                        <p>ABDUL-MUJEEB</p>                        
                    </h1>
                    <h1 className="font-normal text-[30px] leading-[40px] text-white  md:text-[25px] md:leading-[30px] sm:text-[25px] sm:leading-[30px]">
                        <p>FULLSTACK SOFTWARE <br/> DEVELOPER</p>
                    </h1>
                    <div className='flex justify-between w-[10rem] mt-[1rem] md:w-[8rem] sm:w-[8rem]'>
                        <img className='md:w-6 sm:w-5' src={instagram} alt="/instragm-icon" />
                        <img className='md:w-6 sm:w-5' src={linkedIn} alt="/linkedIn-icon" />
                        <img className='md:w-6 sm:w-5' src={twitter} alt="/twitter" />
                        <img className='md:w-6 sm:w-5' src={facebook} alt="/facebook-icon" />                                               
                    </div>
                </div>     
                <div className='flex justify-around py-[10rem]  md:flex-col md:py-[4rem] md:px-[3rem] sm:flex-col sm:py-[4rem] sm:px-[3rem]'  ref={second}>
                    <div className='border bg-[orange] h-[390px] w-[400px]  md:w-[300px] md:h-[240px] sm:w-[260px] sm:h-[220px]'>
                        
                    </div>
                    <div className='text-white w-[350px]'>
                        <div className='leading-[1.5rem] pt-[2rem] md:pt-[1rem] sm:pt-[1rem]'>
                            <h2 className='text-[#0028FC] text-[30px] font-bold'>ABOUT ME</h2>
                            {/* <p>eniola154956@gmail.com</p> */}
                        </div>                        
                        <p className='mt-[1rem] text-[18px] leading-[27px]'>
                            I'm Mujeeb Azeez, a junior full-stack developer with a passion for creating innovative web applications. I'm excited about the endless possibilities that coding offers and am dedicated to continuous learning and growth in this ever-evolving industry.
                        </p>
                        <div className='mt-[2rem] flex gap-[2rem]'>
                            <button className='px-[2rem] py-[0.2rem] bg-[#0028FC] rounded-md font-semibold'onClick={() => sixth.current.scrollIntoView({behavior: 'smooth' })}>
                                Hire Me
                            </button>
                            <button className='border border-[#0028Fc] px-[2rem] py-[0.2rem] bg-transparent text-white font-semibold rounded-md'>
                                Resume
                            </button>
                        </div>
                    </div>
                </div>     
                <div className='ml-[5rem] py-[10rem]  md:ml-[2rem]  md:py-[8rem] sm:ml-[2rem]  sm:py-[8rem] ' ref={third}>
                    <h1 className='text-[#0028FC] font-bold leading-[40px] text-[30px]'>
                        Services
                    </h1>
                    <div className='ml-[1rem]'>
                        <h2 className='font-semibold text-white text-[40px]'>
                            What Can I Do ?
                        </h2>
                        <p className='text-white text-[18px] leading-[27px] w-[26rem]  md:w-[20rem] sm:w-[20rem]'>
                            As a (junior) full-stack developer, there are several services and resources that has greatly assisted me in my career growth and development. These services had helped me learn, practice, and excel in my role. Here are some essential services i offer:
                        </p>                        
                    </div>                    
                </div>     
                <div className='py-[10rem] md:py-[8rem] sm:py-[7rem]' ref={fourth}>
                    <h1 className='font-bold text-[#0028FC] text-[30px] text-center'>Portfolio</h1>
                    <div className='flex justify-center text-[25px] gap-8 text-white  md:text-[16px] md:gap-4 sm:text-[16px] sm:gap-4'>
                        <button className='hover:text-[#0028Fc]'>
                            Mobile Applications
                        </button>
                        <button className='hover:text-[#0028Fc]'>
                            Web Applications
                        </button>
                        <button className='hover:text-[#0028Fc]'>
                            Websites
                        </button>
                    </div>
                    <div className='flex justify-around mt-[4rem] md:flex-col md:px-[3rem] sm:flex-col sm:px-[2rem]'>
                        <div className='mt-[2rem]'>
                            <h1 className='fontbold text-[30px] text-white '>Project 1</h1>
                            <h2 className='font-semibold text-[35px] text-white  md:text-[32px] sm:text-[32px]'>WealthBuddy</h2>
                            <p className='text-white w-[26rem] text-[18px] md:w-[20rem] sm:w-[18rem]'>
                                Lorem ipsum dolor sit amet,consectetur adipiscing
                                elit. Viverra sem pellentesque sagittis, massa 
                                hendrerit..orem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Viverra sem pellentesque sagittis, 
                                massa hendrerit..
                                <button className='flex mt-[1rem]  md:mt-[0.5rem] md:mb-[2rem] sm:mt-[0.5rem] sm:mb-[2rem]'>
                                 READ MORE
                                 <img className='w-[2rem]' src={Arrowright} alt="/Arrowright-icon" />
                                </button>                                
                            </p>
                        </div>                        
                        <div>
                            <div className='border bg-[orange] h-[390px] w-[400px] md:w-[300px] md:h-[240px] sm:h-[240px] sm:w-[300px]'>
                            
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around mt-[4rem] md:flex-col md:px-[3rem] sm:flex-col sm:px-[2rem]'>
                        <div>
                            <div className='border bg-[orange] h-[390px] w-[400px] md:w-[300px] md:h-[240px] sm:w-[300px] sm:h-[240px]'>
                            
                            </div>
                        </div>
                        <div className='mt-[2rem]'>
                            <h1 className='fontbold text-[30px] text-white md:text-[32px]'>Project 2</h1>
                            <h2 className='font-semibold text-[35px] text-white '>WealthBuddy</h2>
                            <p className='text-white w-[26rem] text-[18px] md:w-[20rem] sm:w-[20rem]'>
                                Lorem ipsum dolor sit amet,consectetur adipiscing
                                elit. Viverra sem pellentesque sagittis, massa 
                                hendrerit..orem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Viverra sem pellentesque sagittis, 
                                massa hendrerit..
                                <button className='flex mt-[1rem] md:mt-[0.5rem] md:mb-[2rem] sm:mt-[0.5rem] sm:mb-[2rem]'>
                                 READ MORE
                                 <img className='w-[2rem]' src={Arrowright} alt="/Arrowright-icon"/>
                                </button>   
                            </p>
                        </div>                                                
                    </div>
                </div>
                <div className='py-[10rem] md:py-[8rem] sm:py-[7rem]' ref={fifth}>
                    <h1 className='text-[30px] text-[#0028FC] font-bold text-center'>Skills</h1>
                    <div>
                        <div className='text-white flex justify-between mx-[10rem] mt-[5rem] md:mx-[2rem] md:mt-[2rem] sm:mx-[2rem] sm:mt-[2rem]'>
                            <div className='leading-[30px] md:w-[2rem] sm:w-[2rem]'>
                                <a href="https://g.co/kgs/jdNuaK">
                                    <img src={html} alt="/html" />
                                    <p className='text-center md:text-[0.8rem] sm:text-[0.8rem]'> HTML </p>
                                </a>
                            </div>
                            <div className='leading-[30px] md:w-[2rem] sm:w-[2rem]'>
                                <a href="https://g.co/kgs/fHzwcJ">
                                    <img src={css} alt="/css" />
                                    <p className='text-center md:text-[0.8rem] sm:text-[0.8rem]'> CSS </p>
                                </a>                                
                            </div>
                            <div className='leading-[30px] md:w-[2rem] sm:w-[2rem]'>
                                <a href="https://g.co/kgs/aibHTQ">
                                    <img src={js} alt="/Js" />
                                    <p className='text-center md:text-[0.8rem] md:ml-[-13px] sm:text-[0.8rem] sm:ml-[-13px]'> JAVASCRIPT </p>
                                </a>                                
                            </div>
                            <div className='leading-[30px] md:w-[2rem] sm:w-[2rem]'>
                                <a href="https://g.co/kgs/C2GZ9U">
                                    <img src={bootstrap} alt="/bootstrap" />
                                    <p className='text-center md:text-[0.8rem] md:ml-[-13px] sm:text-[0.8rem] sm:ml-[-13px]'> BOOTSTRAP </p>
                                </a>                                
                            </div>
                        </div>
                        <div className='text-white flex justify-between mx-[10rem] mt-[2rem] md:mx-[2rem] sm:mx-[2rem]'>
                            <div className='leading-[30px] md:w-[2rem] sm:w-[2rem]'>
                                <a href="https://g.co/kgs/yj3JXV">
                                    <img src={github} alt="/github" />
                                    <p className='text-center md:text-[0.8rem] sm:text-[0.8rem]'> GITHUB </p>
                                </a>                                
                            </div>
                            <div className='leading-[30px] md:w-[2rem] sm:w-[2rem]'>
                                <a href="https://g.co/kgs/mQFrMw">
                                    <img src={api} alt="/api" />
                                    <p className='text-center md:text-[0.8rem] sm:text-[0.8rem]'> API </p>
                                </a>                                
                            </div>
                            <div className='leading-[30px] md:w-[2rem] sm:w-[2rem]'>
                                <a href="https://g.co/kgs/tmmUJ8">
                                    <img src={react} alt="/react" />
                                    <p className='text-center md:text-[0.8rem] sm:text-[0.8rem]'> REACT </p>
                                </a>                                
                            </div>
                            <div className='leading-[30px] md:w-[3rem] sm:w-[2rem]'>
                                <a href="https://g.co/kgs/E4vLtL">
                                    <img src={tailwind} alt="/tailwind" />
                                    <p className='text-center md:text-[0.8rem] md:ml-[-3px] sm:text-[0.8rem] sm:ml-[-3px]'> TAILWIND </p>
                                </a>                                
                            </div>
                        </div>
                        <div className='text-white flex mx-[9rem] mt-[3rem] gap-[15.5rem] md:mx-[2rem] md:gap-[2.4rem] sm:mx-[2rem] sm:gap-[2.4rem]'>
                            <div className='leading-[30px] md:w-[3rem] sm:w-[3rem]'>
                                <a href="https://g.co/kgs/wWSx7g">
                                    <img src={mongodb} alt="/mongodb" />
                                    <p className='text-center md:text-[0.8rem] sm:text-[0.8rem]'> MONGO DB </p>
                                </a>                                
                            </div>
                            <div className='leading-[30px] md:w-[3rem] sm:w-[3rem]'>
                                <a href="https://g.co/kgs/sry5gr">
                                    <img src={mysql} alt="/mysql" />
                                    <p className='text-center md:text-[0.8rem] sm:text-[0.8rem]'> MYSQL </p>
                                </a>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-[10rem]  sm:py-[7rem]' ref={sixth}>
                    <h1 className='text-white font-bold text-center text-[30px]'>Contact</h1>
                    <div className='flex justify-around py-[7rem] bg-[#4B3FC5] rounded-t-3xl md:flex-col md:py-[2rem] md:items-center sm:flex-col sm:py-[2rem] sm:items-center'>
                        <div className='md:hidden sm:hidden'>
                            <h2 className='text-white font-semibold text-[35px] md:hidden'>Drop a Message</h2>
                            <p className='text-white text-[18px] w-[31rem]'>
                                Love to hear from you! <br/> Please feel free to drop us a message
                                {/* elit. Viverra sem pellentesque sagittis, massa
                                hendrerit..orem ipsum dolor sit amet, consectetur
                                adipiscing elit. Viverra sem pellentesque sagittis */}
                            </p>
                            <div className='text-white mt-[5rem] flex flex-col'>
                                <button>
                                    <a className='flex gap-2 items-center' href="https://www.instagram.com/m.v.j.i.b_/">
                                        <img className='w-[4rem]' src={instagram2} alt="" />
                                        <p>Mujeeb Azeez</p>
                                    </a>                                     
                                </button>                                
                                <button className='flex gap-2 items-center ml-[0.5rem]'>                                    
                                    <img className='w-[3rem]' src={mail2} alt="" />
                                    <p>eniola154956@gmail.com</p>                                                                        
                                </button>
                                <button>
                                    <a className='flex gap-2 items-center' href="https://www.linkedin.com/in/mujib-azeez-552893288/">
                                        <img className='w-[4rem]' src={linkedIn2} alt="" />
                                        <p>Mujeeb Azeez</p>
                                    </a>                                     
                                </button>
                            </div>                            
                        </div>
                        <div className='border bg-[#4D66CB] rounded-md p-[2rem] w-[30rem] md:w-[20rem] sm:w-[20rem]'>
                            <form onSubmit={sendEmail} ref={form} action="">
                                <div className='flex'>
                                    <input type="text"  name='name'   className='w-[40rem] p-2 rounded-md text-white bg-[#101630]' placeholder='NAME'/>                                    
                                </div>
                                <div className='mt-[1rem] flex '>
                                    <input type="text" name='email'  className='w-[40rem] p-2 rounded-md text-white bg-[#101630]' placeholder='EMAIL'/>
                                </div>     
                                <div className='mt-[1rem] flex '>
                                    <input type="text" name='subject'  className='w-[40rem] p-2 rounded-md text-white bg-[#101630]' placeholder='SUBJECT'/>
                                </div>                            
                                <div className='mt-[1rem] flex '> 
                                    <textarea className='p-2 bg-[#101630] rounded-md text-white'  name='message'  id="" cols="60" rows="5" placeholder='MESSAGE'></textarea>
                                </div>                                          
                                <div className='py-[1rem] text-left'>                                    
                                    <button type='submit' className='bg-[#101630] text-white py-[0.4rem] px-[2rem] rounded-md'>
                                        SEND
                                    </button>                                                                        
                                </div>
                                
                            </form>                            
                        </div>
                        <div className= 'lg:hidden text-white flex flex-row mt-[2rem] gap-[2rem]'>
                            <button>
                                <a className='flex items-center w-[2rem]' href="https://www.instagram.com/m.v.j.i.b_/">
                                    <img className='' src={instagram2} alt="" />                                    
                                </a>                                     
                            </button>                                
                            <button>
                                <a className='flex items-center w-[2rem] ' href="https://mail.google.com/mail/u/0/#inbox?compose=CSkGSFfgQRQkTBBTdpdPrxbrVzCDgvlkBXQpjwSrVXSxcTdcbHfdHLtKWBmnbHMPjFHmTTfXhlKPnCCjJFkqkcRXbRvQwQmbKVFRXhqFgzhhJPJTpHwvqMhvGgfkFCGnBNgBmRqsxWJMcPVNhMBFPpsbRbhJhHmFxnJ">
                                    <img className='' src={mail2} alt="" />                                   
                                </a>                                     
                            </button>
                            <button>
                                <a className='flex items-center w-[2rem]' href="https://www.linkedin.com/in/mujib-azeez-552893288/">
                                    <img className='' src={linkedIn2} alt="" />                                    
                                </a>                                     
                            </button>
                        </div>
                    </div>
                    
                </div>
            </body>

            

  

                                              
        </body>
        
    )
}

export default Home