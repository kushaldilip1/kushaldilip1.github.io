import { motion } from "framer-motion";

// Variants
const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// Calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 5; //number of steps defined here
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>
            {/* render 6 motion divs, each representing a step of the stairs
            Each div will have the same animation defined by the  stairsAnimation object.
            The delay for each div is calculated dynamically based on its reversed index.
            Creating a staggered effect with decreasing delay for each subsequent step.
            */}
            {[...Array(6)].map((_, index)=> {
                return (
                    <motion.div key={index} 
                    variants={stairAnimation} 
                    initial = "initial"
                    animate = "animate"
                    exit = "exit"
                    transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: reverseIndex(index) * 0.07,
                    }}
                    className="h-full w-full
                    bg-cyan-100 relative" /> 
                );
            })}
            
        </>
    );
};

export default Stairs;