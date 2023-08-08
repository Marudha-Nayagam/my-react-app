import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddBook({ bookList, setBookList }) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div>
      <div className='add-book-form'>
        <h2>Form for Add Book</h2>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)} />

        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={poster}
          onChange={(event) => setPoster(event.target.value)} />

        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={rating}
          onChange={(event) => setRating(event.target.value)} />

        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={summary}
          onChange={(event) => setSummary(event.target.value)} />

        <Button
          variant="contained"
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            setBookList([...bookList, newBook]);
          }}
        >Add Book</Button>

      </div>
    </div>
  );
}
