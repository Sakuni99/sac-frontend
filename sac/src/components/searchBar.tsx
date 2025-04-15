import { ChangeEvent, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  const [searchText, setSearchText] = useState<string>('');
  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  console.log('Search text:', searchText); // Log the search text to the console
  return (
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
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
