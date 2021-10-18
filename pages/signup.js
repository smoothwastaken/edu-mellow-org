import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";

import Header from "../components/Header";

import googleIcon from "../public/icons/google-brands.svg";
import SocialButton from "../components/signup/SocialButton";

import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

// Firebase working imports
import { useAuth } from "../components/contexts/AuthsContext";
import Button from "../components/Button";

const signup = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  // const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      Router.push("/login");
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div>
      <Head>
        <title>Inscription - mellow</title>
        <meta
          name="description"
          content="A Website that allows students shares privatly and publicly their notes about themes!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 h-auto">
        <Header />
        {/* Wrapper */}
        <div className="grid grid-cols-2">
          {/* Right Side */}
          <div className="grid-1 m-auto">
            <br />
            <br />
            <h1 className="text-4xl font-extrabold text-center select-none">
              Rejoins-nous et commence <br /> à travailler avec mellow !
            </h1>
            <br />
            <div className="flex justify-center space-x-10">
              <SocialButton color="red-500">
                <span className="h-5 w-5 relative mr-2 text-white">
                  <Image
                    src={googleIcon}
                    alt="Google Icon"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full shadow-xl text-white"
                  />
                </span>{" "}
                Google
              </SocialButton>
              <SocialButton color="black">
                <span className="text-2xl mr-2 shadow-xl"></span> Apple
              </SocialButton>
            </div>
            <br />
            <div className="flex justify-center space-x-4 items-center select-none">
              <div className="-translate-y-2 transform text-gray-200">
                _________________________
              </div>
              <p className="uppercase font-semibold">or</p>
              <div className="-translate-y-2 transform text-gray-200">
                _________________________
              </div>
            </div>
            <br />
            <div>
              <h1 className="text-2xl font-bold text-center select-none mb-5">
                Tu peux aussi t'inscrire par email bien sûr!
              </h1>
              <div className="flex justify-center">
                <Button>
                  <Link href="/signup/first-step">
                    <div className="grid grid-cols-2 grid-rows-1 ">
                      <div className="grid-1 flex justify-center items-center">
                        <ArrowNarrowRightIcon className="h-6" />
                      </div>
                      <div className="grid-2">C'est partie!</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </div>
            {/* <div className="text-left m-15 ml-10 select-none">
              <form action="" onSubmit={handleSubmit} method="post">
                <p>
                  Choisis un nom d'utilisateur{" "}
                  <span className="text-gray-200 text-sm transition-all hover:text-black mb-2">
                    (sans "bg" dedans merci 😭)
                  </span>
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  ref={usernameRef}
                  placeholder="ex: cleeryy.lpb"
                  className="m-1 pr-auto pl-3 py-3 rounded-xl w-96 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-xl transition-shadow duration-500"
                />
                <p>
                  Ton email!{" "}
                  <span className="text-gray-200 text-sm transition-all hover:text-black mb-2">
                    (on omet qu'il doit être stylé 😎)
                  </span>
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  ref={emailRef}
                  placeholder="ex: bienvenue@sur.mellow"
                  className="m-1 pr-auto pl-3 py-3 rounded-xl w-96 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-xl transition-shadow duration-500"
                />
                <br />
                <p>
                  Et juste un mot de passe!{" "}
                  <span className="text-gray-200 text-xs transition-all hover:text-black mb-2">
                    (on omet aussi qu'il doit être secret 🤫)
                  </span>
                </p>
                <input
                  type="password"
                  name=""
                  id=""
                  ref={passwordRef}
                  placeholder="ex: m0td3p4ss3"
                  className="mt-1 pr-auto pl-3 py-3 rounded-xl w-96 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-xl transition-shadow duration-500"
                />
                <br />
                <p>Redonne nous ton mot de passe!</p>
                <input
                  type="password"
                  name=""
                  id=""
                  ref={passwordConfirmRef}
                  placeholder="ex: m0td3p4ss3"
                  className="mt-1 pr-auto pl-3 py-3 rounded-xl w-96 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-xl transition-shadow duration-500"
                />
                <br />
                <br />
                <button
                  className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg px-5 py-3 text-white shadow-md w-96 flex justify-center items-center hover:shadow-xl transition-all transform hover:scale-110"
                  type="submit"
                >
                  Je m'inscris!
                </button>
              </form>
            </div> */}
            <br />
          </div>
          {/* Left Side */}
          <div className="grid-2 bg-landscape "></div>
        </div>
      </main>
    </div>
  );
};

export default signup;
