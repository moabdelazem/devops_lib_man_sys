import React from "react";

const BorrowedBooks = ({ borrowedBooks, returnBook }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p className="text-gray-600">No books have been borrowed.</p>
      ) : (
        <ul className="space-y-4">
          {borrowedBooks.map((book) => (
            <li
              key={book.id}
              className="p-4 border-b border-stone-200 border-gray-300 rounded-md shadow-sm"
            >
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-700">Author: {book.author}</p>
              <p className="text-gray-700">Year: {book.year}</p>
              <p className="text-gray-700">Genre: {book.genre}</p>
              <button
                onClick={() => returnBook(book.id)}
                className="py-2.5 px-2 border font-semibold rounded-xl my-4"
              >
                Retun Book
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BorrowedBooks;
