"use client"
import itemsData from "./items.json"

import { useState } from "react";
import Item from "./item";



export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");

  const handleSortByName = () => setSortBy("name");
  const handleSortByCategory = () => setSortBy("category");
    
    let sortedItems = [...itemsData];
    if (sortBy === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }

  return (
    <div>
    <section className="flex mb-5 px-10 py-5 bg-pink-700">
      <div>
        <label>Sort By:</label>
      </div>
      <button className=" bg-blue-700 hover:bg-blue-400 py-1 m-1 w-28"  onClick={handleSortByName}>Name</button>
      <button className=" bg-blue-700 hover:bg-blue-400 p-1 m-1 w-28" onClick={handleSortByCategory}>Category</button>
      </section>
    <section className=" p-2 m-4 bg-slate-900 max-w-sm">
      {sortedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  </div>
);
}
