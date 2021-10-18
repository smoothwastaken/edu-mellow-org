import React from "react";
import Image from "next/image";
import Link from "next/link";
import exploreimg from "../public/team.svg";
import { motion } from "framer-motion";

const Hero = () => {
  function randomGradient() {
    const gradients = [
      "from-red-500 to-yellow-400",
      "from-blue-500 to-purple-500",
      "from-green-500 to-yellow-300",
      "from-pink-500 to-red-500",
    ];

    const gradient =
      gradients[Math.floor(Math.random() * gradients.length)].toString();
    return gradient;
  }

  function randomColor() {
    const colors = [
      "red",
      "yellow",
      "green",
      "blue",
      "purple",
      "indigo",
      "pink",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)].toString();
    return color;
  }
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      className={
        "grid grid-cols-2 select-none items-center text-center text-white grid-rows-1 text-transparent bg-clip-content bg-gradient-to-br " +
        randomGradient() +
        " h-auto m-14 rounded-xl shadow-xl"
      }
    >
      <div className="grid-1 p-10 py-15">
        <h1 className="text-7xl font-semibold text-white">
          Bienvenue sur
          <br />
          <span className="font-extrabold px-5">
            mell
            <span
              className={
                "text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-600"
              }
            >
              o
            </span>
            w
          </span>
        </h1>
        <p className="text-white mt-5">
          Un endroit sûr où étudier <br /> n'a jamais été aussi simple!
        </p>

        <Link href="/questions">
          <div className="mt-10 cursor-pointer">
            <span
              className={
                "px-4 py-3 text-xl bg-transparent border-2 rounded-full text-white transition-all hover:bg-white hover:text-" +
                randomColor() +
                "-600 hover:border-opacity-0 hover:shadow-xl"
              }
            >
              Découvrir !
            </span>
          </div>
        </Link>
      </div>
      <div className="grid-2 p-10">
        <Image className="" src={exploreimg} />
      </div>
    </motion.div>
  );
};

export default Hero;
