import "./App.css";
import TagGenerator from "./components/TagGenerator";
import RandomGenerator from "./components/RandomGenerator";

function App() {
  return (
    <div className=" flex flex-col gap-16 justify-center items-center">
      <div className="bg-slate-50 flex items-center justify-center rounded-2xl w-11/12 mt-16 h-20 mx-auto">
        <h1 className=" text-xl font-extrabold ">RANDOM GIF GENERATOR</h1>
      </div>

      <RandomGenerator />
      <TagGenerator />
    </div>
  );
}

export default App;
