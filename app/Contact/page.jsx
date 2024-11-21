"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+44) 234 567 8901", 
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "Daniel@FutureAthlete.co.uk"
    },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
  <motion.section 
  initial ={{ opacity: 0}}
  animate={{
    opacity: 1,
    transition: { delay: 1, duration: 0.4, ease: "easeIn"},
  }}
  className = "py-6"
  >
    <div className = "container mx-auto">
        <div className = "flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className = "xl:w-[54%] order-2 xl:order-none">
                <form className = "flex flex-col gap-6 p-10 bg-[#00524E] rounded-xl">
                    <h3 className = "text-4xl text-white underline underline-offset-4">Get in touch with us</h3>
                    <p className = "text-white">For any enquiries about our products and services please fill out the form below and we will get back to you as soon as possible.</p>
                    {/* Input */}
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input type = "text" placeholder = "First Name" />
                        <Input type = "text" placeholder = "Last Name" />
                        <Input type = "email" placeholder = "Email" />
                        <Input type = "phone" placeholder = "Phone Number" />
                    </div>
                    {/* select */}
                    <Select>
                        <SelectTrigger className = "w-full">
                            <SelectValue placeholder = "Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select a service</SelectLabel>
                                <SelectItem value = "ppa">Individual Player Performance Analysis</SelectItem>
                                <SelectItem value = "tpa">Team Performance Analysis</SelectItem>
                                <SelectItem value = "pdp">Player Development Programs</SelectItem>
                                <SelectItem value = "cc">Coaching Consutations</SelectItem>
                                <SelectItem value = "oth">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {/* textoreo */}
                    <Textarea className = "h-[200px]" placeholder = "Type your message here" />
                    {/* Button */}
                    <Button size = "md" className = "max-w-40 bg-[#82A3A1] hover:text-[#03635D]">
                        Send message
                    </Button>
                    </form>
            </div>
            {/* info */}
            <div className = "flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className = "flex flex-col gap-10">
                    {info.map((item, index)=> {
                        return <li key = {index} className = "flex items-center gap-6">
                            <div className = "w-[52px] h-[52px] xl:w[72px] xl:h-[72px] bg-white text-accent rounded-xl flex items-center justify-center">
                                <div className = "text-[28px]">{item.icon}</div>
                            </div>
                            <div className = "flex-1">
                                <p className = "text-white">{item.title}</p>
                                <h3 className = "text-xl">{item.description}</h3>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </div>
    </motion.section>
    );
};

export default Contact