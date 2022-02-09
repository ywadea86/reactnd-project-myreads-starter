import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./components/bookShelf";
import Books from "./components/books";

const BooksApp = () => {
  const [allBook, setAllBook] = useState([{}]);
  useEffect(() => {
    BooksAPI.getAll().then((data) => setAllBook(data));
  }, []);
  const [searchUserInput, setSearchUserInput] = useState({slug: ""});

  useEffect(() => {
   // if (searchUserInput.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            let res = await BooksAPI.search(`${searchUserInput.slug}`);
            //console.log(searchUserInput.slug)
            if(searchUserInput.slug === ""){
              res=[];
            setSearchUserInput({ ...searchUserInput, res });
          }else{
            const filterData = res.map((data)=>data.id);
            const filterbook = allBook.filter(data=>filterData.includes(data.id));
            const filterBookID = filterbook.map((data)=>data.id);
                            res = filterbook.concat(res.filter((data) => !filterBookID.includes(data.id)));
            setSearchUserInput({ ...searchUserInput, res });

          }
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);
      return () => clearTimeout(timeoutId);

  }, [allBook, searchUserInput, searchUserInput.res]);

  const [state, setState] = useState({ showSearchPage: false });
  //console.log(searchUserInput);
  return (
    <div className="app">
      {state.showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <button
              className="close-search"
              onClick={() => setState({ showSearchPage: false })}
            >
              Close
            </button>
            <div className="search-books-input-wrapper">
              <input
                value={searchUserInput.slug}
                onChange={(e) =>
                  setSearchUserInput({
                    ...searchUserInput,
                    slug: e.target.value,
                  })
                }
                type="text"
                placeholder="Search by title or author"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                  {searchUserInput.hasOwnProperty("res")  &&
                    searchUserInput.res.map((books) => (
                        <Books key={books.id} books={books} />
                    ))}
            </ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf key={allBook.id} books={allBook} />)
            </div>
          </div>
          <div className="open-search">
            <button onClick={() => setState({ showSearchPage: true })}>
              Add a book
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksApp;
