
import './App.css';
import { Addcolor } from './Addcolor';
import { useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import { Users } from './Users';
import { Home } from './Home';
import DeleteIcon from '@mui/icons-material/Delete';
import { BookList } from './BookList';
import { BookDetail } from './BookDetail';
import { AddBook } from './AddBook';

const INITAIL_BOOK_LIST = [
  {
  name: "The Great Gatsby",
  poster: "https://m.media-amazon.com/images/I/71ptoyWH8dL._AC_UF1000,1000_QL80_.jpg",
  rating: 7.2,
  trailer:"https://www.youtube.com/embed/U4SyqtoBkdE",
  summary: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan",
  },
  {
    name:"Attitude is everything",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    trailer:"https://www.youtube.com/embed/375BfMyAiII" ,
    summary: "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes."

  },
  {
    name: "The Secret",
    poster:"https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    rating: 8.8,
    trailer:"https://www.youtube.com/embed/Ma_qMbvTpzo",
    summary:"There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue"
  },
  {
    name:"Discover Your Destiny",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
    rating: 6,
    trailer:"https://www.youtube.com/embed/pcOwJsRWTlE",
    summary:"'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside."
  },
  {
    name:"The 5 AM Club",
    poster:"https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating:8.6,
    trailer:"https://www.youtube.com/embed/wn7Qlj_0-2Y",
    summary:"In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success."
  },
  {
    name: "The power is within you",
    poster: "https://play-lh.googleusercontent.com/1aghoDaz52K3bbZA3EJGHvEpgaru4uMC3Ud2ik_EAW7SjNLwK7nXxOp_Uad-3L6Ovvg4C2-_d1kqVg=w480-h690-rw",
    rating: 9,
    trailer:"https://www.youtube.com/embed/wi56tol4CJ8",
    summary: "Louise expands on her philosophy of \"loving the self\" and shows you how to overcome emotional barriers through learning to listen to your inner voice, loving the child within, letting your true feelings out, and much more!",
  },
  {
    name: "elon musk: tesla, spacex, and the quest for a fantastic future",
    poster: "https://rukminim1.flixcart.com/image/832/832/kplisnk0/book/l/l/t/elon-musk-original-imag3shevuu2d9qq.jpeg?q=70",
    rating: 9.8,
    trailer:"https://www.youtube.com/embed/OAy1Hory7GE",
    summary:  "elon musk: tesla, spacex, and the quest for a fantastic future",
  },
  {
    name: "Charlotte's web  Charlotte's ",
    poster:"https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    trailer:"https://www.youtube.com/embed/TgsD-xdJdoM",
    summary: "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live."
  }

]

function App() {
  const [ bookList, setBookList] = useState(INITAIL_BOOK_LIST)
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/books'>BookList</Link></li>
          <li><Link to='/add-color'>Addcolor</Link></li>
          <li><Link to='/profile'>Users</Link></li>
          <li><Link to='/books/add' >AddBook</Link></li>
          <li><Link to='/somewhere' >Somewhere</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/books' element={ <BookList bookList={bookList}  />} />
        <Route path='/books/:bookid' element={ <BookDetail bookList={bookList}  />} />
        <Route path='/add-color' element={ <Addcolor />} />
        <Route path='/profile' element={ < Users /> }  />
        <Route path='/books/add' element={ < AddBook bookList={bookList} setBookList={setBookList} /> }  />
        <Route path='/novel' element={<Navigate replace to="/books"  />} />
        <Route path='/404' element={ <PageNotFound /> } />
        <Route path='*' element={ <Navigate replacet to="/404" /> } />

      </Routes>
    </div>
  );
}

function PageNotFound(){
  return(
    <div className='not-found'>
      <img width="750" 
      src='https://i.pinimg.com/originals/90/fb/43/90fb4379e62ef4104a0bd58bae82fe35.gif' alt='404 not found' />
    </div>
  )
}



export default App;
