import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";

import Button from "../../components/Button";

import { motion, AnimatePresence } from "framer-motion";

const index = () => {
  const transition = {
    delay: 0.5,
    duration: 1.5,
    type: "spring",
    stiffness: 100,
    damping: 25,
    staggerChildren: 0.5,
  };

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

      <main className="bg-gray-100 h-screen">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -150 }}
          transition={transition}
        >
          <Header />
        </motion.div>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial={{ x: 300, opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="grid grid-cols-2 grid-rows-1 font-semibold"
          >
            {/* LEFT */}
            <motion.div className="grid-1 ml-20 mt-24">
              <motion.div className="">
                <h1 className="text-8xl font-extrabold">
                  Inscrit toi en quelques clics 😎
                </h1>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero, aspernatur. Quibusdam est hic natus eaque ipsa?
                  Expedita, quaerat. Quod dolorum sunt ipsum nihil voluptates
                  accusantium porro ab modi inventore praesentium.
                </p>
              </motion.div>
            </motion.div>
            {/* RIGHT */}
            <motion.div className="grid-2 flex justify-center items-center">
              <motion.div>
                <motion.h1 className="text-2xl">Ton e-mail *</motion.h1>
                <motion.input
                  className="w-80 pl-3 py-2 rounded-lg focus:outline-none mb-5"
                  type="email"
                  name=""
                  id=""
                  placeholder="mellow-c-est-trop-bien@gmail.com"
                />
                <br />
                <motion.h1 className="text-2xl">
                  Ton numéro de téléphone
                </motion.h1>
                <motion.input
                  className="w-80 pl-3 py-2 rounded-lg focus:outline-none mb-5"
                  type="tel"
                  name=""
                  id=""
                  placeholder="+33 123456789"
                />
                <br />
                <br />
                <Link href="/signup/second-step">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 700,
                      damping: 20,
                    }}
                    className={
                      "p-3 bg-" +
                      randomColor() +
                      "-500 text-white rounded-xl w-full text-center items-center font-semibold cursor-pointer select-none"
                    }
                  >
                    Suivant !
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default index;
