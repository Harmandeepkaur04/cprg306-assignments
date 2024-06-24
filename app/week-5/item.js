export default function Item({item}) {
  const { name, quantity, category } = item;

  return (
    <ul>
    <div className="text-lg  bg-slate-900 border border-cyan-100 mx-10 my-5 p-5 m-5 max-w-sm">
      <li className="text-2xl font-bold">{name}</li> 
      <li> Buy {quantity} in {category}</li>
      </div>
    </ul>
    
  );
}
