import React from "react";

function CategoryFilter( {categories, selectedCategory, onCategoryChange} ) {
  return (
    <div className="categories">
      <h5>Category filters</h5>

      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button 
          key={category} 
          id={category}
          class={selectedCategory === category? "selected" :"" }
          onClick={onCategoryChange}
        >
          {category}
        </button>
      ))}

    </div>
  );
}

export default CategoryFilter;
