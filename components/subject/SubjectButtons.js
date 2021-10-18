import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SubjectButtons = (props) => {
  const text = props.text;
  const [colors, setColors] = useState(props.color);

  useEffect(() => {
    setColors(props.color);
  });

  const textStyle = `cursor-pointer p-1 hover:text-${colors}-600 rounded-md bg-${colors}-300`;
  const buttonStyle = `p-3 cursor-pointer fill-current my-5 flex-grow mx-2 hover:shadow-xl rounded-2xl text-center bg-${colors}-500 transition-all transform hover:scale-110 border-2 border-gray border-opacity-40`;

  return (
    <motion.div className={buttonStyle}>
      <Link href="/">
        <span className={textStyle}>{text}</span>
      </Link>
    </motion.div>
  );
};

export default SubjectButtons;
