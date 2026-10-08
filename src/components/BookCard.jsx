function BookCard({ book, onDeleteBook, onToggleFavourite }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{book.title}</h3>
            <p className="text-gray-500 mt-1">by {book.author}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleFavourite(book.id)}
              className={`text-xl ${book.favourite ? "text-red-500" : "text-gray-400"}`}
              aria-label={book.favourite ? "Remove from favourites" : "Add to favourites"}
            >
              {book.favourite ? "♥" : "♡"}
            </button>

            <button
              type="button"
              onClick={() => onDeleteBook(book.id)}
              className="text-red-500 hover:text-red-700 text-xl"
              aria-label="Delete book"
            >
              🗑️
            </button>
          </div>
        </div>

        <p className="text-sm text-blue-600 mt-3">{book.category}</p>
        <p className="text-gray-600 text-sm mt-3">{book.description}</p>
        <p className="text-gray-400 text-sm mt-4">Published: {book.year}</p>
      </div>
    </div>
  );
}

export default BookCard;