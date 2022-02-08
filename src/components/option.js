import React from "react";
import * as BooksAPI from '../BooksAPI'

const Option = (props)=>{
    const handleShelf=async (e)=>{
        await BooksAPI.update(props.book,e.target.value);
        window.location.reload();
    }


    return<>
    {props.hasOwnProperty("shelf")?
    <div className="book-shelf-changer">
        <select onChange={handleShelf} defaultValue={props.shelf}>
          <option key={props.id} value="move" disabled>Move to...</option>
          <option key={props.id} value="currentlyReading">Currently Reading</option>
          <option key={props.id} value="wantToRead">Want to Read</option>
          <option key={props.id} value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>:<div className="book-shelf-changer">

      <select onChange={handleShelf} defaultValue={props.shelf}>
        <option key={props.id} value="move" disabled>Move to...</option>
        <option key={props.id} value="currentlyReading">Currently Reading</option>
        <option key={props.id} value="wantToRead">Want to Read</option>
        <option key={props.id} value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
    }
    </>

}
export default Option
