import { React, useState, useEffect } from "react";
import axios from "axios";
import Loader from './Loader';







function RandomGenerator() {

    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');

    useEffect(() => {
        fetchData();
    },[])


    
    async function fetchData() {
        setLoading(true);
        const output = await axios.get(url);
        const imageUrl = output.data.data.images.downsized_large.url;
        setLoading(false);
        setGif(imageUrl);
        
    }




    return (
        <div className="flex flex-col justify-center items-center rounded-xl gap-6 w-4/6 bg-green-800">
            <h1 className="underline font-bold text-xl">A RANDOM GIF </h1>
            {loading?(<Loader/>):(<img src={gif} width="480" height="200" alt="gif-img" />)}
            <button className="bg-green-500 w-3/4 rounded-lg p-3 mb-5  font-bold text-lg hover:bg-green-300" onClick={()=>fetchData()}>GENERATE</button>
        </div>
    );
}

export default RandomGenerator;
