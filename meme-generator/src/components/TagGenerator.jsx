import React from "react";


function TagGenerator(){
    return (
        <div className="flex flex-col justify-center items-center rounded-lg gap-10 w-3/4 bg-blue-400">
        <h1 className="underline font-bold text-xl">DESIRED MEME BY CONTEXT </h1>
        <img src="" />
        <input type="text" placeholder="Search by context" className="px-80 rounded-md py-3 " />
        <button className="bg-slate-300 px-80 rounded-sm py-3 mb-3 font-bold text-lg ">GENERATE</button>
      </div>
    );
}


export default TagGenerator;