import React from "react";
import Head from "next/head";
import Header from "../components/Header";

const questions = () => {
  return (
    <div>
      <Head></Head>
      <main className="bg-gray-100 h-auto">
        <Header />
        <div className="m-10 p-5 shadow-xl rounded-xl bg-white">
          <h1 className="text-6xl font-semibold">Questions</h1>
          <p className="text-gray-500 pl-3">
            Tu as un problème ? Une question ? Regarde ici si tu n'es pas le
            premier à la poser!
          </p>
        </div>
        <div className="wrapper m-10 grid grid-cols-4 grid-rows-3 gap-5">
          <div className="grid-1 col-span-2 p-5 shadow-xl rounded-xl bg-white">
            <h1 className="text-4xl mb-5">
              Comment ça marche{" "}
              <span className="font-bold">
                mell
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-blue-500">
                  o
                </span>
                w
              </span>{" "}
              ?
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              commodi dolore atque sed minima suscipit vel fuga recusandae
              praesentium, modi, repudiandae amet incidunt inventore dolorum
              nobis corporis! A, aut ex! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quam eaque in vitae voluptate? Neque corrupti
              doloribus, libero similique iste possimus praesentium saepe cum
              repellat porro esse harum mollitia itaque quae! Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid-2 bg-landscape bg-white rounded-xl shadow-xl"></div>
          <div className="grid-3 p-5 bg-white rounded-xl shadow-xl row-span-2">
            <h1 className="text-4xl mb-5">
              Comment ça marche{" "}
              <span className="font-bold">
                mell
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-blue-500">
                  o
                </span>
                w
              </span>{" "}
              ?
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              commodi dolore atque sed minima suscipit vel fuga recusandae
              praesentium, modi, repudiandae amet incidunt inventore dolorum
              nobis corporis! A, aut ex! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quam eaque in vitae voluptate? Neque corrupti
              doloribus, libero similique iste possimus praesentium saepe cum
              repellat porro esse harum mollitia itaque quae! Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid-4 p-5 shadow-xl bg-white rounded-xl row-span-2">
            <h1 className="text-4xl mb-5">
              Comment ça marche{" "}
              <span className="font-bold">
                mell
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-blue-500">
                  o
                </span>
                w
              </span>{" "}
              ?
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              commodi dolore atque sed minima suscipit vel fuga recusandae
              praesentium, modi, repudiandae amet incidunt inventore dolorum
              nobis corporis! A, aut ex! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quam eaque in vitae voluptate? Neque corrupti
              doloribus, libero similique iste possimus praesentium saepe cum
              repellat porro esse harum mollitia itaque quae! Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid-5 col-span-2 p-5 shadow-xl rounded-xl bg-white">
            <h1 className="text-4xl mb-5">
              Pourquoi «{" "}
              <span className="font-bold">
                mell
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-blue-500">
                  o
                </span>
                w
              </span>{" "}
              » ?
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              commodi dolore atque sed minima suscipit vel fuga recusandae
              praesentium, modi, repudiandae amet incidunt inventore dolorum
              nobis corporis! A, aut ex! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quam eaque in vitae voluptate? Neque corrupti
              doloribus, libero similique iste possimus praesentium saepe cum
              repellat porro esse harum mollitia itaque quae! Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid-6 bg-landscape shadow-xl bg-white rounded-xl"></div>
          <div className="grid-7 p-5 col-span-2 shadow-xl bg-white rounded-xl">
            <h1 className="text-4xl mb-5">
              Comment ça marche{" "}
              <span className="font-bold">
                mell
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-blue-500">
                  o
                </span>
                w
              </span>{" "}
              ?
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
              commodi dolore atque sed minima suscipit vel fuga recusandae
              praesentium, modi, repudiandae amet incidunt inventore dolorum
              nobis corporis! A, aut ex! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quam eaque in vitae voluptate? Neque corrupti
              doloribus, libero similique iste possimus praesentium saepe cum
              repellat porro esse harum mollitia itaque quae! Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default questions;
