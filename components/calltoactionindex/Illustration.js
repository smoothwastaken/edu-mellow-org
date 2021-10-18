import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Illustration = (props) => {
  const Illustration = dynamic(() => import(props.path));
  return (
    <div>
      <Image src={Illustration} />
    </div>
  );
};

export default Illustration;
