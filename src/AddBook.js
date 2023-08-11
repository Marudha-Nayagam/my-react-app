import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export function AddBook({ bookList, setBookList }) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const navigate  = useNavigate()
  return (
    <div>
      <div className='add-book-form'>
        <h2>Form for Add Book</h2>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)} 
          required />

        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={poster}
          onChange={(event) => setPoster(event.target.value)} 
          required />

        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          required />

        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={summary}
          onChange={(event) => setSummary(event.target.value)} 
          required />

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
            navigate("/books")
          }}
        >Add Book</Button>

      </div>
    </div>
  );
}
