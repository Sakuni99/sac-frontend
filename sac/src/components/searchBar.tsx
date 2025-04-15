import { ChangeEvent, useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Result from "./result";

export interface ChatEntry {
  searchText?: string;
  responseText?: string;
  timestamp?: number;
}

export default function SearchBar() {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [chatHistory, setChathistory] = useState<ChatEntry[]>([
    {
      searchText:
        "what is the best architecture for a customer management system",
      responseText:
        "Cras ultricies lobortis massa, non consectetur ante accumsan quis. Praesent sed pharetra turpis. Donec neque justo, auctor ut rutrum in, mattis vel sem. Suspendisse id volutpat felis. In id lorem vitae odio feugiat rhoncus consectetur adipiscing elit. Integer eget rutrum velit, nec ultrices odio. Aenean sit amet velit purus. Etiam tincidunt tincidunt rutrum. Aliquam ultricies ante lobortis, tristique mauris eu, venenatis enim. Nulla non convallis odio. Aliquam sit amet scelerisque nisi, nec dignissim velit. Morbi nibh lorem, aliquam vitae velit sit amet, rhoncus faucibus turpis. Donec in leo tincidunt, malesuada lacus a, interdum nunc. Quisque et varius risus, nec dictum eros. Suspendisse ornare, elit vel ultrices tempus, purus magna gravida lorem, tincidunt vehicula lectus tortor ac ante. Praesent congue mollis magna, ut luctus ligula vulputate non. Nam vel metus at eros condimentum ultrices ut in turpis. Sed laoreet lacus ac sem vehicula, a accumsan purus posuere. Praesent facilisis suscipit tempor. Morbi quis sagittis enim. Duis pretium, lectus et dapibus molestie, libero orci mattis quam, eu finibus ligula ipsum sit amet mi. Cras ultricies lobortis massa, non consectetur ante accumsan quis. Praesent sed pharetra turpis. Donec neque justo, auctor ut rutrum in, mattis vel sem. Suspendisse id volutpat felis. In id lorem vitae odio feugia",
      timestamp: 1744715316584,
    },
  ]);

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    const timestamp = Date.now();
    setChathistory((prev) => [
      ...prev,
      {
        searchText,
        timestamp,
        responseText: "hehuhue",
      },
    ]);
    setSearchText("");

    try {
      // const response = await fetch(
      //   `https://api.example.com/search?query=${searchText}`
      // );
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      // const data = await response.json();
      // setChathistory((prev) => [
      //   ...prev,
      //   {
      //     searchText,
      //     responseText: data.result,
      //     timestamp,
      //   },
      // ]);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col overflow-y-auto px-4 py-2">
        {chatHistory.length > 0 &&
          chatHistory.map((item) => (
            <Result key={item.timestamp} result={item} />
          ))}
      </div>
      <div ref={bottomRef} />
      <div
        className="p-2 py-8 bg-white "
        style={{
          position: "fixed",
          bottom: chatHistory.length > 0 ? 0 : "50%", // Position at bottom if chatHistory is not empty, otherwise center
          left: 0,
          width: "100%",
          zIndex: 10,
        }}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            maxWidth: 1000,
            width: "700px",
            margin: "0 auto",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search from Architek.AI"
            inputProps={{ "aria-label": "Search from Architek.AI" }}
            value={searchText}
            onChange={handleSearchTextChange}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={handleSearch}
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
      </div>
    </div>
  );
}
