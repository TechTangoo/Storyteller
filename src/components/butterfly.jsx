import React from "react";
import Lottie from 'lottie-react';
import butterfly from "../img/butterfly.json";
import { motion } from "framer-motion";

const Butterfly = () => {
    return (
        <motion.div
            className="a"
            style={{ position: "absolute", zIndex: 40 }}
            animate={{
                top: ["0%", "100%", "100%", "0%"], // Animation from top to bottom and back
                left: ["0%", "0%", "100%", "100%"], // Animation from left to right and back // Looping animation
            }}
            transition={{
                duration: 10, ease: "linear", loop: Infinity
            }}
        >
            <div className='absolute w-full'>
                <Lottie animationData={butterfly} loop={true} />
            </div>
        </motion.div>
    );
};

export default Butterfly;