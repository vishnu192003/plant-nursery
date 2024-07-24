import axios from 'axios'
import React, { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import "./AddPlant.css"


function AddPlant() {

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const addPlant = async ()=>{
        toast.loading("Adding Plant...")

        if(!name || !category || !price || !image || !description){
            toast.error("Please Enter All Details")
            return
        }

        const response = await axios.post('https://nursery-server-nzk8.onrender.com/plant',{
            name,
            category,
            price,
            description,
            image
        })
        toast.dismiss()
        toast.success("New Plant Added successfully")

        setName("")
        setCategory("")
        setPrice("")
        setDescription("")
        setImage("")

        window.location.href = '/'
    }


    return (
        <>
            <h1 className='h1'>Add Plant</h1>

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




                <button type='button' onClick={addPlant} className='btn-add-plant'>Add Plant</button>
            </form>
            </div>
            <Toaster/>
        </>

    )
}

export default AddPlant