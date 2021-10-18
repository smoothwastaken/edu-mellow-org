import React from "react";
import SubjectButtons from "./subject/SubjectButtons";

const SubjectNavBar = () => {
  return (
    <div className="bg-white shadow-xl rounded-xl m-10">
      <h1 className="text-6xl font-semibold ml-5 pt-5 pb-0 ">Cours</h1>
      <div className="relative flex mx-8 py-5 ">
        <SubjectButtons text="Français ✍️" color="red" />
        <SubjectButtons text="Mathématique 📈" color="blue" />
        <SubjectButtons text="Histoire 📜" color="green" />
        <SubjectButtons text="Géographie 🌍" color="yellow" />
        <SubjectButtons text="Anglais 🇬🇧" color="purple" />
      </div>
    </div>
  );
};

export default SubjectNavBar;
