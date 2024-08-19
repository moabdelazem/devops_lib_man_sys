import "./App.css";
import { useEffect, useState } from "react";
import { BooksList } from "./components/BooksList";
import { AddNewBooks } from "./components/AddNewBooks";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const addBook = async (newBook) => {
    try {
      const response = await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });
      if (response.ok) {
        const addedBook = await response.json();
        setBooks([...books, addedBook]);
      } else {
        console.error("Failed to add book");
      }
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <>
      <div>
        <header className="py-2 px-2">
          <h1 className="text-xl font-semibold">Library Management System</h1>
        </header>
        <main>
          <AddNewBooks addBook={addBook} />
          <BooksList booksData={books} />
        </main>
      </div>
    </>
  );
}

export default App;
