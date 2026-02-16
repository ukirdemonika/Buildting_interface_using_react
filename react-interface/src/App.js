import { BiArchive } from "react-icons/bi";
function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl">Building interfaces with React</h1>
      <span className="inline-block text-red-400">
        <BiArchive size={30} className="align-top" />
      </span>
    </div>
  );
}

export default App;
