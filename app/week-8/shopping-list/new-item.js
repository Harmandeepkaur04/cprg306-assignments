"use client"

import { useState } from "react";


export default function NewItem({onHandleAddItem}){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const generateId = (length = 17) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i< length; i++){
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    const handleSubmit =(event) =>{
        //console.dir(event);
        event.preventDefault();
        const newId = generateId();
        const new_item = {id: newId, name, quantity, category};
        onHandleAddItem(new_item);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    // const {name, quantity, category} = onAddItem;

    //console.log(item);
};   


return(
    <div className="display:flex justify-items-start">
    <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 max-w-sm w-full">
            {/* <label> */}
            <input required  value={name} onChange={(e) => setName (e.target.value)}type="text" placeholder="Item name" class="w-full border-4 border-red-600 rounded-lg text-black mx-1 my-2"/>
            {/* </label> */}
        <div class=" flex-justify-between">
            <input required value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}type="number" min={1} max={99} class="border-4 border-red-600 rounded-lg text-black mx-2 my-2" />
            {/* <label> */}
            <select value={category} onChange={(e) => setCategory(e.target.value)} class="border-4 border-red-600 rounded-lg text-black mx-1 my-2">
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value= "Meat">Meat</option>
                <option value="Frozen Foods"> Frozen Foods</option>
                <option value =" Canned goods"> Canned goods</option>
                <option value="Dry goods">Dry goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option Value="Other">Other</option>
            </select>
            {/* </label> */}
        </div>
        <div>
            <button type="submit" class="bg-blue-600 w-full text-white-font-bold rounded border-10 border-red-600 mx-2  my-3">+</button>
        </div>

    </form>
    </div>
 );
}