import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ArrowLeft, CirclePlus, MoveRight } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {

  const fetchAllProduct = async () => {
    try {
      const { data } = await axios.get("https://test-ecomerce.xn--hrt-w-ova.de/api/product/get",
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

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProduct,
  });
  const baseUrl = "https://test-ecomerce.xn--hrt-w-ova.de/";

  console.log("products", products?.data);
  return (
    <>
      <div className='max-w-7xl mx-auto '>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 my-8'>

          <div className='flex flex-col my-12 '>
            <Link to={'/'} className='my-12'>
              <ArrowLeft className='mine-color' />
            </Link>

            <div className='flex items-center gap-10 mine-color my-10'>
              <h2 className=' mine-color'>
                Categories
              </h2>
              <p className='my-4'>
                {products?.data[0].categories[0].title}
              </p>
            </div>

            <div className='w-[559px]'>
              <h2 className='text-3xl font-bold'>
                All Living Room
              </h2>
              <p className='my-4'>
                Sofas, loveseats, armchairs, coffee tables, end tables, entertainment centers, bookshelves.
              </p>
            </div>
          </div>


          <div className='flex justify-center items-center'>

            <img src={baseUrl + products?.data[0].categories[0].image} className='rounded-md object-cover mt-48 w-[390px] h-[310px]' alt="" />

          </div>

        </div>



      </div>



      <div>
        <svg width="200" height="600" viewBox="0 0 354 856" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.4465 196.858C-42.0448 185.694 -75.2568 200.247 -130.777 211.267C-209.934 226.978 -282.107 211.225 -326.038 278.922C-358.974 329.677 -357.745 374.978 -341.029 433.127C-314.754 524.524 -227.948 529.554 -150.781 585.133C-69.8902 643.393 -24.7178 768.975 63.8756 723.273C155.132 676.197 -19.3628 523.398 61.6811 460.345C108.629 423.819 165.978 470.968 211.453 432.624C303.373 355.117 131.321 220.571 13.4465 196.858Z" fill="#E58411" fill-opacity="0.6" />
          <path d="M-15.449 219.36C-63.435 209.679 -92.1455 222.252 -140.146 231.76C-208.584 245.316 -270.995 231.657 -308.95 290.197C-337.406 334.087 -336.324 373.274 -321.844 423.582C-299.085 502.655 -224.025 507.044 -157.277 555.156C-87.3086 605.588 -48.1942 714.24 28.3885 674.746C107.273 634.064 -43.6729 501.812 26.3743 447.305C66.9516 415.73 116.56 456.54 155.863 423.392C235.309 356.387 86.4824 239.925 -15.449 219.36Z" fill="#E58411" />
        </svg>

      </div>

      <div className='max-w-5xl mx-auto text-black'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10'>

          {products?.data
            .map((product) => (
              <div key={product.id} className="flex flex-col  gap-4">
                <div className='bg-slate-100 p-4 my-4'>

                  <img src={baseUrl + product.productimage[0].link}

                    className="rounded-md object-cover w-full imgo" width={277} height={267} alt="" />
                  <h2 className="text-xl font-bold text-start">{product.title.split(' ').slice(0, 2).join(' ')}</h2>

                  <div className="flex justify-between items-center my-8">
                    <span className=" font-bold">${product.discount_Price
                    }</span>
                    <Link to={`/shope/${product.id}`}>
                      <CirclePlus className='w-8 h-8 hover:text-[#E58411]' />
                    </Link>

                  </div>
                </div>


              </div>
            ))}

        </div>
      </div>
      <div className=''>
        <svg width="319" height="793" viewBox="0 0 319 793" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-303.021 439.68C-292.9 495.371 -267.11 520.86 -236.364 568.385C-192.527 636.142 -180.51 709.03 -101.375 724.851C-42.044 736.713 -0.399709 718.84 47.4643 681.828C122.695 623.655 95.308 541.129 118.456 448.89C142.721 352.201 242.74 263.84 167.548 198.391C90.0956 130.974 12.5488 349.565 -75.9794 297.54C-127.262 267.402 -104.629 196.694 -157.057 168.597C-263.033 111.802 -324.521 321.382 -303.021 439.68Z" fill="#E58411" fill-opacity="0.6" />
          <path d="M-271.438 458.222C-262.712 506.391 -240.423 528.427 -213.859 569.523C-175.985 628.114 -165.627 691.157 -97.2079 704.808C-45.9117 715.042 -9.89495 699.563 31.5084 667.525C96.5843 617.171 72.9407 545.797 92.9976 465.999C114.022 382.351 200.546 305.873 135.559 249.292C68.6182 191.01 1.4673 380.129 -75.0571 335.166C-119.387 309.12 -99.784 247.946 -145.105 223.665C-236.714 174.585 -289.975 355.902 -271.438 458.222Z" fill="#E58411" />
        </svg>

      </div>

    

    </>
  )
}

export default Products
