import { React} from "react";
import Loader from './Loader';
import useGif from "../hooks/useGif";



function RandomGenerator() {

    const {gif,loading,fetchData} = useGif();


    return (
        <div className="flex flex-col justify-center items-center rounded-xl gap-6 w-4/6 bg-green-800">
            <h1 className="underline font-bold text-xl">A RANDOM GIF </h1>
            {loading?(<Loader/>):(<img src={gif} width="480" height="200" alt="gif-img" />)}
            <button className="bg-green-500 w-3/4 rounded-lg p-3 mb-5  font-bold text-lg hover:bg-green-300" onClick={()=>fetchData()}>GENERATE</button>
        </div>
    );
}

export default RandomGenerator;
