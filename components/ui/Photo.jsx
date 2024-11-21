"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return <div className="w-full h-full relative">
    <motion.div initial={{ opacity: 0 }}
    animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" }
    }}>
        <div className="w-[298px] h-[298px] sm:w-[498px] sm:h-[498px] xl:w-[498px] xl:h-[498px]">
            <Image 
            src = "/FA-2.svg" 
            priority 
            quality = {100} 
            fill 
            alt = "" 
            className = "object-contain" />
        </div>
    </motion.div>
  </div>;
};

export default Photo;