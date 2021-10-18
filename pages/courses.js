import React, { useState, useEffet } from "react";
import Head from "next/head";
import Header from "../components/Header";
import SubjectNavBar from "../components/SubjectNavBar";
import Card from "../components/polls/Card";

import { useAuth } from "../components/contexts/AuthsContext";
import { db } from "../pages/_firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react/cjs/react.development";

const subject = () => {
  async function getCourses() {
    const docRef = doc(db, "courses", currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return await Object.entries(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }
  const [type, setType] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>mellow</title>
        <meta
          name="description"
          content="A Website that allows students shares privatly and publicly their notes about themes!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 h-screen">
        <Header />
        <SubjectNavBar />
        <div className="poll-elements grid grid-cols-4 grid-flow-row justify-center">
          <Card
            type="français"
            title="Les C.O.D."
            text="Mais, c'est quoi les C.O.D. ??"
            emoji="😎"
            color="red"
          />
          <Card
            type="Maths"
            title="les nombres premiers"
            text="Tu vas pouvoir découvrir les nombres premiers!"
            emoji="🧮"
            color="blue"
          />
          <Card
            type="Histoire"
            title="La deuxième guerre mondiale"
            text="Tu savais que durant la Deuxième Guerre Mondiale, "
            emoji="🔫"
            color="purple"
          />
          <Card
            type="anglais"
            title="le present perfect"
            text="Ici tu vas voir le present perfect!"
            emoji="🇬🇧"
            color="green"
          />
          <Card
            type="wsh le s"
            title="c la cité ici"
            text="ftg fdp"
            emoji="👀"
            color="indigo"
          />
          <Card
            type="wsh le s"
            title="c la cité ici"
            text="ftg fdp"
            emoji="👀"
            color="indigo"
          />
          <Card
            type="wsh le s"
            title="c la cité ici"
            text="ftg fdp"
            emoji="👀"
            color="indigo"
          />
          <Card
            type="wsh le s"
            title="c la cité ici"
            text="ftg fdp"
            emoji="👀"
            color="indigo"
          />
          <Card
            type="wsh le s"
            title="c la cité ici"
            text="ftg fdp"
            emoji="👀"
            color="indigo"
          />
        </div>
      </main>
    </div>
  );
};

export default subject;
