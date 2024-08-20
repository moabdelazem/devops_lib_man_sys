import React, { useState } from "react";

const BorrowedBooks = ({ borrowedBooks, returnBook }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = borrowedBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReturnBook = (bookId) => {
    if (window.confirm("Are you sure you want to return this book?")) {
      returnBook(bookId);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Borrowed Books</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      {filteredBooks.length === 0 ? (
        <p className="text-gray-600">No books have been borrowed.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="p-4 border-b border-stone-200 border-gray-300 rounded-md shadow-sm"
            >
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-700">Author: {book.author}</p>
              <p className="text-gray-700">Year: {book.year}</p>
              <p className="text-gray-700">Genre: {book.genre}</p>
              <button
                onClick={() => handleReturnBook(book.id)}
                className="my-4 transition-all text-white bg-red-500 hover:bg-red-700 font-bold py-2 px-4 rounded"
              >
                Return Book
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BorrowedBooks;