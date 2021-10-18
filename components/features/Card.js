import React from "react";

const Card = (props) => {
  return (
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
      <h3 className={"uppercase text-xs font-extrabold text-yellow-600"}>
        fonctionnalité confirmé
      </h3>
      <p className="text-md">
        {"Sur " +
          name +
          " il est possible pour les membres confirmés, de pouvoir donner des suggestions que les auteurs pourront analyser et inclure ou non! Utile non ?"}
      </p>
    </div>
  );
};

export default Card;
