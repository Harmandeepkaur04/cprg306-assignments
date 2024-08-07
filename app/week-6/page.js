"use client"
import { useState } from "react";
import ItemList from "./item-list";
import itemsData from "./items.json"
import NewItem from "./new-item";



export default function page(){
  const [items, setItems] = useState(
    itemsData.map((item) => ({...item})));
    const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items,item]);
  };
  const handleItemSelect = (item) => {
    const cleanName = item.name.split(",")[0].trim();
    setSelectedItemName(cleanName);
  };
    return(
      
        <main>
          <h1 className="text-3xl font-bold m-2" >Shopping List</h1>
          <NewItem onHandleAddItem={handleAddItem} />
          <ItemList items ={items} onItemSelect={handleItemSelect}/>
      </main>
    );
  }