import React,{useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[text,setText]= useState("")

  function handleSearchChange(text){
    setText(text)
  }

  return (
    <main>
      <NewPlantForm />
      <Search onSearchChange={handleSearchChange} />
      <PlantList text={text} />
    </main>
  );
}

export default PlantPage;
