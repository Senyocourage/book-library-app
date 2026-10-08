function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 border border-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;