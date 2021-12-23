import React,{useState} from "react";

function NewPlantForm() {
  const[formData,setFormData]= useState({
    "id": 0,
    "name": "",
    "image": "",
    "price": 0
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:6001/plants",{
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        "id": parseInt(formData.id),
      "name": formData.name,
      "image": formData.image,
      "price": parseFloat(formData.price),
    }),
    })
    .then((response)=>response.json())
    .then((newPlant)=> console.log(newPlant))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
