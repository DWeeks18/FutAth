"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const testimonials = [
  {
    num: "01",
    title: "Alex Carter - Youtube Personality",
    description:
      "Partnering with Future Athlete for this video has been a game-changer for understanding my football performance. Their detailed analysis showed me exactly where I excelled and what needed work, giving me a much clearer picture of my strengths and weaknesses. The personalised insights and targeted training plans they shared made a noticeable difference, and I have already seen improvements in my stamina, ball control, and decision-making on the pitch. I feel more confident every time I play now, and its all thanks to Future Athletes expertise. Huge shoutout to them for helping me take my game to the next level.",
    href: "",
    image: "/ACarter.png", // Update to your image path
  },
  {
    num: "02",
    title: "Jorginho - Arsenal FC and Italy International",
    description:
      "Future Athletes approach to performance analysis is truly next level. Their detailed breakdown of my metrics gave me a deeper understanding of my strengths and areas to improve, even at the professional level. The targeted training recommendations were spot on and helped refine key aspects of my game, like positioning and passing accuracy. It is rare to find such a personalized and data-driven program I would recommend Future Athlete to any player serious about improving their game.",
    href: "",
    image: "/Jorginho-2.jpg",
  },
  {
    num: "03",
    title: "Northolt Town Squad Development",
    description:
      "Future Athletes squad analysis and tailored training services have been a transformative asset for Northolt Town. Their detailed evaluations provided us with a clear picture of each players performance, allowing us to identify team-wide strengths and address critical areas for improvement. The customized training plans were incredibly effective, leading to noticeable improvements in fitness, coordination, and overall gameplay. Thanks to Future Athlete, our squad is more cohesive, better prepared, and performing at a higher level than ever before.",
    href: "",
    image: "/NTBadgeB&R.png",
  },
  {
    num: "04",
    title: "Coaching Dept. - Stowford United FC",
    description:
      "Working with Future Athlete has been a fantastic experience for us here at Stowford. Their data-driven analysis of both match and training sessions gave us clear insights into our strengths and weaknesses, allowing us to effectively implement changes for improvement and player development. The tailored training plans have made our preparation more efficient and effective, leading to noticeable progress across the team. We are extremely satisfied with the results and would highly recommend their services.",
    href: "",
    image: "/Coaches.png",
  },
];

const Testimonials = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
        >
          {testimonials.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center gap-6 group`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center">
                {service.image && (
                  <Image
                    src={service.image}
                    width={500} // Fixed width
                    height={500} // Fixed height
                    alt={service.title}
                    className="rounded-lg object-cover"
                  />
                )}
              </div>
              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col gap-4 flex-grow">
                <h2 className="text-2xl font-primary font-extrabold text-primary underline underline-offset-8">
                  {service.title}
                </h2>
                {/* Description with Expandable Option */}
                <p className = "text-accent roboto-font">
                  {expanded[index]
                    ? service.description
                    : `${service.description.slice(0, 150)}...`}{" "}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-priamry hover:underline ml-2"
                  >
                    {expanded[index] ? "Show Less" : "Read More"}
                  </button>
                </p>
                {service.href && (
                  <Link href={service.href}>
                    <a className="text-[primary] hover:underline">Learn More</a>
                  </Link>
                )}
                <div className="border-b border-white/40 w-full"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;