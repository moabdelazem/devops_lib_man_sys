import React from "react";

export const BooksList = ({ booksData, deleteBook, borrowBook }) => {
  return (
    <>
      <h1 className="my-4 text-xl font-semibold">Available Books</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font- text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Year
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Genre
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {booksData.map((book) => (
            <tr key={book.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 font-bold">{book.title}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{book.author}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{book.year}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{book.genre}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {book.isBorrowed ? "Borrowed" : "Available"}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex justify-between gap-4">
                  <button
                    className={`transition-all text-blue-500 border border-blue-300 hover:text-white hover:bg-blue-700  font-bold py-2 px-4 rounded ${book.isBorrowed ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => deleteBook(book.id)}
                    disabled={book.isBorrowed ? true : false}
                  >
                    Delete
                  </button>
                  <button
                    className={`transition-all border font-bold py-2 px-4 rounded bg-stone-100 hover:bg-stone-500 hover:text-white transtion-all ${book.isBorrowed ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => borrowBook(book.id)}
                    disabled={book.isBorrowed ? true : false}
                  >
                    Borrow
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
