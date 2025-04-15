import { ChangeEvent, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Result from './result';  

export default function SearchBar() {
  const [searchText, setSearchText] = useState<string>('');
  const [searchResultMap, setSearchResultMap] = useState<Map<string, string>>(new Map<string, string>());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.example.com/search?query=${searchText}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResultMap(searchResultMap.set(searchText, data.result));
      console.log('Search result:', data.result);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log('Search text:', searchText); 

  return (
    <div>
      <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 1000, alignSelf: 'center', marginTop: 2 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search from Architek.AI"
          inputProps={{ 'aria-label': 'Search from Architek.AI' }}
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
      <Result result={searchResultMap.get(searchText) || ''} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
    
  );
}
