// app/week-10/shopping-list/item-list.js
"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const handleSortByName = () => setSortBy("name");
  const handleSortByCategory = () => setSortBy("category");

  const sortedItems = [...items];
  if (sortBy === "name") {
    sortedItems.sort((a, b) => {
      if (a.name && b.name) {
        return a.name.localeCompare(b.name);
      }
      return 0; // or handle missing names as needed
    });
  } else if (sortBy === "category") {
    sortedItems.sort((a, b) => {
      if (a.category && b.category) {
        return a.category.localeCompare(b.category);
      }
      return 0; // or handle missing categories as needed
    });
  }

  return (
    <div>
      <section className="flex mb-5 px-10 py-5 bg-pink-700">
        <div>
          <label>Sort By:</label>
        </div>
        <button
          className=" bg-blue-700 hover:bg-blue-400 py-1 m-1 w-28"
          onClick={handleSortByName}
        >
          Name
        </button>
        <button
          className=" bg-blue-700 hover:bg-blue-400 p-1 m-1 w-28"
          onClick={handleSortByCategory}
        >
          Category
        </button>
      </section>
      <section className=" p-2 m-4 bg-slate-900 max-w-sm">
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => (
            <Item key={item.id} item={item} onSelect={onItemSelect} />
          ))
        ) : (
          <div>No items available</div>
        )}
      </section>
    </div>
  );
}
