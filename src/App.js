import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookShelf from "./components/bookShelf";
import Books from "./components/books";

const BooksApp = () => {
  const [searchUserInput, setSearchUserInput] = useState({
    slug: "",
    books: [],
  });
  useEffect(() => {
    //console.log(searchUserInput.res.error);
    if (searchUserInput.slug !== "") {
      const timeoutId = setTimeout(() => {
        const fetch = async () => {
          try {
            const res = await BooksAPI.search(`${searchUserInput.slug}`);
            setSearchUserInput({ ...searchUserInput, res });
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [searchUserInput]);
  const [allBook, setAllBook] = useState([{}]);
  useEffect(() => {
    BooksAPI.getAll().then((data) => setAllBook(data));
  }, []);
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
              {searchUserInput.res && (
                <>
                  {searchUserInput.res.map &&
                    searchUserInput.res.map((books) => (
                      <>
                        {" "}

                        <Books key={books.id} books={books} />
                      </>
                    ))}
                </>
              )}
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
