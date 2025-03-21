import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id,  name,image, price }) => {
  const {currency}=useContext(ShopContext)
  
  return (
    <>
    {/* Monika - Rem */}
     <Link className='  text-gray-700 cursor-pointer' to={`/product/${id}`}>
          <div className='overflow-hidden '>
          <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="img" />
             
          </div> 

          <p className='pt-3 pb-1 text-lg'>{name}</p>  

          <p className='pb-3 text-lg font-medium'>{currency} {price}</p>
     </Link>
  
    
    </>

  )
}
export default ProductItem