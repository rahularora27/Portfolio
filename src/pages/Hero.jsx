"use client";
import React from "react";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";

const commonClassname = 'dark:text-custom-icon-hover'

const words = [
  {
    text: "Hey!",
    className: [commonClassname],
  },
  {
    text: "I",
    className: [commonClassname],
  },
  {
    text: "am",
    className: [commonClassname],
  },
  {
    text: "Rahul.",
    className: [commonClassname],
  },
];

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffectSmooth words={words} />
    </div>
  )
}

export default Hero