import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Card from "../components/polls/Card";

const polls = () => {
  return (
    <div>
      <Head></Head>
      <main className="bg-gray-100 h-auto">
        <Header />
        <div className="w-auto shadow-xl rounded-xl bg-white m-10 p-5">
          <h1 className="text-6xl font-semibold">Sondages</h1>
          <p className="text-gray-500 pl-3">
            Tu peux revenir ici tout les jours pour trouver tous les cours
            proposé par les autres élèves et choisis-en un pour chaque matière
            afin qu'il reste tout le temps sur le site!
          </p>
        </div>
        <div></div>
      </main>
    </div>
  );
};

export default polls;
