import React, { useRef, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';

const App = () => {
  const [ip, setIp] = useState(""); // input value
  const [books, setBooks] = useState([]); // all books or matched books
  const [notFound, setNotFound] = useState(false); // flag if no book found
  const bbtn = useRef();

  const getData = async () => {
    bbtn.current.focus();
    try {
      // Fetch books from OpenLibrary API (author Tolkien as example)
      const response = await axios.get(
        "https://openlibrary.org/search.json?author=tolkien&sort=new"
      );
      const allBooks = response.data.docs;

      if (!ip.trim()) {
        // If input is blank, show all books
        setBooks(allBooks);
        setNotFound(false);
      } else {
        // Case-insensitive partial match
        const matchedBooks = allBooks.filter((book) =>
          book.title.toLowerCase().includes(ip.trim().toLowerCase())
        );

        if (matchedBooks.length > 0) {
          setBooks(matchedBooks); // show matched books
          setNotFound(false);
        } else {
          setBooks([]); // no books to display
          setNotFound(true);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="m-4">
        {/* Input field */}
        <input
          type="text"
          placeholder="Enter book title"
          value={ip}
          ref={bbtn}
          onChange={(e) => setIp(e.target.value)}
          className="border p-2 rounded-md mt-[15vh] w-[90vw]"
        />

        {/* Search button */}
        <div className='flex justify-center items-center'>
          <button
            onClick={getData}
            ref={bbtn}
            className="btn ml-2 px-4 py-2 bg-green-300 rounded mt-[5vh] flex justify-center items-center text-black"
          >
            Search Book
          </button>
        </div>

        {/* Books display */}
        <div className="cardcontainer mt-6 flex h-100vh px-[7vw] gap-5 flex-wrap">
          {books.map((book, idx) => (
            <div key={idx} className="card p-4 border rounded-lg bg-yellow-200 mb-4 w-[25vw] h-[50vh]">
              <h1 className="font-bold text-lg">{book.title}</h1>
              <h2>{book.author_name?.join(", ") || "Unknown Author"}</h2>
              <p>Author Key: {book.author_key?.join(", ") || "N/A"}</p>
              <p>First published: {book.first_publish_year || "N/A"}</p>
              <p>Publisher: {book.publisher?.join(", ") || "N/A"}</p>
              <p>Edition count: {book.edition_count}</p>
              <p>Ebook access: {book.ebook_access}</p>
              <p>Language: {book.language?.join(", ") || "N/A"}</p>
            </div>
          ))}

          {/* Show "No book found" only after clicking search and no match */}
          {notFound && <p>No book found with this title.</p>}
        </div>
      </div>
    </>
  );
};

export default App;
