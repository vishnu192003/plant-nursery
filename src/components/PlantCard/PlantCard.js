import axios from 'axios'
import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import "./PlantCard.css"

function PlantCard({_id, name, category, image, price, description, loadPlants}) {

  const deletePlant =async (plantId)=>{
    const response =await axios.delete(`https://nursery-server-nzk8.onrender.com/plant/${plantId}`)

  
    loadPlants()

    toast.success("Plant deleted Successfully")

  }


  return (
    <div className='plant-card'>
        <h1 className='plant-title'>{name}</h1>
        <img src={image} alt={name} className='plant-image' />
        <h5 className='desc'>{description}</h5>
        <p className='plant-category'>Category:{category}</p>
        <p className='plant-price'>Price: {price}</p>
        
        <button type='button' className='btn'>Buy Now</button>
        <div className='btn-container'>
          <Link type='button' className='btn-edit' to={`/update/${_id}`}>Edit</Link>
          <button type='button' className='btn-delete' onClick={()=>{
            deletePlant(_id)
          }}>Delete</button>
        </div>
    </div>
  )
}

export default PlantCard