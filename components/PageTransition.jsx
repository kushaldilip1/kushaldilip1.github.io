"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


const PageTransition = ({children}) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>

        <div key={pathname}>
            <motion.div 
                initial ={{opacity: 1}} 
                animate ={{opacity: 0, 
                    transition:{delay: 0.6, duration: 0.4, ease: 'easeInOut'},
                }}
                className="transition h-screen w-screen fixed bg-black top-0 pointer-events-none"
            />
            {children}
        </div>


        
    </AnimatePresence>
    );
};

export default PageTransition;