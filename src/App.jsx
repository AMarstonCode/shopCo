// when you import your components remove reset this file before pushing your code.
import "./App.css";
import SearchBar from "./components/SearchBar";
import { data } from "./bigData/data";

function App() {
  console.log(data);
  return (
    <>
      <SearchBar />
    </>
  );
}

export default App;
