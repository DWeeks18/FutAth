"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

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
import { useState } from "react";
import { sendEmail } from "@/lib/contact";

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState ('');
    const [email, setEmail] = useState ('');
    const [message, setMessage] = useState ('');
    const [selectedService, setSelectedService] = useState ('');

    const onSubmit = async (e) => {
        e.preventDefault(); 
        
       await sendEmail();
       console.log("FUCKING SHIT CODE MATE, it worked though ")
        
        // Reset form input
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setSelectedService("");
    }

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
                <form className = "flex flex-col gap-6 p-10 bg-[#00524E] rounded-xl" onSubmit={onSubmit}>
                    <h3 className = "text-4xl text-white underline underline-offset-4 font-bold">Get in touch with us</h3>
                    <p className = "text-white roboto-font">For any enquiries about our products and services please fill out the form below and we will get back to you as soon as possible.</p>
                    {/* Input */}
                    <div className = "grid grid-cols-1 md:grid-cols-2 gap-6 roboto-font text-accent">
                        <Input type = "text" placeholder = "First Name *" value = {firstName} onChange = {(e) => setFirstName(e.target.value)} required />
                        <Input type = "text" placeholder = "Last Name *" value = {lastName} onChange = {(e) => setLastName(e.target.value)} required /> 
                        <Input type = "email" placeholder = "Email *" value = {email} onChange = {(e) => setEmail(e.target.value)} required />
                        <Input type = "phone" placeholder = "Phone Number" />
                    </div>
                    {/* select */}
                    <Select onValueChange={setSelectedService}>
                        <SelectTrigger className = "w-full roboto-font text-accent">
                            <SelectValue placeholder = "Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup className = "roboto-font">
                                <SelectLabel>Select a service</SelectLabel>
                                <SelectItem value = "Player_Analysis">Individual Player Performance Analysis</SelectItem>
                                <SelectItem value = "Team_Analyis">Team Performance Analysis</SelectItem>
                                <SelectItem value = "Player_Dev_Progs">Player Development Programs</SelectItem>
                                <SelectItem value = "Coaching_Consult">Coaching Consutations</SelectItem>
                                <SelectItem value = "Other">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {/* text area */}
                    <Textarea className = "text-accent h-[200px] roboto-font" placeholder = "Type your message here" value = {message} onChange = {(e) => setMessage(e.target.value)} required />
                    {/* Button */}
                    <Button size = "md" className = "max-w-40 bg-[#82A3A1] hover:bg-accent hover:text-primary" type = "submit">
                        Send message
                    </Button>
                    </form>
            </div>
            {/* info */}
            <div className = "flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className = "flex flex-col gap-10">
                    {info.map((item, index)=> {
                        return <li key = {index} className = "flex items-center gap-6">
                            <div className = "w-[52px] h-[52px] xl:w[72px] xl:h-[72px] bg-accent text-primary rounded-xl flex items-center justify-center">
                                <div className = "text-[28px]">{item.icon}</div>
                            </div>
                            <div className = "flex-1">
                                <p className = "text-white">{item.title}</p>
                                <h3 className = "text-xl text-accent">{item.description}</h3>
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