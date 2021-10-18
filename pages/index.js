import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { motion, AnimatePresence } from "framer-motion";
import joinusimg from "../public/highfive.svg";
import firstQuestion from "../public/first-question.svg";

import {
  SparklesIcon,
  RefreshIcon,
  DownloadIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";
import Card from "../components/team/Card";
import Button from "../components/Button";
import Illustration from "../components/calltoactionindex/Illustration";

export default function Home() {
  const [name, setName] = useState("mellow");

  const imageFirstQuestion = () => {
    return <Image src={firstQuestion} />;
  };

  function randomGradient() {
    const gradients = [
      "from-red-500 to-yellow-600",
      "from-blue-500 to-purple-600",
      "from-green-400 to-yellow-400",
      "from-pink-500 to-red-600",
    ];

    const gradient =
      gradients[Math.floor(Math.random() * gradients.length)].toString();
    return gradient;
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

  const transition = {
    ease: "easeOut",
    type: "spring",
    stiffness: 700,
    damping: 27,
  };

  return (
    <div>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content="A Website that allows students shares privatly and publicly their notes about themes!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 h-auto">
        <Header />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: "-150px", x: "40px ", rotate: 4 }}
            animate={{ y: 0, x: 0, rotate: 0 }}
            transition={transition}
            exit={{ opacity: 0 }}
          >
            <Hero />
          </motion.div>
          <br />
          <br />
          <div
            className={
              "bg-clip-content text-white bg-gradient-to-br " +
              randomGradient() +
              " h-auto grid grid-cols-2 grid-rows-1"
            }
          >
            <div className="grid-1 m-10">
              <h1 className="text-8xl ml-2 mb-10">Qu'est que {name} ?</h1>
              <p className="text-lg text-justify">
                {name} est un site web sur lequel vous pouvez... Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Provident
                architecto illo a soluta voluptatem iure veritatis eos
                consequuntur, libero assumenda non magni explicabo, illum, ut
                eligendi repellendus minus iste sint. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consectetur aliquam nemo impedit
                quo tempora amet, totam sunt.
                <br />
                Tempore asperiores doloribus unde a deleniti nulla sint, vero
                enim! Iste, animi beatae! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Aut aliquid in nihil voluptatem
                praesentium voluptates unde nostrum necessitatibus deserunt
                sequi magni dignissimos, rerum, dolores sint saepe eius dolorum
                porro dolorem.
              </p>
            </div>
            <div className="grid-2">
              <div className="m-5 h-full rounded-xl">
                {/* {imageFirstQuestion()} */}
              </div>
            </div>
          </div>
          <div
            className={
              "bg-clip-content text-white bg-gradient-to-br " +
              randomGradient() +
              " h-auto grid grid-cols-2 grid-rows-1"
            }
          >
            <div className="grid-1">
              <div className="p-5 rounded-xl"></div>
            </div>
            <div className="grid-2 m-10">
              <h1 className="text-8xl ml-2 mb-10 text-right">
                Comment <br /> ça marche <br /> {name} ?
              </h1>
              <p className="text-lg text-right">
                {name} est un site web sur lequel vous pouvez... Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Provident
                architecto illo a soluta voluptatem iure veritatis eos
                consequuntur, libero assumenda non magni explicabo, illum, ut
                eligendi repellendus minus iste sint. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consectetur aliquam nemo impedit
                quo tempora amet, totam sunt.
              </p>
            </div>
          </div>
          <div className="features text-center m-10 select-none">
            <h3 className="font-extrabold text-transparent text-xs uppercase bg-clip-text bg-gradient-to-br from-purple-500 to-blue-500">
              Fonctionnalités
            </h3>
            <h1 className="text-8xl font-semibold">Nos fonctionnalités</h1>
            <h4 className="text-gray-500">
              Les meilleurs outils à votre disposition pour apprendre et
              partager!
            </h4>
            <div className="grid grid-cols-2 grid-rows-2">
              <div
                className={
                  "m-10 p-3 text-left border-2 cursor-help transition-all border-b-8 border-r-8 rounded-lg border-red-500"
                }
              >
                <h1 className="text-4xl font-semibold capitalize mb-2 flex items-center">
                  <span>
                    <SparklesIcon className="h-7 text-red-500 mr-2" />
                  </span>{" "}
                  Magnifique interface
                </h1>
                <h3 className={"uppercase text-xs font-extrabold text-red-600"}>
                  fonctionnalité gratuite
                </h3>
                <p className="text-md">
                  Cette interface est faite pour que tu puisses apprendre sans
                  te piquer les yeux comme sur les sites de 2010...
                </p>
              </div>

              <div
                className={
                  "m-10 p-3 text-left border-2 cursor-help transition-all border-b-8 border-r-8 rounded-lg border-green-500"
                }
              >
                <h1 className="text-4xl font-semibold capitalize mb-2 flex items-center">
                  <span>
                    <DownloadIcon className="h-7 text-green-500 mr-2" />
                  </span>
                  Télécharge tes cours
                </h1>
                <h3
                  className={"uppercase text-xs font-extrabold text-green-600"}
                >
                  fonctionnalité nouvelle
                </h3>
                <p className="text-md">
                  {"Sur " +
                    name +
                    " tu peux télécharger tout les cours que tu veux de manière illimité! (tu dois être un confirmé par contre)"}
                </p>
              </div>
              <div>
                <div
                  className={
                    "m-10 p-3 text-left border-2 cursor-help transition-all border-b-8 border-r-8 rounded-lg border-blue-500"
                  }
                >
                  <h1 className="text-4xl font-semibold capitalize mb-2 flex items-center">
                    <span>
                      <RefreshIcon className="h-7 text-blue-500 mr-2" />
                    </span>
                    Accès illimité
                  </h1>
                  <h3
                    className={"uppercase text-xs font-extrabold text-blue-600"}
                  >
                    fonctionnalité gratuite
                  </h3>
                  <p className="text-md">
                    {"Sur " +
                      name +
                      " tu peux totalement regarder toutes les fiches qui sont disponibles sur le site! Pas d'attente ou d'abonnement quand il s'agit d'apprendre."}
                  </p>
                </div>
              </div>
              <div
                className={
                  "m-10 p-3 text-left border-2 cursor-help transition-all border-b-8 border-r-8 rounded-lg border-yellow-500"
                }
              >
                <h1 className="text-4xl font-semibold capitalize mb-2 flex items-center">
                  <span>
                    <AnnotationIcon className="h-7 text-yellow-500 mr-2" />
                  </span>
                  Suggestions ouvertes
                </h1>
                <h3
                  className={"uppercase text-xs font-extrabold text-yellow-600"}
                >
                  fonctionnalité confirmé
                </h3>
                <p className="text-md">
                  {"Sur " +
                    name +
                    " il est possible pour les membres confirmés, de pouvoir donner des suggestions que les auteurs pourront analyser et inclure ou non! Utile non ?"}
                </p>
              </div>
            </div>
            <br />
          </div>
          <div className="features m-10 select-none">
            <h3 className="font-extrabold ml-2 text-transparent uppercase text-xs bg-clip-text bg-gradient-to-br from-blue-600 to-blue-200  ">
              Notre Équipe
            </h3>
            <h1 className="text-6xl text-left font-semibold">
              Une incroyable équipe!
            </h1>
            <div className="mt-10 grid grid-cols-4 grid-rows-2 gap-10">
              <Card
                name="Cléry A-Ferradou"
                role="Developper & CEO"
                pp="https://picsum.photos/200/200"
                color="red"
              />
              <Card
                name="Lorin Nauroy"
                role="Design"
                pp="https://picsum.photos/200/200"
                color="blue"
              />
              <Card
                name="Axel Giraud"
                role="Development"
                pp="https://picsum.photos/200/200"
                color="green"
              />
              <Card
                name="Ronan Galasso"
                role="Sounds"
                pp="https://picsum.photos/200/200"
                color="purple"
              />
              <Card
                name="Tigrane Volpert"
                role="Draws"
                pp="https://picsum.photos/200/200"
                color="yellow"
              />
              <Card
                name="Alois Rouaud"
                role="Dev mais pd(g)"
                pp="https://picsum.photos/200/200"
                color="indigo"
              />
              <Card
                name="Olivia Gomez"
                role="Juste stylé"
                pp="https://picsum.photos/200/200"
                color="pink"
              />
            </div>
          </div>
          <br />
          <div className="grid grid-cols-2">
            <div className="grid-1 m-10 select-none items-center text-center">
              <h3 className="text-lg text-gray-400 uppercase font-extrabold">
                Tu veux faire partie de l'équipe ? 🤪
              </h3>
              <h1 className="text-6xl font-semibold">
                Envie d'entrer <br />
                dans{" "}
                <span className="font-extrabold">
                  mell
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-blue-500">
                    o
                  </span>
                  w
                </span>{" "}
                ?! 👀
              </h1>
              <br />
              <div className="flex justify-center">
                <Link href="/signup">
                  <Button>REJOINS NOUS</Button>
                </Link>
              </div>
            </div>
            <div className="grid-2 p-10"></div>
          </div>
        </motion.div>
      </main>

      <footer></footer>
    </div>
  );
}
