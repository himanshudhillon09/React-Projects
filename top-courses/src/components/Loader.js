import "./Loader.css";


function Loader(){
    return (
        <div className="flex items-center flex-col space-y-2 mt-4">
        <div className="spinner"></div>
        <p className="text-lg  text-white font-semibold">Loading Data...</p>
    </div>
    );
}


export default Loader;