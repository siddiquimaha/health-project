import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import health1 from '../assets/rm900.png';
import { useContext } from 'react';
import { cartContext } from '../context/CartContext';

export default function Allproducts() {
        const { addToCart } = useContext(cartContext);

    const [products, setProducts] = useState([]);
    useEffect( () => {
        (async() =>{
            try {
                // const response = await axios.get("http://localhost:5252/api/ProductApi/get-products")
                const response = await axios.get("https://localhost:7221/api/HealthApi/get-products")
                console.log(response.data);
                setProducts(response.data);
            }catch (err){
                console.log(err, "data can not fetch")

            }
        })()

    }, [])

  return (
    <>
    <div className='flex flex-row'>
        <div className='basis-1/4 bg-slate-100 container p-10'>
            
            <h1 className='text-center mb-5'>Categories</h1><ul>
                <li className='p-2 bg-slate-300 mb-2'>Makeups</li>
                <li className='p-2 bg-slate-300 mb-2'>Fragrance</li>
                <li className='p-2 bg-slate-300 mb-2'>body wash</li>
                <li className='p-2 bg-slate-300 mb-2'>face wash</li>
                <li className='p-2 bg-slate-300 mb-2'>Men face wash</li>
                <li className='p-2 bg-slate-300 mb-2'>Lip Colors</li>
                <li className='p-2 bg-slate-300 mb-2'>Hair colors</li>
                <li className='p-2 bg-slate-300 mb-2'>formula products</li>
            </ul>
        </div>
        <div className='basis-3/4'>
            <div className="bg-slate-200 mb-4 p-2">
                <h1 style={{textAlign: "center"}}>Health-<i>& beauty</i> Products</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 container p-10 bg-slate-50'>
                { products.length > 0 ? (
                products.map((product, index) => (
                    <div className="images-div" key={index}>
                    <div className="img1"><img src={`https://localhost:7221${product.imagePath}`} alt=""/>
                        <h2><i>{product.name}</i></h2>
                        <p style={{textAlign: "center"}}>{product.description}</p>
                        <p style={{textAlign: "center"}}>{product.price}</p>
                        <button className="shop-now"  onClick={() => addToCart('CDS22-900 billion sachets', 900)}>SHOP NOW</button>
                    </div>
                    </div>
                ))
            ) : ( 
                <p>products not available</p>
            )}
            </div>
        </div>
    </div>

    </>
  );
}
