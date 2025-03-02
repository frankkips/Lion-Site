// import PICHA from './assets/example.jpg'
import Header from './Header'
import Card from './Card'
import { useLocation } from 'react-router-dom'
// import { useState } from 'react'

function Product (){
    const location = useLocation()

    const image = location.state.name;
    console.log(image)

    const handleClick = (image) => {
        const imageURL = `http://localhost:8000/images/${image}`
        window.open(imageURL)
    };

    
    return(
        <>
        <Header/>
        <div className="bg-jet-black flex flex-col p-5">
            <div className="w-auto flex flex-row bg-feldgrau rounded-lg">
                <img className= "rounded-lg w-96 h-auto" src={`http://localhost:8000/images/${image}`}  alt="" />
                <div className="w-full rounded-lg ml-7 p-5">
                    <h1 className='text-white font-sans font-bold text-3xl'>{image}</h1>
                    <p className='text-white font-sans font-medium text-sm mt-6'>{image}</p>
                    <button onClick={() => handleClick(image)} className='bg-slate-400 p-3 font-sans text-white font-bold mt-6 rounded-xl'>View Product</button>
                </div>
            </div>
            <h1 className='text-white font-sans font-medium text-lg mt-5 mb-5'>People also like</h1>
            <div className="">
                <Card/>
            </div>
        </div>
        </>
    )
}
export default Product