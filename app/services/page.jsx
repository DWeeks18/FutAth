"use client";


import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
      num: '01',
      title: "Individual Player Performance Analysis",
      description: "Our analysis is tailored to each individual athlete, providing a detailed breakdown of their performance and areas for improvement. This personalized approach ensures athletes receive targeted feedback and strategies to enhance their skills.",
      href: "",
    },
    {
      num: '02',
      title: "Team Performance Analysis",
      description: "We analyse team performance to identify strengths and weaknesses, providing insights into tactical and strategic improvements. This comprehensive approach helps teams optimize performance and achieve success for the team as a collective.",
      href: ""
    },
    {
      num: '03',
      title: "Player Development Programs",
      description: "We offer tailored development programs to help athletes improve their skills and achieve their goals. These programs are designed to meet the specific needs of each athlete, providing personalized training and support.",
      href: ""
    },
    {
      num: '04',
      title: "Coaching Consultations",
      description: "We provide expert coaching consultations to help coaches improve their strategies and techniques. Our experienced coaches offer personalized feedback and training plans to enhance coaching effectiveness.",
      href: ""
    },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className = "min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className = "container mx-auto">
      <motion.div
      initial = {{opacity: 0}}
      animate = {{
        opacity: 1,
      transition: {delay: 1, duration: 0.5, ease: "easeIn"},
      }}
      className = "grid grid-cols-1 md:grid-cols-2 gap-[60px] items-stretch"
      >
        {services.map((service, index) => {
          return (
          <div key = {index} className = "flex-1 flex flex-col justify-center gap-6 group h-full text-accent">
            {/* top */}
            <div>
              <div>{service.num}</div>
            <Link href={service.href}>
            <BsArrowDownRight/>
            </Link>
          </div>
          {/* title */}
          <h2 className = "font-primary text-xl font-extrabold underline underline-offset-8 text-primary">
            {service.title}
            </h2>
          {/* description */}
          <p className = "roboto-font font-[700] text-accent">{service.description}</p>
          {/* border */}
          <div className = "border-b border-white/40 w-full"></div>
          </div>
        );
        })}
      </motion.div>
    </div>
    </section>
  );
};

export default Services