import BookCard from "./BookCard";

function BookList({ books, onDeleteBook, onToggleFavourite }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onDeleteBook={onDeleteBook}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
}

export default BookList;