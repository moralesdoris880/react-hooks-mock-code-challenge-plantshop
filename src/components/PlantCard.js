import React,{useState} from "react";

function PlantCard({plant}) {
  const[InStock,setInStock]= useState("In Stock")
  const[InStockCheck,setInStockCheck] = useState(true)

  function handleStock(){
    setInStock("Out of Stock")
    setInStockCheck(false)
  }
  
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {InStockCheck? (
        <button className="primary" onClick={handleStock}>{InStock}k</button>
      ) : (
        <button>{InStock}</button>
      )}
    </li>
  );
}

export default PlantCard;
