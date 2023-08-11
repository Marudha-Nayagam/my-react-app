import { Book } from './Book';
import { useState, useEffect } from 'react';
import { API } from './global';

export function BookList() {
  const [ bookList, setBookList] = useState([])
  useEffect(() =>{
    fetch(`${API}/books`,{
      method: "GET",
    })
    .then(res => res.json()) 
    .then( bks => {setBookList(bks)
    console.log(bks)})
    }, [])

  return (
    <div>
      <div className='book-list'>
        {bookList.map((bk, index) => (
          <Book book={bk} key={bk.id} id={bk.id} />
        ))}

      </div>
    </div>
  );
}
