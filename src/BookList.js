import { Book } from './Book';

export function BookList({ bookList }) {

  return (
    <div>
      <div className='book-list'>
        {bookList.map((bk, index) => (
          <Book book={bk} key={index} id={index} />
        ))}

      </div>
    </div>
  );
}
