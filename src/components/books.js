import React from "react"
import Option from "./option"
const books =(props)=>{
    return <li>
    <div className="book">
      <div className="book-top">
     {
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.books.hasOwnProperty("imageLinks")?props.books.imageLinks.thumbnail:""})` }}>
       </div>
       // console.log(props.books.imageLinks.thumbnail)
     }
        <Option key={props.books.id} book={props.books} shelf={props.books.shelf} />
      </div>
      <div className="book-title">{props.books.title}</div>
      <div className="book-authors">{props.books.authors}</div>
    </div>
  </li>
}
export default books
