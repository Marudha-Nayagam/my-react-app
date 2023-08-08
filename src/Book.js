import { Counter } from './Counter';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


export function Book({ book, id }) {
  const navigate = useNavigate();
  const styles = {
    color: book.rating > 8 ? "green" : "red"
  };
  const [show, setShow] = useState(true);

  // const summaryStyles = {
  //   display : show ? "block" : "none"
  // }
  return (
    <div className='book-container'>
      <img src={book.poster} className='book-poster' alt={book.name} />
      <div className='book-spec'>
        <h2 className='bood-name'>{book.name} - {id}</h2>
        <p className='book-rating' style={styles}> ⭐ {book.rating} </p>
      </div>
      <IconButton
        aria-label="delete"
        onClick={() => setShow(!show)}
        color='primary'
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      {/* <button onClick={() => setShow(!show)}>Toggle Description</button> */}
      <IconButton
        aria-label="delete"
        onClick={() => navigate("/books/" + id)}
        color='primary'
      >
        <InfoIcon />
      </IconButton>

      {/* <button onClick={() => navigate("/books/" + id) } >Info</button> */}
      {/* conditional styling */}

      {/* <p className='book-summary' style={summaryStyles} > {book.summary} </p> */}
      {/* conditional rendering */}
      {show ? <p className='book-summary'> {book.summary} </p> : ""}
      <Counter />
    </div>
  );
}
