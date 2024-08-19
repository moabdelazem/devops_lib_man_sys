import "./App.css";
import { useEffect, useState } from "react";
import { BooksList } from "./components/BooksList";
import { AddNewBooks } from "./components/AddNewBooks";
import BorrowedBooks from "./components/BorrowedBooks";

function App() {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
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

  const borrowBook = async (bookId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/books/borrow/${bookId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json", // Ensure the response is JSON
            "Access-Control-Allow-Origin": "*", // Add CORS header
          },
        }
      );
      if (response.ok) {
        const updatedBook = await response.json();
        setBooks(
          books.map((book) => (book.id === bookId ? updatedBook : book))
        );
        setBorrowedBooks([...borrowedBooks, updatedBook]);
      } else {
        console.error("Failed to borrow book");
      }
    } catch (error) {
      console.error("Error borrowing book:", error);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/books/${bookId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setBooks(books.filter((book) => book.id !== bookId));
      } else {
        console.error("Failed to delete book");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const returnBook = async (bookId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/books/return/${bookId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json", // Ensure the response is JSON
            "Access-Control-Allow-Origin": "*", // Add CORS header
          },
        }
      );
      if (response.ok) {
        const updatedBook = await response.json();
        setBooks(
          books.map((book) => (book.id === bookId ? updatedBook : book))
        );
        setBorrowedBooks(borrowedBooks.filter((book) => book.id !== bookId));
      } else {
        console.error("Failed to return book");
      }
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/books");
      const data = await response.json();
      setBooks(data);
      // Filter borrowed books from the fetched data, if you have a way to determine this
      const borrowed = data.filter((book) => book.isBorrowed); // Example filter condition
      setBorrowedBooks(borrowed);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <>
      <div>
        <header className="py-12 px-8 shadow my-4 rounded-xl">
          <h1 className="text-5xl font-semibold">Library Management System</h1>{" "}
        </header>{" "}
        <main className="space-y-8">
          {" "}
          <AddNewBooks addBook={addBook} />
          <hr />
          <BooksList
            booksData={books}
            deleteBook={deleteBook}
            borrowBook={borrowBook}
          />
          <hr />
          <BorrowedBooks
            borrowedBooks={borrowedBooks}
            returnBook={returnBook}
          />
        </main>
      </div>
    </>
  );
}

export default App;
