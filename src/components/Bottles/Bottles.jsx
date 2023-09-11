import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [items, setItems]=useState([])
  
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  const handleAddToCart = (bottle)=>{
    const newItems = [...items,bottle]
    setItems(newItems)
    console.log(newItems);
  }

  return (
    <div className="container mx-auto px-5">
      <h1>Bottles here : {bottles.length} </h1>
      <ul>
        {
            items.map((item)=><li>{item.name}</li>)
        }
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bottles.map((bottle) => (
        <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>
      ))}
      </div>
    </div>
  );
};

export default Bottles;
