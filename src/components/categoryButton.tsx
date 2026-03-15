import React from "react";
import { mockCategories } from "../data/mockCategories";

function getCategories() {
  return mockCategories;
}

export default function CategoryButton() {
  const categories = getCategories();

  return <div></div>;
}
