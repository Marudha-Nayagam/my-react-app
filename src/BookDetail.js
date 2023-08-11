import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState, useEffect } from 'react';
import { API } from './global';

export function BookDetail({ bookList }) {
  const { bookid } = useParams();
  // const book = bookList[bookid];
  const navigate = useNavigate()

  const [ book, setBook] = useState({})
  useEffect(() =>{
    fetch(`${API}/books/${bookid}`,{
      method: "GET",
    })
    .then(res => res.json())
    .then( bk => {setBook(bk)
    console.log(bk)})
    }, [])
  return(
    
     <div>
      <iframe width="100%" height="500" 
       src={book.trailer} 
       title="The Secret Full Movie In English Law Of Attraction Full HD Original  Full Uncut Movie  Secret 2020" 
       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowfullscreen></iframe>
     
      <div className='container-book-detail'>
        <div className='book-spec'>
          <h2 className='bood-name'>{book.name}</h2>
          <p className='book-rating' > ⭐ {book.rating} </p>
      </div>
          <p className='book-summary'> {book.summary} </p> 
    </div>
    <Button 
     variant="outlined" 
     startIcon={<NavigateBeforeIcon />}
     onClick={() => navigate(-1)}
    >
      BACK
    </Button>
    </div>
   
    );
    }

