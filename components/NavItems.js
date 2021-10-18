import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "./contexts/AuthsContext";

const NavItems = (props) => {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { text } = props;
  const { link } = props;
  const { logout } = props;

  if (!logout) {
    return (
      <div className="cursor-pointer">
        <Link href={link}>
          <h1 className="capitalize font-semibold hover:underline">{text}</h1>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="cursor-pointer">
        <button type="submit">
          <h1 className="capitalize font-semibold p-3 bg-black rounded-xl text-white transition-all duration-500 hover:bg-gray-600 ">
            {text}
          </h1>
        </button>
      </div>
    );
  }
};

export default NavItems;
