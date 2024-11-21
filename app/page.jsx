import React from "react";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";

const Home = () => {
  return (
    <section className="h-full">
      <div className = "container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* photo */}
        <div>
          <Photo />
        </div>
          {/* text */}
          <div className = "text-center xl:text-left">
            <span className = "h3">Welcome to Future Athlete</span>
            <h1 className = "h1 mb-6 text-[#03635D] font-semibold">
             Where data meets performance to unlock your full athletic potential
            </h1>
            <p className = "mb-9 text-white/88">Working closely with you or your team we strive to aid development in your sporting field by applying in-depth analysis to detailed performance metrics allowing us to tailor programs that will increase efficency across multiple target areas.
            </p>
            {/* button and socials */}
            <div className = "flex flex-col xl:flex-row items-center gap-8">
              <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 text-white hover:text-white"
              >
                <span>Download App</span>
                <FiDownload className ="text-xl" />
              </Button>
              <div className = "mb-8 xl:mb-0">
                <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-white text-base hover:bg-[#00524E] hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Home;