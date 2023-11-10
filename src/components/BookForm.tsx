import React, { useState } from "react";

interface Book {
  title: string;
  author: string;
  year: number;
  genre: string;
  isbn: string;
  quantity: number;
    status: 'Pending' | 'Verified by Storekeeper' | 'Verified by Librarian';

}

interface AddBookProps {
  onAddBook: (book: Book) => void;
}

const BookForm: React.FC<AddBookProps> = ({ onAddBook }) => {
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    year: 0,
    genre: "",
    isbn: "",
    quantity: 0,
    status: 'Pending'
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setBook((prevBook) => ({
      ...prevBook,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBook(book);
    setBook({
      title: "",
      author: "",
      year: 0,
      genre: "",
      isbn: "",
      quantity: 0,
      status: 'Pending'
    });
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-4 shadow-md rounded-md bg-gray-200">
      <h2 className="text-xl font-semi-bold mb-4"> Add New Book Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="Title" className="block text-sm font-medium mb-2">
            Book Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Author" className="block text-sm font-medium mb-2">
            Book Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Year" className="block text-sm font-medium mb-2">
            Year of publishing{" "}
          </label>
          <input
            type="date"
            id="year"
            name="year"
            value={book.year}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Year" className="block text-sm font-medium mb-2">
            Book genre{" "}
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={book.genre}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="isbn" className="block text-sm font-medium mb-2">
            ISBN
          </label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={book.isbn}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Quantity" className="block text-sm font-medium mb-2">
            Number of Books{" "}
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={book.quantity}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
