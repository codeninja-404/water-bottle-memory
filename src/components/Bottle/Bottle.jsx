const Bottle = ({ bottle ,handleAddToCart}) => {
  const { name, price, img } = bottle;
  return (
    <div className="p-6 border-2 border-gray-400 shadow-md shadow-slate-600 space-y-3  rounded-2xl">
      <p>Name : {name}</p>
      <img className="mx-auto  rounded-xl" src={img} alt="" />
      <p>Price : ${price}</p>
      <button onClick={()=>{handleAddToCart(bottle)}} className="btn btn-circle text-xs bg-black">Buy</button>
    </div>
  );
};

export default Bottle;
