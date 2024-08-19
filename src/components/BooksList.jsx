import React from "react";

export const BooksList = ({ booksData, deleteBook, borrowBook }) => {
  return (
    <>
      <h1 className="my-4 text-xl font-semibold">Available Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {booksData.map((book) => (
          <div
            key={book.id}
            className={`${
              book.isBorrowed
                ? "bg-stone-100"
                : "bg-white hover:bg-gray-100 cursor-pointer"
            } shadow-md rounded-lg p-4  `}
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {book.title}
            </h2>
            <p className="text-gray-600">by {book.author}</p>
            <p className="text-gray-500 text-sm">{book.year}</p>
            <p className="text-gray-500 text-sm">{book.genre}</p>
            <p className="text-gray-500 text-sm">
              Status: {book.isBorrowed ? "Borrowed" : "Available"}
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteBook(book.id)}
                disabled={book.isBorrowed ? true : false}
              >
                Delete
              </button>
              <button
                className="border font-bold py-2 px-4 rounded"
                onClick={() => borrowBook(book.id)}
                disabled={book.isBorrowed ? true : false}
              >
                Borrow
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
