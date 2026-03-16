"use client";

import { useSearchParams } from "next/navigation";
import { mockCategories } from "../../../data/mockCategories";
import "./categoryButton.css";
import Link from "next/link";

function getCategories() {
  return mockCategories;
}

export default function CategoryButton() {
  const data = getCategories();
  const categories = data.categories;
  const searchParams = useSearchParams();
  const currentCategoryId = Number(searchParams.get("category_id")) || 0;

  return (
    <div className="categorySection">
      {categories.map((category) => {
        const href =
          category.category_id === 0
            ? "/"
            : `/?category_id=${category.category_id}`;

        return (
          <Link
            href={href}
            scroll={false}
            key={category.category_id}
            className={
              category.category_id === currentCategoryId ? "active" : ""
            }
          >
            <button>{category.name}</button>
          </Link>
        );
      })}
    </div>
  );
}
