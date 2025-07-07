import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from "../assets/Loading4.webm"
import Breadcrums from '../Components/Breadcrums'

const SingleProduct = () => {
    const params = useParams()
    const [SingleProduct,setSingleProduct] = useState("")
    console.log(params);

    const getSingleProduct = async () =>{
        try {
            const res = await axios.get(`https://fakestoreapi.in/api/products/${params.id}`)
           
            const product = res.data.product;
            setSingleProduct(product)
             console.log(product);

        } catch (error){
            console.log(error);
        }

    }
    useEffect(()=>{
        getSingleProduct()
    },[])

  return (
    <>
      {
        SingleProduct ? <div className='px-4 pb-4 md:px-0' >
            <Breadcrums title={SingleProduct.title}/>
        </div> : 
        <div className=' flex items-center justify-center h-screen'>
                    <video autoPlay muted loop >
                      <source src={Loading} type='video/webm' />
                    </video>
                  </div>

       }
    </>
  )
}

export default SingleProduct
