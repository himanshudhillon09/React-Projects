import React from "react";

function RandomGenerator() {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg gap-10 w-3/4 bg-green-600">
      <h1 className="underline font-bold text-xl">A RANDOM MEME </h1>
      <img src="" />
      <button className="bg-slate-300 px-80 rounded-sm py-3 m-3 font-bold text-lg ">GENERATE</button>
    </div>
  );
}

export default RandomGenerator;
