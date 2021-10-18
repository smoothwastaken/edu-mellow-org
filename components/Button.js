import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Button = (props) => {
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 20,
      }}
      className={
        "p-5 bg-" +
        randomColor() +
        "-500 text-white rounded-2xl w-56 text-center items-center text-2xl font-semibold cursor-pointer select-none"
      }
    >
      {props.children}
    </motion.div>
  );
};

export default Button;
