import { React, useState } from "react";
import useGif from "../hooks/useGif";
import Loader from './Loader';


function TagGenerator() {
  const [tag, setTag] = useState('NARUTO');
  const { gif, loading, fetchData } = useGif(tag);




  return (
    <div className="flex flex-col justify-center items-center rounded-xl gap-6 w-4/6 bg-blue-700 mb-10">
      <h1 className="underline uppercase font-bold text-xl mt-4">A GIF FROM {tag} </h1>
      {loading ? (<Loader />) : (<img src={gif} width="480" height="200" alt="gif-img" />)}
      <input type="text" placeholder="Search by context" onChange={(e) => { setTag(e.target.value) }} className=" w-3/4 rounded-xl p-3 text-lg text-center " />
      <button className="bg-slate-300 w-3/4 rounded-lg p-3 mb-5  font-bold text-lg hover:bg-slate-200 " onClick={() => { fetchData(tag) }}>GENERATE</button>
    </div>
  );
}


export default TagGenerator;