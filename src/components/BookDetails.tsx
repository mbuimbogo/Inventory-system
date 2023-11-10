import React, { useEffect, useState } from "react";

interface Book {
  title: string;
  author: string;
  year: number;
  genre: string;
  isbn: string;
  quantity: number;
}

interface BookDetailsProps {
  book: Book;
  onUpdate: (updatedBook: Book) => void;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book, onUpdate }) => {
  const [editedBook, setEditedBook] = useState<Book>(book);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEditedBook((prevBook) => ({
      ...prevBook,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setEditedBook(book);
  }, [book]);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(editedBook);
  };

  return (
    <div className="max-w-md mx-auto absolute p-4 bg-gray-400 inset-0 h-fit mt-12 shadow-md rounded-md z-10">
      <h2 className="text-xl font-semi-bold mb-4"> Edit Book Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="Title" className="block text-sm font-medium mb-2">
            Book Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={editedBook.title}
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
            value={editedBook.author}
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
            value={editedBook.year}
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
            value={editedBook.genre}
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
            value={editedBook.isbn}
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
            value={editedBook.quantity}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Save edits
        </button>
      </form>
    </div>
  );
};

export default BookDetails;
