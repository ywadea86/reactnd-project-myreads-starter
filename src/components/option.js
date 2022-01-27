import React from "react"
import * as BooksAPI from '../BooksAPI'

const option = (props)=>{
    const handleShelf=async (e)=>{

        //console.log(props);
        await BooksAPI.update(props.book,e.target.value);

        window.location.reload();
    }

    //shelfsType=[]
//const [allBook,setAllBook] =useState([{}])
// useEffect(()=>{
//   BooksAPI.getAll().then(data=>setAllBook(data));
//  // console.log(allBook)
// },[])

    return <div className="book-shelf-changer">
    <select onChange={handleShelf} >
      <option key={props.id} value="move" defaultValue  disabled>Move to...</option>
      <option  key={props.id} value="currentlyReading">Currently Reading</option>
      <option  key={props.id} value="wantToRead">Want to Read</option>
      <option  key={props.id} value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
}
export default option
