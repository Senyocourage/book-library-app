import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import SearchBar from "./components/SearchBar";
import initialBooks from "./data/books";
import CategoryFilter from "./components/CategoryFilter";
import AddBookForm from "./components/AddBookForm";

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(books.map((book) => book.category))],
    [books]
  );

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const search = searchTerm.trim().toLowerCase();

    if (!search) {
      return matchesCategory;
    }

    const title = book.title.toLowerCase();
    const author = book.author.toLowerCase();

    return matchesCategory && (title.includes(search) || author.includes(search));
  });

  const handleAddBook = (newBook) => {
    setBooks((currentBooks) => [...currentBooks, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks((currentBooks) =>
      currentBooks.filter((book) => book.id !== id)
    );
  };

  const handleToggleFavourite = (id) => {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === id ? { ...book, favourite: !book.favourite } : book
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">My Library</h2>
          <p className="text-gray-600 mt-2">
            Manage and explore your favourite books.
          </p>
        </div>

        <AddBookForm onAddBook={handleAddBook} />

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <BookList
          books={filteredBooks}
          onDeleteBook={handleDeleteBook}
          onToggleFavourite={handleToggleFavourite}
        />
      </main>
    </div>
  );
}

export default App;
