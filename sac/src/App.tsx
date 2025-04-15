import Navbar from "./components/Navbar";
import Heading from "./components/heading";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Navbar />
      </div>
      <div className="mt-10">
        <Heading />

        <div
          className="pt-5 flex justify-center"
          style={{
            paddingBottom: "120px",
          }}
        >
          <div className="text-left max-w-3xl w-full">
            <p className="mt-8 text-gray-700">
              This is your software design automation workbench. Start building
              from high-level requirements!
            </p>
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
