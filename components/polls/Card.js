import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Card = (props) => {
  const title = props.title;
  const emoji = props.emoji;
  const text = props.text;
  const type = props.type;
  const [color, setColor] = useState(props.color);

  useEffect(() => {
    setColor(props.color);
  });

  const transition = {
    duration: 1.15,
    type: "spring",
    stiffness: 700,
    damping: 20,
  };

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, shadow: "30px" }}
      whileTap={{ scale: 0.95 }}
      transition={transition}
      className={
        "transition-all select-none transform cursor-pointer shadow-xl rounded-2xl m-10 bg-" +
        color +
        "-400 w-64 h-auto grid grid-rows-2 grid-cols-1 grid-flow-col-dense shadow-inner"
      }
    >
      <div className="row-start-1 rounded-t-2xl flex text-center items-center justify-center">
        <span className="text-6xl ">{emoji}</span>
      </div>
      <div className={"p-5 low row-start-2 bg-" + color + "-500 rounded-b-2xl"}>
        <p
          className={
            "bg-white rounded-full shadow-xl text-" +
            color +
            "-500 px-2 py-1 w-24 text-center transform absolute -translate-y-8 uppercase font-bold text-sm"
          }
        >
          {type}
        </p>
        <h1 className="mt-1 text-4xl capitalize font-extrabold text-white">
          {title}
        </h1>
        <p className="-translate-y-5 text-sm text-gray-50">{text}</p>
      </div>
    </motion.div>
  );
};

export default Card;
