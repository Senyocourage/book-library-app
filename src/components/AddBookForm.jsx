import { useState } from "react";

function AddBookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      author,
      category,
      year,
      description: "A new book in your library.",
      image:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
      favourite: false,
    };

    onAddBook(newBook);

    setTitle("");
    setAuthor("");
    setCategory("");
    setYear("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-sm mb-8"
    >
      <h2 className="text-xl font-bold mb-4">
        Add New Book
      </h2>

      <div className="grid gap-4">

        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          placeholder="Publication year"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          className="border p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Add Book
        </button>

      </div>
    </form>
  );
}

export default AddBookForm;