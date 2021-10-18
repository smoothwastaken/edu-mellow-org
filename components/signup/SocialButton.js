import React, { useState, useEffect } from "react";

const SocialButton = ({ color, children }) => {
  const [colors, setColors] = useState(color);

  useEffect(() => {
    setColors(color);
  }, []);

  return (
    <button
      className={
        "bg-" +
        colors +
        " rounded-xl px-5 py-4 select-none text-white shadow-md w-40 flex justify-center items-center hover:shadow-xl transition-all transform hover:scale-110"
      }
    >
      {children}
    </button>
  );
};

export default SocialButton;
