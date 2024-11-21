"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {
Tooltip,
TooltipContent,
TooltipProvider,
TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const work = [
  {
    num: "01",
    category: "Player Analysis (Jorginho)",
    title: "Individual Player Training Analysis",
    description: "This project provides an in-depth analysis of Jorginhos training performance, using six months of meticulously collected and cleaned data. By comparing Jorginhos key metrics to peers in the same age group, we identified areas where they excelled and pinpointed opportunities for improvement. Trends in Jorginhos performance were tracked over time to ensure targeted progress, and insights were visualized to highlight both standout achievements and consistent performance patterns.",
    image: "/Jorginho.jpg"
  },
  {
    num: "02",
    category: "Team Analysis (Northolt Town FC Womens)",
    title: "Team Training Analysis",
    description: "This project presents a comprehensive analysis of Northolt Town FCs womens squad training performance over six months, using a range of metrics that were meticulously collected, cleaned, and visualized. By benchmarking each player against team, league and age-group standards, we identified both individual and team-wide strengths and highlighted areas needing improvement. Tracking trends over time allowed us to monitor progress and ensure that targeted improvements were achieved across the team.",
    image: "/TeamTraining.jpg"
  },
  {
    num: "03",
    category: "Tailored Training Program",
    title: "",
    description: "This project involved designing a targeted training program focused on improving the underperforming metrics identified in our initial player analysis for Northolt Town FC womens squad. Using insights from performance data, we created a customized plan that directly addressed key areas needing development. Progress was monitored over time to ensure measurable improvements, allowing us to refine training strategies and maximize the programs effectiveness in enhancing overall performance.",
    image: "/Training.jpg"
  },
  {
    num: "04",
    category: "Coaching consultation (Stowford United)",
    title: "",
    description: "Future Athlete partnered with Stowford United on a coaching consultation project aimed at enhancing their training and development strategies through data-driven insights. By analyzing detailed performance data from matches and training sessions, Future Athlete helped the coaching department identify key areas for improvement and opportunities to optimize player development. This collaboration led to the implementation of tailored, data-backed training plans, significantly improving efficiency in session planning and decision-making. The result was a more focused approach to player progress and enhanced overall team performance.",
    image: "/Stowford-2.svg"
  }
];

const Projects = () => {
  const [Selectedwork, setSelectedwork] = useState(work[0]);

  const handleSlideChange = (Swiper) => {
    // get current slide index
    const currentIndex = Swiper.activeIndex;
    // update project state based on current slide index
    setSelectedwork(work[currentIndex]);
  };

  return ( 
  <motion.section 
  initial = {{opacity: 0}} 
  animate = {{opacity: 1, transition: {delay: 1, duration: 0.4, ease: "easeIn"}
}}
  className = "min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
  >
    <div className = "container mx-auto">
      <div className = "flex flex-col xl:flex-row xl:gap-[30px]">
        <div className = "w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className = "flex flex-col gap-[15px] h-[50%]">
            {/* outline num */}
            <div className = "text-4xl leading-none font-semibold text-white">
              {Selectedwork.num}
            </div>
            {/* Project Cat */}
            <h2 className = "text-[42px] font-extrabold leading-none text-[#03635D] group-hover:text-primary transition-all duration-500 capitalize">{Selectedwork.category}
            </h2>
            {/* Project Description */}
            <p className = "text-white font-semibold">{Selectedwork.description}</p>
            {/* border */}
            <div className = "border border-white/40"></div>
          </div>
          </div>
        <div className = "w-full xl:w-[50%]">
          <Swiper spaceBetween = {30}
          slidesPerView = {1}
          className = "xl:h-[520px] mb-12"
          onSlideChange = {handleSlideChange}>
            {work.map((work, index) => {
              return <SwiperSlide key = {index} className = "w-full">
                <div className = "h-[460px] relative group flex justify-center items-center bg-pink-50">
                  {/* overlay */}
                  <div className = "absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 border-4 border-[#03635D]"></div>
                  {/* Image */}
                  <div className = "relative w-full h-full">
                    <Image 
                    src = {work.image} 
                    fill 
                    className = "object-cover"
                    alt = ""/>
                  </div>
                </div>
              </SwiperSlide>
            })}
            {/* slider buttons */}
            <WorkSliderBtns containerStyles= "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles = "bg-accent hover:bg-accent-hover text-black text-[22px] w-[44px] flex justify-center items-center transition-all" />
          </Swiper>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Projects;
