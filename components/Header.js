import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavItems from "./NavItems";

import { useAuth } from "./contexts/AuthsContext";

const Logged = () => {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();

  async function handleLogOut(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await logout();
      console.log("Tu t'es bien déconnecté!");
      Router.push("/login");
    } catch (e) {
      setError(e);
      console.log(error);
    }
  }

  if (!currentUser) {
    return (
      <div className="flex items-center right-0 space-x-6">
        <NavItems text="se connecter" link="/login" />
        <NavItems text="s'inscrire" link="/signup" />
      </div>
    );
  } else {
    return (
      <div className="flex items-center right-0 space-x-6">
        <NavItems text="mon compte" link="/dashboard" />
        <div onClick={handleLogOut}>
          <NavItems text="se déconnecter" link="/login" logout="true" />
        </div>
      </div>
    );
  }
};

const Header = () => {
  return (
    <div className="flex z-50 items-center text-center shadow-md p-7 select-none sticky top-0 bg-white flex-grow rounded-b-xl mx-5">
      <Link href="/">
        <h1 className="text-4xl font-bold flex cursor-pointer">
          mell
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
            o
          </span>
          w
        </h1>
      </Link>
      <div className="flex space-x-1 justify-center flex-grow md:space-x-20">
        <NavItems text="accueil 🏠" link="/" />
        <NavItems text="cours 📚" link="/courses" />
        <NavItems text="sondages 📊" link="/polls" />
        <NavItems text="poster 📝" link="/posts" />
        <NavItems text="questions❓" link="/questions" />
      </div>
      <Logged />
    </div>
  );
};

export default Header;
