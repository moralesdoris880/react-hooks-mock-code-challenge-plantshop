import React,{useEffect,useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({text}) {
  const[plants,setPlants] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((response)=>response.json())
    .then((data)=> setPlants(data));
  },[]);

  const plantsToDisplay = plants.filter((plant)=> text === plant.name || text === "")

  return (
    <ul className="cards">
      {plantsToDisplay.map((plant)=><PlantCard key={plant.id} plant={plant}/>)}
    </ul>
  );
}

export default PlantList;
