
import React, { useContext } from 'react'

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { CircleMinus, CirclePlus, Trash2 } from 'lucide-react';
import { cartContext } from '../../context/Cart/Cart';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';









const Cart = () => {

  // const baseUrl = "https://test-ecomerce.xn--hrt-w-ova.de/";



  const { removeItem, increaseQuantity, decreaseQuantity } = useContext(cartContext)






  async function incressItem(id, count) {
    let res = await increaseQuantity(id, count)
    if (res?.isSuccessful === true) {
      toast.success("increased quantity")


    }
  }








  async function decressItem(id, count) {
    let res = await decreaseQuantity(id, count)
    if (res?.isSuccessful === true) {

      toast.success("decreased quantity")
    }


  }

  async function getCart() {

    try {
      const { data } = await axios.get(`https://test-ecomerce.xn--hrt-w-ova.de/api/cart/items`,
        {
          headers: {
            'Country-Id': '1',
            'Accept-Language': 'en',
            'Authorization': "Bearer " + localStorage.getItem('token')
          }
        }
      );

      return data;


    } catch (error) {
      console.error("API Error:", error.response ? error.response.data : error.message);
      throw new Error(error.response?.data?.message || "Failed to fetch categories");
    }
  }

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  console.log(cart?.data);










  if (cart?.data.cart_items.length === 0) {
    return (
      <div className='mx-auto text-center my-52'>
        <h1 className=' text-black text-bold text-5xl my-3'>your Cart is empty</h1>
      </div>
    )
  }
  return (
    <div className='mt-40 max-w-3xl mx-auto my-10'>




      <div className='mx-auto text-center relative '>



        <div className='absolute mx-auto top-[-250px] left-[200px] my-0'>
          <svg width="300" height="370" viewBox="0 0 379 370" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M167.281 73.6316C140.718 78.733 128.662 91.1776 106.1 106.095C73.9325 127.364 39.1623 133.454 31.9794 171.342C26.5942 199.748 35.3328 219.562 53.246 242.256C81.4012 277.926 120.704 264.447 164.888 275.068C211.204 286.201 253.902 333.572 284.817 297.332C316.661 260.002 211.843 223.99 236.28 181.441C250.437 156.793 284.331 167.271 297.507 142.085C324.14 91.1766 223.704 62.7951 167.281 73.6316Z" fill="#E58411" fill-opacity="0.6" />
            <path d="M158.572 88.8112C135.597 93.2103 125.173 103.965 105.664 116.854C77.8476 135.23 47.7733 140.48 41.5768 173.238C36.9312 197.797 44.4991 214.933 60.0045 234.564C84.3753 265.419 118.367 253.781 156.592 262.985C196.661 272.632 233.617 313.611 260.343 282.289C287.872 250.025 197.186 218.84 218.306 182.061C230.541 160.755 259.864 169.83 271.25 148.059C294.266 104.052 207.374 79.4665 158.572 88.8112Z" fill="#E58411" />
          </svg>

        </div>

        <div className='my-50'>
          <div className='z-50 my-10'>
            <h1 className=' text-black text-bold text-5xl my-3'>your Cart</h1>

            <p>Review Your Items </p>
          </div>


          <p className='text-2xl font-bold my-24'>Items({cart?.data.cart_items[0].qty})</p>
        </div>
      </div>
      <div className='grid grid-cols-3 my-20 py-20 border-b border-black'>

        <div className='flex flex-col gap-y-10'>
          {cart?.data.cart_items.map((item) => (


            <div className='my-5' key={item.id}>
              <p className='text-xl'>{item.name}</p>

            </div>
          ))}



        </div>


        <div className='my-5 flex flex-col gap-y-10'>
          {cart?.data.cart_items.map((item) => (
            <div className='flex' key={item.id}>

              <Trash2 className='cursor-pointer mx-5 w-[60px]' size={30} onClick={() => removeItem(cart?.data.cart_items[0].id)} />
              <CircleMinus className='cursor-pointer mx-5 w-[50px]' size={30} onClick={() => decressItem(cart?.data.cart_items[0].id, 1)} />
              {cart?.data.cart_items[0].qty}
              <CirclePlus className='cursor-pointer mx-5 w-[50px]' size={30} onClick={() => incressItem(cart?.data.cart_items[0].id, 1)} />

            </div>
          ))}

        </div>

        <div className='flex flex-col my-5 gap-y-10'>
          {cart?.data.cart_items.map((item) => (
            <div className='flex' key={item.id}>
              <p className='text-xl text-bold'>{cart?.data.cart_items[0].price}$</p>


            </div>
          ))}


        </div>
        {/* <p>total num({cart?.data.cart_items[0].qty})</p>  */}

      </div>

      <div className='flex items-center justify-between my-5'>
        <p>total</p>
        <p>{cart?.data.cart_items[0].subtotal}$</p>


      </div>
      <Link to={'/data'}>
        <div>
          <button type='submit' className='min-color text-black py-3 w-full rounded-full'>Place Order</button>
        </div>

      </Link>

    </div>



  )
}

export default Cart
