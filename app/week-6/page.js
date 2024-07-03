"use client"
import { useState } from "react";
import NewItem from "../week-4/new-item";
import ItemList from "./item-list";
import itemsData from "./items.json"



export default function page(){
  const [items, setItems] = useState(
    itemsData);

  const handleAddItem = (newItem) => {
    setItems((items)=>[...items, newItem]);
  }
    return(
      
        <main>
          <h1 className="text-3xl font-bold m-2" >Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items ={items}/>
      </main>
    );
  }