import MermaidChart from "./Mermaid";
import { ChatEntry } from "./searchBar";

interface ResultProps {
  result: ChatEntry;
}

function Result(props: ResultProps) {
  const { searchText, responseText, architecture } = props.result;
  return (
    <div className="flex flex-col gap-2 my-2">
      {searchText && (
        <div className="self-end bg-blue-100 text-blue-900 px-4 py-2 rounded-xl max-w-[95%]">
          {searchText}
        </div>
      )}
      {architecture && <MermaidChart chart={architecture} />}
      {responseText && (
        <div className="self-start bg-gray-100 text-gray-900 px-4 py-2 rounded-xl max-w-[95%]">
          {responseText}
        </div>
      )}
    </div>
    // <div className="mb-6">
    //   {searchText && <p className="font-semibold mb-1">You: {searchText}</p>}
    //   {architecture && <MermaidChart chart={architecture} />}
    //   {responseText && <p className="text-gray-700">{responseText}</p>}
    //   {responseText && <p className="text-gray-700">{responseText}</p>}
    // </div>
  );
}

export default Result;
