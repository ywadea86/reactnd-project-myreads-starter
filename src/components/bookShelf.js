//import React from "react"
import React from 'react'
//import * as BooksAPI from '../BooksAPI'

import Books from './books';

const bookShelf = (props)=>{

  //const curentlyBook = props.books.map(current=>current.shelf)
//console.log(curentlyBook);

return<> <div className="bookshelf">
<h2 className="bookshelf-title">currently Reading</h2>
<div className="bookshelf-books">
  <ol className="books-grid">
  { props.books.map((books)=>

    books.shelf==="currentlyReading"&&
    <Books key={books.id} books={books}/>

    )
  }
  </ol>
</div>
</div>

<div className="bookshelf">
<h2 className="bookshelf-title">Want To Reading</h2>
<div className="bookshelf-books">
  <ol className="books-grid">
  { props.books.map((books)=>

    books.shelf==="wantToRead"&&
    <Books key={books.id} books={books}/>

    )
  }
  </ol>
</div>
</div>

<div className="bookshelf">
<h2 className="bookshelf-title"> Read</h2>
<div className="bookshelf-books">
  <ol className="books-grid">
  { props.books.map((books)=>

    books.shelf==="read"&&
    <Books key={books.id} books={books}/>

    )
  }
  </ol>
</div>
</div>
</>
}
export default bookShelf;