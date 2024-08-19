import { useState } from "react";

export const AddNewBooks = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [isBorrowed, setIsBorrowed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && year && genre) {
      const newBook = {
        id: Date.now(), // Generate a unique ID based on timestamp
        title,
        author,
        year: parseInt(year, 10), // Convert year to integer
        genre,
        isBorrowed: isBorrowed,
      };
      console.log(newBook);
      addBook(newBook);
      setTitle("");
      setAuthor("");
      setYear("");
      setGenre("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter book title"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter author name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="year"
          className="block text-sm font-medium text-gray-700"
        >
          Year
        </label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter publication year"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="genre"
          className="block text-sm font-medium text-gray-700"
        >
          Genre
        </label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter genre"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Book
      </button>
    </form>
  );
};
