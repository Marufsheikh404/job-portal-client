import React from 'react';
import { easeInOut, motion } from "motion/react"
import dev1 from '../assets/img/dev-1.webp';
import dev2 from '../assets/img/dev-2.webp';
const Banner = () => {
    return (
        <motion.div
        animate={{top:20}}
        transition={{duration:8, }}
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-centern flex-1">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"><span className='text-green-500'>2,568</span> job available can choose your drem job</h1>
                    <p className="mb-5 font-semibold leading-[1.3]">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className='flex gap-3'>
                        <div className='grid grid-cols-3 gap-4 '>
                            <input
                                className="flex-1 py-2 px-3 rounded bg-slate-100 hover:bg-slate-200 focus:ring-1 focus:ring-purple-400 focus:cursor-pointer outline-none"
                                placeholder="Job title or keywords"
                                type="text"
                            />
                            <input
                                className="flex-1 py-2 px-3 rounded bg-slate-100 hover:bg-slate-200 focus:ring-1 focus:ring-purple-400 focus:cursor-pointer outline-none"
                                placeholder="Choose City"
                                type="text"
                            /><input
                                className="flex-1 py-2 px-3 rounded bg-slate-100 hover:bg-slate-200 focus:ring-1 focus:ring-purple-400 focus:cursor-pointer outline-none"
                                placeholder="Category"
                                type="text"
                            />
                        </div>
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
                <div className=' flex flex-col gap-3 flex-1 '>
                    <motion.img
                    animate={{y:[50 , 0 ,50] }}
                    transition={{duration: 6, ease: "easeInOut", repeat: Infinity}}
                     className='w-96 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400' src={dev1} alt="celebrate" />
                    <motion.img 
                    animate = {{ x: [60 , 0, 60]}}
                    transition={{duration: 6, ease:"easeInOut", delay:1,repeat: Infinity}}
                    className='w-96 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400' src={dev2} alt="celebration" />
                </div>
            </div>
        </motion.div>
    );
};

export default Banner;