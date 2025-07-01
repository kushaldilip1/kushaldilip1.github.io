"use client";

import { motion } from "framer-motion";
import Image from "next/image"; 

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div 
            initial= {{ opacity: 0}}
            animate = {{
                opacity: 1,
                transition: {delay: 1, duration: 0.4, ease: 'easeIn'},
            }}
            
            >
                {/*     IMAGE     */}
                <motion.div
                initial= {{ opacity: 0}}
                animate = {{
                    opacity: 1,
                    transition: {delay: 0.5, duration: 0.4, ease: 'easeInOut'},
                }} 
                className="w-[228px] h-[228px] md:w-[358px] md:h-[358px] ml-20 mb-4">
                    <Image
                    src="/assets/portrait_correct_one.png"
                    priority quality={100}
                    fill alt="" className="object-contain"
                    />
                </motion.div>



                {/*     CIRCLE     */}
            </motion.div>
        </div>
    );
};

export default Photo;