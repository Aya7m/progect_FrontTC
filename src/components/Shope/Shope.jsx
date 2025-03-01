
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ArrowBigRight, CircleMinus, CirclePlus, MoveLeft, Share2 } from 'lucide-react';
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { cartContext } from '../../context/Cart/Cart';
import { toast } from 'react-hot-toast';


const Shope = () => {


  const { increaseQuantity, decreaseQuantity } = useContext(cartContext)
  let { id } = useParams()
  const baseUrl = "https://test-ecomerce.xn--hrt-w-ova.de/";



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


  const fetchProductDetails = async () => {

    try {
      const { data } = await axios.get(`https://test-ecomerce.xn--hrt-w-ova.de/api/product/find/${id}`,
        {
          headers: {
            "Accept-Language": "en"
          }
        }
      );
      return data;
    } catch (error) {
      console.error("API Error:", error.response ? error.response.data : error.message);
      throw new Error(error.response?.data?.message || "Failed to fetch categories");
    }
  };

  const { data: details } = useQuery({
    queryKey: ["details"],
    queryFn: fetchProductDetails,
  });

  console.log(details);


  let { addProductToCart } = useContext(cartContext)
  let quantity = 1
  async function addProduct(id) {
    let res = await addProductToCart(id, quantity)
    console.log("addToCart", res?.data?.data);
    if (res?.data.isSuccessful === true) {
      toast.success("Product added to cart")


    }


  }




  return (
    <>


      <div className='max-w-7xl mx-auto my-48 md:my-56'>
        <div className='my-8 flex-col'>
          <Link to={'/'}>
            <MoveLeft size={30} className='cursor-pointer mine-color mx-7' />
          </Link>
          <div className='mine-color hidden md:flex gap-2'>
            <h3>Categories</h3>
            <ArrowBigRight />
            <h3>{details?.data?.categories[0]?.title}</h3>
            <ArrowBigRight />
            <h3>{details?.data?.title}</h3>
          </div>


        </div>
        <div className='grid grid-cols-1 md:grid-cols-2'>

          <div className='flex-1 w-1/2'>
            <img src={baseUrl + details?.data?.productimage[0]?.link} alt="" />


          </div>


          <div className='px-4 mx-10'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl md:text-4xl font-bold'>{details?.data?.title}</h2>
              <p className='text-lg md:text-xl'>${details?.data?.price}</p>
            </div>

            <p className='my-4'>{details?.data?.description}</p>
            <p>{details?.data?.sizes[0]?.Size}</p>

            <div className='border-gray-800 border-b-4 my-24'></div>



            <div className='flex justify-between items-center'>
              <div className='flex items-center justify-center gap-5 md:gap-10 '>
                <CirclePlus className='cursor-pointer   hover:text-[#E58411]' onClick={() => incressItem(details?.data?.id, 1)} size={30} />
                <h2>{details?.data?.quantity}</h2>
                <CircleMinus className='cursor-pointer hover:text-[#E58411] ' onClick={() => decressItem(details?.data?.id, 1)} size={30} />
              </div>

              <div className='mine-color'>
                <Share2 size={30} className='cursor-pointer' />
              </div>

            </div>







            <button onClick={() => addProduct(details?.data?.id, details?.data?.quantity

            )} className='min-color px-4 py-2 mt-4 text-white rounded-full w-full font-bold'>Add To Cart</button>


          </div>




        </div>


      </div>



      <div className='noga hidden lg:block'>

        <svg width="254" height="791" viewBox="0 0 254 791" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M432.447 162.531C376.955 151.367 343.743 165.92 288.223 176.94C209.066 192.651 136.893 176.898 92.9624 244.595C60.026 295.35 61.2545 340.651 77.9713 398.8C104.246 490.198 191.052 495.227 268.219 550.806C349.11 609.066 394.282 734.648 482.876 688.946C574.132 641.87 399.637 489.072 480.681 426.018C527.629 389.492 584.978 436.641 630.453 398.297C722.373 320.79 550.321 186.244 432.447 162.531Z" fill="#E58411" fill-opacity="0.6" />
          <path d="M403.551 185.033C355.565 175.352 326.855 187.925 278.854 197.433C210.416 210.989 148.005 197.33 110.05 255.87C81.5938 299.76 82.6761 338.947 97.1562 389.255C119.915 468.328 194.975 472.717 261.723 520.829C331.691 571.261 370.806 679.914 447.389 640.419C526.273 599.737 375.327 467.485 445.374 412.978C485.952 381.403 535.56 422.213 574.863 389.065C654.309 322.06 505.482 205.598 403.551 185.033Z" fill="#E58411" />
        </svg>

      </div>

      <div>
        <svg width="354" height="856" viewBox="0 0 354 856" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.4465 196.858C-42.0448 185.694 -75.2568 200.247 -130.777 211.267C-209.934 226.978 -282.107 211.225 -326.038 278.922C-358.974 329.677 -357.745 374.978 -341.029 433.127C-314.754 524.524 -227.948 529.554 -150.781 585.133C-69.8902 643.393 -24.7178 768.975 63.8756 723.273C155.132 676.197 -19.3628 523.398 61.6811 460.345C108.629 423.819 165.978 470.968 211.453 432.624C303.373 355.117 131.321 220.571 13.4465 196.858Z" fill="#E58411" fill-opacity="0.6" />
          <path d="M-15.449 219.36C-63.435 209.679 -92.1455 222.252 -140.146 231.76C-208.584 245.316 -270.995 231.657 -308.95 290.197C-337.406 334.087 -336.324 373.274 -321.844 423.582C-299.085 502.655 -224.025 507.044 -157.277 555.156C-87.3086 605.588 -48.1942 714.24 28.3885 674.746C107.273 634.064 -43.6729 501.812 26.3743 447.305C66.9516 415.73 116.56 456.54 155.863 423.392C235.309 356.387 86.4824 239.925 -15.449 219.36Z" fill="#E58411" />
        </svg>

      </div>

    </>
  )
}

export default Shope
