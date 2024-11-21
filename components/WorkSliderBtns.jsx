"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      {/* Left Button */}
      <button
        className={btnStyles}
        onClick={() => swiper.slidePrev()} // Attach directly to the left button
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>

      {/* Right Button */}
      <button
        className={btnStyles}
        onClick={() => swiper.slideNext()} // Attach directly to the right button
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;