import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast'

function UpdatePlant() {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")


    const {id} = useParams();

    const updatePlant =async ()=>{
        const response = await axios.put(`http://localhost:8000/plant/${id}`,{
            name,
            category,
            price,
            image,
            description
        })
        toast.success("Plant Updated Successfully")

        window.location.href = "/"
    }
    const loadPlant =async (id)=>{
        if(!id){
            return
        }
        const response = await axios.get(`https://nursery-server-nzk8.onrender.com/plant/${id}`)

    

        const {name, image,price, category, description} = response.data.data

        setName(name)
        setCategory(category)
        setPrice(price)
        setImage(image)
        setDescription(description)

       
    }
   

    useEffect(()=>{
        
            loadPlant(id)
    
    }, [id])

  return (
    <div>
        <h1 className='h1'>Update Plant</h1>

        <div className='container'>
        <form>
                <input type="text"
                    placeholder='Enter Plant Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="plant-input" />

                <input type="text"
                    placeholder='Enter Plant Category'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="plant-input" />
                    <p className='img-title'>Image Preview</p>

                    <img src={image} alt="" srcset="" className='img-preview' />

                <input type="text"
                    placeholder='Enter Plant Image URL'
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="plant-input" />

                <input type="text"
                    placeholder='Enter Plant Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="plant-input" />

                <input type="number"
                    placeholder='Enter Plant Price'
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="plant-input" />




                <button type='button' onClick={updatePlant} className='btn-add-plant'>Update Plant</button>
            </form>
            </div>
            <Toaster/>
    </div>
  )
}

export default UpdatePlant