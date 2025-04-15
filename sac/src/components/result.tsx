import { ChatEntry } from "./searchBar";

interface ResultProps {
  result: ChatEntry;
}

function Result(props: ResultProps) {
  const { searchText, responseText } = props.result;
  return (
    <div className="flex flex-col gap-2 my-2">
      {searchText && (
        <div className="self-end bg-blue-100 text-blue-900 px-4 py-2 rounded-xl max-w-[95%]">
          {searchText}
        </div>
      )}
      {responseText && (
        <div className="self-start bg-gray-100 text-gray-900 px-4 py-2 rounded-xl max-w-[95%]">
          {responseText}
        </div>
      )}
    </div>
  );
}

export default Result;
