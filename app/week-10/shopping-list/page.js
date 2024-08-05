"use client"
import React, { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getAuth } from "firebase/auth";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  async function loadItems() {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const shoppingListItems = await getItems(user.uid);
        setItems(shoppingListItems);
      }
    } catch (error) {
      console.error("Error loading items:", error);
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (item) => {
    if (user) {
      try {
        const newItem = { name: item }; // Adjust based on the structure you need
        const itemId = await addItem(user.uid, newItem);
        setItems([...items, { id: itemId, data: newItem }]);
      } catch (error) {
        console.error("Failed to add item:", error);
      }
    }
  };
  const handleItemSelect = (item) => {
    if (item && item.name) {
      const cleanName = item.name.split(",")[0].trim();
      setSelectedItemName(cleanName);
    } else {
      console.warn("Selected item is missing required information.");
      setSelectedItemName(""); // Clear selected item name if item is invalid
    }
  };
  if (user) {
    return (
      <main>
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <div className="flex">
          <div className="flex-1 max-w-sm m-2">
            <NewItem onHandleAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="flex-1 max-w-sm m-2 p-2">
            {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
          </div>
        </div>
      </main>
    );
  }
  return <div>Loading...</div>;
}
