import './App.css';
import TagGenerator from './components/TagGenerator';
import RandomGenerator from './components/RandomGenerator';









function App() {
  return (
    <div className='h-screen flex flex-col gap-20 justify-center items-center'>
      <div className="bg-gray-100 flex items-center justify-center rounded-lg w-3/4  h-20 mx-auto">
        <h1 className=" text-2xl font-bold ">RANDOM MEME GIF GENERATOR</h1>
        </div>
    
    <RandomGenerator/>
    <TagGenerator/>

    </div>
  );
}

export default App;
