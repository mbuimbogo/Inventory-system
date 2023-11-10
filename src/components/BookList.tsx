import React from "react";

interface Book {
  title: string;
  author: string;
  year: number;
  genre: string;
  isbn: string;
  quantity: number;
}

interface BookListProps {
    books: Book[];
    onSelectBook: (book: Book) => void;
    onEditBook: (book: Book) => void;
    onDeleteBook: (book: Book) => void;
  }

  const BookList: React.FC<BookListProps> = ({ books, onSelectBook, onEditBook, onDeleteBook }) => {
    return (
    <div className="overflow-x-auto">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Genre</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISBN</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book, index) => (
            <tr key={index} onClick={() => onSelectBook(book)}>
              <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.author}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.year}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.genre}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.isbn}</td>
              <td className="px-6 py-4 whitespace-nowrap">{book.quantity}</td>
              <td >
                <button onClick={(e) => { e.stopPropagation(); onEditBook(book); }} className="mr-3">Edit</button>
                <button onClick={(e) => { e.stopPropagation(); onDeleteBook(book); }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
