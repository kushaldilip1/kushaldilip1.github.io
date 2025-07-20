"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from "@/components/ui/tooltip";


import Link from "next/link";
import Image from "next/image";
import ProjectSliderBtns from "@/components/ProjectSliderBtns ";

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'University main page',
        description: 'A university page created with the objective of module selection tool. As it was a group project, I was assigned the design the user interface of the website. For more information, please visit the website ...',
        stack: [{name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'}],
        image: "/assets/work/School_UI.png",
        live: "",
        github: "",
    },
    {
        num: '02',
        category: 'Full Stack',
        title: 'Get-Veggie food ordering platform',
        description: 'A food ordering website called as Get-Veggie. A final year project developed with the intention of promoting fresh deliverables out of the local farmers as well as promoting the local farmers for a positive exposition to the mainstream. Through this website, the customers are well informed about the origin of the deliverables and a subscription-enabled chatbot is in place to aid further queries. For more information, please visit the website ...',
        stack: [{name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'}, {name: 'PHP'}, {name: 'XAMPP'}, {name: 'MySQL'}],
        image: "/assets/work/Get_Veggie.png",
        live: "",
        github: "",
    },
    {
        num: '03',
        category: 'Game',
        title: 'Pacman Game',
        description: 'A Pacman Game developed with the objective of learning game mechanisms and for further practice and knowledge expansion. An attempt to bring the retro arcade classic Pacman to life. It is open for feedback, so do not hesitate to contact me.',
        stack: [{name: 'HTML'}, {name: 'JavaScript'}],
        image: "/assets/work/Pacman.png",
        live: "http://kushaldilip1.github.io/Pacman_Game",
        github: "https://github.com/kushaldilip1/Pacman_Game",
    },
];




const Project = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        //GET CURRENT SLIDE INDEX
        const currentIndex = swiper.activeIndex;
        //UPDATE PROJECT STATE BASED ON CURRENT SLIDE INDEX
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section 
        initial = {{opacity: 0}} 
        animate = {{
            opacity: 1,
            transition: {delay: 1,
                duration:0.4,
                ease: 'easeInOut'
            }
        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 md:px-0"
        >
            <div className="container mx-auto mt-[-2rem]">
                <div className="flex flex-col md:flex-row md:gap-[30px]">
                    <div className="w-full md:w-[50%] 
                    md:h-[460px] flex flex-col md:justify-between order-2 md:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* OULTINE NUM */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            {/* PROJECT TITLE */}
                            <h1 className="text-[28px] md:text-[65px] leading-[1.1] font-semibold capitalize text-white hover:text-cyan-200 transition-all">
                                {project.title}
                            </h1>

                            {/* PROJECT CATEGORY */}
                            <h2 className="text-[26px] md:text-[48px] leading-[1.1] font-semibold capitalize text-white/60 hover:text-cyan-200 transition-all">
                                {project.category}
                            </h2>

                            {/* PROJECT DESCRIPTION */}
                            <p className="text-white/60 w-[20rem] md:w-full leading-[1.1]">
                                {project.description}
                            </p>

                            {/* STACK */}
                            <ul className=" md:flex  gap-2">
                                {project.stack.map((item, num) => {
                                    return (
                                        <li key={num} className="text-xl text-cyan-200">
                                            {item.name}
                                            {num !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* BORDER */}
                            <div className="border border-white/20"></div>
                            
                            {/* Buttons and tooltip */}
                            <div className="flex items-center gap-4 justify-end mt-[-1rem]">
                                {/* Live Project Button */}
                                <Link href={project.live} target="_blank">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/50 flex justify-center items-center group">
                                                <BsArrowUpRight  className=" mt-[12px] text-3xl hover:text-cyan-200 cursor-pointer"/>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white text-black">
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* GitHub Project Button */}
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                                            bg-white/50 flex justify-center items-center group">
                                                <BsGithub  className="text-3xl hover:text-cyan-200 cursor-pointer"/>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white text-black">
                                                <p>GitHub Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%]">
                        <Swiper spaceBetween={30} 
                        slidesPerView={1} 
                        className="md:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, num) => {
                                return (
                                    <SwiperSlide key={num} className="w-full">
                                        <div className="h-[460px] w-[760px] relative group flex justify-center
                                        items-center bg-pink-50/20">
                                            {/* OVERLAY */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10">
                                                {/* IMAGE */}
                                                <div className="w-full h-full">
                                                    <Image  src={project.image} fill className="object-fill" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}

                            {/* SLIDER BUTTONS */}
                            <ProjectSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] md:bottom-0 z-20 w-full justify-between md:w-max md:justify-none" btnStyles=" bg-cyan-200 hover:bg-cyan-100  text-black text-[33px] w-[44] h-[44] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
};

export default Project;