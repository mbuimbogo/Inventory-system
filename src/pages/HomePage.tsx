import React, { useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import BookDetails from "../components/BookDetails";
import ConfirmationModal from "../components/ConfirmationModal";

interface Book {
  title: string;
  author: string;
  year: number;
  genre: string;
  isbn: string;
  quantity: number;
  status: 'Pending' | 'Verified by Storekeeper' | 'Verified by Librarian';
}

const HomePage: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null);

  const [books, setBooks] = useState<Book[]>(() => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      return JSON.parse(savedBooks);
    }
    return [];
  });
  
  const handleAddBook = (newBook: Book) => {
    setBooks((prevBooks) => {
        //use isbn to check if similar book exists
      const bookExists = prevBooks.find((book) => book.isbn === newBook.isbn);
      if (bookExists) {
        alert('A book with the same isbn already exists');
        return prevBooks;
      }
  
      const updatedBooks = [...prevBooks, newBook];
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      return updatedBooks;
    });
  };
  
  

const handleUpdateBook = (updatedBook: Book) => {

    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((book) =>
        book.title === updatedBook.title ? updatedBook : book
      );
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      return updatedBooks;
    });
    setSelectedBook(null);
  };
  
const handleDeleteBook = () => {
    if (!bookToDelete) return;

    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.filter((book) => book.title !== bookToDelete.title);
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      return updatedBooks;
    });

    setShowConfirmationModal(false);
  };

  const handleStorekeeperApproval = (bookToApprove: Book) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((book) =>
        book.isbn === bookToApprove.isbn ? { ...book, status: 'Verified by Storekeeper' } : book
      );
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      return updatedBooks;
    });
  };
  
  const handleLibrarianApproval = (bookToApprove: Book) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.map((book) =>
        book.isbn === bookToApprove.isbn ? { ...book, status: 'Verified by Librarian' } : book
      );
      localStorage.setItem('books', JSON.stringify(updatedBooks));
      return updatedBooks;
    });
  };
  
  

  return (
    <div>
      <BookForm onAddBook={handleAddBook} />
      <BookList
        books={books}
        onSelectBook={(book) => setSelectedBook(book)}
        onEditBook={(book)=>handleUpdateBook(book)}
        onDeleteBook={(book)=> {setBookToDelete(book);
        setShowConfirmationModal(true);
        
        }}
        onStorekeeperApproval={handleStorekeeperApproval}
        onLibrarianApproval={handleLibrarianApproval}
      />
      {selectedBook && (
        <BookDetails book={selectedBook} onUpdate={handleUpdateBook} />
      )}
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onConfirm={(handleDeleteBook)}
      />
    </div>
  );
};

export default HomePage;
