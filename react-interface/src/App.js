import { BiArchive } from "react-icons/bi";
import Search from "./components/Search";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl ">Building interfaces with React</h1>
      
        <BiArchive size={30} className="align-top inline-block text-red-400"  />
      <Search/>
    </div>
  );
}

export default App;
