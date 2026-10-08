function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search books by title or author..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;