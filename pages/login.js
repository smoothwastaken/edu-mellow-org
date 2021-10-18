import React, { useRef, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import Header from "../components/Header";
import { useAuth } from "../components/contexts/AuthsContext";

const login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      console.log("ça marche");
      Router.push("/dashboard");
    } catch {
      setError("Failed to log in");
      console.log("ça marhce pas");
    }

    setLoading(false);
  }
  return (
    <div>
      <Head>
        <title>Connexion - mellow</title>
        <meta
          name="description"
          content="A Website that allows students shares privatly and publicly their notes about themes!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="bg-gray-100 h-screen
      "
      >
        <Header />
        <div className="flex justify-center items-center flex-grow mx-14 space-x-20">
          {/* Left Side */}
          <div className="text-left ml-14">
            <h3 className="uppercase text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-500 font-bold text-xs">
              facile et rapide
            </h3>
            <h1 className="text-6xl font-bold mt-2">
              Change ta manière d'apprendre <br /> et de travailler!
            </h1>
            <p className="mt-4 text-xl text-justify">
              mellow te permet d'apprend très facilement et rapidement à l'aide
              fiche que toute la communauté peut partager! Connecte toi et
              permet aux autres de consulter toutes les fiches que tu auras
              partager si tu le souhaites!
            </p>
          </div>
          {/* Right Side */}
          <div className="">
            <div className="login-square bg-white rounded-xl shadow-xl m-14 p-7 ml-10 h-auto text-center space-y-1">
              <div className="m-2 text-center select-none">
                <h1 className="text-4xl font-semibold">
                  Continue ton aventure!
                </h1>
                <p className="text-sm text-gray-200 hover:text-black transition-all">
                  En te connectant à ton super compte grave{" "}
                  <span className="italic">"fresh"</span>
                </p>
              </div>
              <form action="" onSubmit={handleSubmit} method="post">
                <p className="ml-2 text-left select-none">Entre ton email:</p>
                <input
                  type="email"
                  name=""
                  id=""
                  ref={emailRef}
                  placeholder="ex: je-kiff@grave.mellow"
                  className="mb-2 pr-auto pl-3 py-3 rounded-xl w-96 focus:outline-none border-2 focus:border-0 focus:ring-2 focus:ring-purple-500 focus:shadow-xl transition-shadow duration-500"
                />
                <br />
                <p className="ml-2 text-left select-none">
                  Entre ton mot de passe:{" "}
                  <span className="text-gray-200 transition-all hover:text-black">
                    (super secret hein)
                  </span>
                </p>

                <input
                  type="password"
                  name=""
                  id=""
                  ref={passwordRef}
                  placeholder="ex: m3lL0w_LpB"
                  className="mb-2 pr-auto pl-3 py-3 rounded-xl w-96 focus:outline-none border-2 focus:border-0 focus:ring-2 focus:ring-purple-500 focus:shadow-xl transition-shadow duration-500"
                />
                <br />
                <button
                  className="mt-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg px-5 py-3 text-white shadow-md w-96 tranform justify-center items-center hover:shadow-xl transition-all transform hover:scale-105"
                  type="submit"
                >
                  Je me connecte!
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default login;
