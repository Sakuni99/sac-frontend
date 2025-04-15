import Navbar from "./components/Navbar";
import Heading from "./components/heading";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <>
      <Navbar />
      <Heading />
      <div className="pt-24 px-8">
        <p className="mt-4 text-gray-700">
          This is your software design automation workbench. Start building from high-level requirements!
        </p>
      </div>
      <SearchBar />
    </>
  );
}

export default App;
