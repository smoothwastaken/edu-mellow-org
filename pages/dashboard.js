import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import Image from "next/image";

import Header from "../components/Header";
import { useAuth } from "../components/contexts/AuthsContext";

import { UserCircleIcon } from "@heroicons/react/outline";

import { db } from "../pages/_firebase";
import { doc, getDoc } from "firebase/firestore";

const profile = () => {
  const { currentUser } = useAuth();
  const nameRef = useRef();
  // const { getUserInfos } = useAuth();
  const { getUsername } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      // await getUserInfos();
    } catch (e) {
      console.log(e);
    }

    // try {
    //   setError("");
    //   setLoading(true);
    //   await updateName(nameRef.current.value);
    //   console.log("ça marche");
    //   Router.push("/dashboard");
    // } catch (e) {
    //   setError(e);
    //   console.log(error);
    // }

    setLoading(false);
  }

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

  async function getUserInfos() {
    if (loading) return;
    const docRef = doc(db, "userInfos", currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }

  const [userName, setUserName] = useState(
    getUserInfos().then((res) => {
      setUserName(res.name);
    })
  );
  const [userAge, setUserAge] = useState(
    getUserInfos().then((res) => {
      setUserAge(res.age);
    })
  );
  const [userBio, setUserBio] = useState(
    getUserInfos().then((res) => {
      setUserBio(res.biographia);
    })
  );

  const Wrapper = () => {
    // useEffect(() => {
    //   const [userInfos, setUserInfos] = useState(async () => {
    //     getUserInfos();
    //   });
    // }, []);

    if (!currentUser) {
      Router.push("/login");
      return <div>Tu n'es pas connecté</div>;
    } else {
      return (
        <div className="m-10 select-none">
          <div className="mb-10 flex items-center space-x-3 p-5 shadow-xl bg-white rounded-xl">
            <UserCircleIcon className="h-20" />
            <div className="relative">
              <h1 className="text-6xl">Tableau de bord</h1>
              <p>Modifie tes informations personnels sur le tableau de bord!</p>
            </div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-xl">
            <h1 className="text-black text-6xl mb-5 font-semibold">Général</h1>
            <div className="flex flex-grow rounded-xl">
              <div className="justify-center">
                <h2 className="text-4xl">Re-bonjour toi 😎</h2>
                <Image
                  src={require("../public/default-pdp.png")}
                  className={
                    "rounded-full transform scale-50 bg-" +
                    randomColor() +
                    "-400"
                  }
                />
              </div>
              <div className="items-center flex">
                <div>
                  <p className="text-2xl">Nom d'Utilisateur</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder={userName}
                    className={
                      "px-2 py-2 w-96 select-all shadow-inner rounded-xl focus:outline-none focus:ring-2 focus:ring-" +
                      randomColor() +
                      "-500 focus:shadow-xl transition-colors duration-500 border-2"
                    }
                  />
                  <br />
                  <br />
                  <p className="text-2xl">Adresse Email</p>
                  <input
                    type="email"
                    placeholder={currentUser.email ? currentUser.email : ""}
                    className={
                      "px-2 py-2 w-96 shadow-inner select-all rounded-xl focus:outline-none focus:ring-2 focus:ring-" +
                      randomColor() +
                      "-500 focus:shadow-xl transition-shadow duration-500 border-2"
                    }
                  />
                  <br />
                  <br />
                  <p className="text-2xl">Âge</p>
                  <input
                    type="number"
                    min="7"
                    max="667"
                    placeholder={userAge}
                    className={
                      "px-2 py-2 w-96 shadow-inner select-all rounded-xl focus:outline-none focus:ring-2 focus:ring-" +
                      randomColor() +
                      "-500 focus:shadow-xl transition-shadow duration-500 border-2"
                    }
                  />
                  <br />
                  <br />
                  <p className="text-2xl">Biographie</p>
                  <input
                    type="text"
                    placeholder={userBio}
                    className={
                      "px-2 py-2 w-96 shadow-inner select-all rounded-xl focus:outline-none focus:ring-2 focus:ring-" +
                      randomColor() +
                      "-500 focus:shadow-xl transition-shadow duration-500 border-2"
                    }
                  />
                  <br />
                  <br />
                  <button
                    className={
                      "bg-" +
                      randomColor() +
                      "-500 rounded-lg px-5 py-3 text-white shadow-md w-96 flex justify-center items-center hover:shadow-xl transition-all transform hover:scale-110"
                    }
                    type="submit"
                  >
                    Modifier
                  </button>
                </div>
              </div>
              <div className="">
                <p className="text-xl"></p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Head></Head>
      <main className="bg-gray-100 h-auto">
        <Header />
        <Wrapper />
      </main>
    </div>
  );
};

export default profile;

{
  /* <div className="m-15 p-5">
          <h1 className="text-8xl font-bold">Mon profil</h1>
          <br />
          <div className="flex">
            <p>Sign-in provider: </p>
            <form className="items-center" action="" onSubmit={handleSubmit}>
              <input
                type="text"
                ref={nameRef}
                placeholder={
                  currentUser.displayName ? currentUser.displayName : "example"
                }
                className="border-2 rounded-xl px-3 py-2 outline-none"
              />
              <button
                type="submit"
                className="bg-gray-500 text-white p-2 rounded-xl"
              >
                Update!
              </button>
            </form>
          </div>
          <p>{"  Provider-specific UID: " + currentUser.uid}</p>
          <p>{"  Name: " + currentUser.displayName}</p>
          <p>{"  Email: " + currentUser.email}</p>
          <p>{"  Photo URL: " + currentUser.photoURL}</p>
        </div>
        <div>
          <h1
            onClick={handleLogOut}
            className="text-6xl hover:underline cursor-pointer"
          >
            Se déconnecter
          </h1>
        </div> */
}
