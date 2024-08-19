import React from "react";

export const BooksList = ({ booksData, deleteBook }) => {
  return (
    <>
      <h1 className="my-4 text-xl font-semibold">Available Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {booksData.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => deleteBook(book.id)}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {book.title}
            </h2>
            <p className="text-gray-600">by {book.author}</p>
            <p className="text-gray-500 text-sm">{book.year}</p>
            <p className="text-gray-500 text-sm">{book.genre}</p>
          </div>
        ))}
      </div>
    </>
  );
};
