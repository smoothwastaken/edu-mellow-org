import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Card = (props) => {
  const pp = props.pp;
  const name = props.name;
  const role = props.role;

  const [color, setColor] = useState(props.color);

  const transition = {
    duration: 1.15,
    type: "spring",
    stiffness: 700,
    damping: 20,
  };

  const generateImage = () => {
    return (
      <Image
        src={"https://picsum.photos/200/200"}
        width="200"
        height="200"
        className={"m-2 rounded-full"}
      />
    );
  };

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={transition}
      className={
        "bg-gradient-to-tl from-" +
        color +
        "-500 to-" +
        color +
        "-400 shadow-xl text-center rounded-3xl p-5 transition-all transform hover:scale-110"
      }
    >
      {generateImage()}
      <div className="flex justify-center">
        <div className="bg-white py-2 mt-3 w-52 rounded-full">
          <h1
            className={
              "text-xl mt-2 text-transparent font-bold bg-clip-text bg-gradient-to-br from-" +
              color +
              "-600 to-" +
              color +
              "-300"
            }
          >
            {name}
          </h1>
          <h2 className="text-gray-500">{role}</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
