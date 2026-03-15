"use client";

import { useState } from "react";
import { mockCategories } from "../data/mockCategories";
import "./categoryButton.css";

function getCategories() {
  return mockCategories;
}

export default function CategoryButton() {
  const data = getCategories();
  const categories = data.categories;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="categorySection">
      {categories.map((category, index) => (
        <div
          className={index === selectedIndex ? "active" : ""}
          key={category.category_id}
          onClick={() => setSelectedIndex(index)}
        >
          <button>{category.name}</button>
        </div>
      ))}
    </div>
  );
}
