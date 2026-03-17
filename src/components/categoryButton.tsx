"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./categoryButton.css";
import Link from "next/link";
import { Category } from "../types/post";

const ALL_CATEGORY: Category = {
  category_id: 0,
  name: "전체보기",
};

export default function CategoryButton() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        const fetchedCategories: Category[] = Array.isArray(data.categories)
          ? data.categories
          : [];

        const categoriesWithAll = [ALL_CATEGORY, ...fetchedCategories];

        setCategories(categoriesWithAll);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }

    fetchCategories();
  }, []);
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
