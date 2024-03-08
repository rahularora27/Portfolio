import React from "react";
import { TypewriterEffectSmooth } from "../components/typewriter-effect";

const commonClassname = 'dark:text-custom-1 dark:font-Playfair'

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

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TypewriterEffectSmooth words={words} />
    </div>
  )
}

export default Home