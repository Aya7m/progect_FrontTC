import React, { useContext } from 'react'

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import CoverImage from '../../pages/CoverImage';
import { Link } from 'react-router-dom';

import { MoveRight } from 'lucide-react';
import Deame from '../../pages/Deame';





const Home = () => {





  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("https://test-ecomerce.xn--hrt-w-ova.de/api/category/get",
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

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  console.log(categories?.data);















  const baseUrl = "https://test-ecomerce.xn--hrt-w-ova.de/";






  return (
    <div className="flex flex-col relative overflow-hidden">


      <CoverImage />
      <div className="max-w-7xl mx-auto py-24">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 items-center">
          <div className="">
            <h2 className="text-2xl font-bold w-4">Our
              Categories</h2>


          </div>


          {categories?.data.map((category) => (
            <div className="flex flex-col  gap-4">
              <Link to={`/category/${category.id}`}>
                <img src={baseUrl + category.image} className="rounded-md object-cover w-full imgo" width={277} height={267} alt="" />
              </Link>


              <h2 className="text-xl font-bold text-start">{category.title}</h2>
              <p className="my-4">{category.description.split(" ").slice(0, 10).join(" ")}</p>

              <div className="flex 
                 items-center mine-color">
                <span className="" >More Info</span>
                <MoveRight className="mx-3" />

              </div>

            </div>
          ))}




        </div>
        <div className='absolute  left-0 hidden md:block'>
          <svg width="233" height="684" left="0" viewBox="0 0 333 684" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M212.579 206.587C180.566 159.907 146.607 147.195 99.1128 116.402C31.3981 72.4989 -9.37834 10.901 -88.0635 28.8288C-147.056 42.2699 -177.749 75.6119 -206.289 128.962C-251.147 212.816 -192.404 276.924 -175.802 370.562C-158.4 468.719 -213.533 590.258 -118.149 619.231C-19.8983 649.075 -38.5353 417.885 63.5279 429.154C122.652 435.681 130.916 509.462 190.251 513.66C310.187 522.144 280.58 305.746 212.579 206.587Z" fill="#E58411" fill-opacity="0.6" />
            <path d="M186.175 224.585C158.511 184.198 129.159 173.205 88.1106 146.568C29.586 108.591 -5.65032 55.2975 -73.6683 70.8238C-124.664 82.4644 -151.2 111.32 -175.879 157.489C-214.669 230.055 -163.902 285.516 -149.568 366.538C-134.543 451.469 -182.22 556.646 -99.776 581.699C-14.8537 607.505 -30.9235 407.463 57.2974 417.195C108.402 422.833 115.534 486.674 166.821 490.296C270.492 497.617 244.937 310.375 186.175 224.585Z" fill="#E58411" />
          </svg>
        </div>





        <Deame />
      </div>




      <div className='bg-rose-100 dark:bg-gray-700 py-10 w-full '>

        <div className='max-w-7xl mx-auto text-center'>
          <p className='text-xl mine-color'>SOME OF OUR</p>
          <h1 className='font-bold text-2xl my-5 mb-8'>
            Featuers we offer to you
          </h1>
        </div>

        <div className='absolute right-0 hidden md:block'>


          <svg width="250" height="284" viewBox="0 0 424 684" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M510.592 206.583C478.579 159.902 444.62 147.191 397.126 116.398C329.411 72.4947 288.634 10.8968 209.949 28.8247C150.956 42.2658 120.264 75.6077 91.7239 128.958C46.8653 212.812 105.609 276.92 122.21 370.558C139.612 468.715 84.4797 590.254 179.864 619.227C278.114 649.071 259.478 417.881 361.541 429.15C420.664 435.677 428.929 509.458 488.264 513.656C608.2 522.14 578.593 305.742 510.592 206.583Z" fill="#E58411" fill-opacity="0.6" />
            <path d="M474.187 202.581C446.524 162.194 417.172 151.2 376.123 124.564C317.599 86.5863 282.363 33.2932 214.345 48.8195C163.349 60.4602 136.813 89.316 112.134 135.485C73.3441 208.051 124.111 263.512 138.445 344.534C153.47 429.465 105.793 534.641 188.237 559.695C273.159 585.501 257.089 385.458 345.31 395.191C396.415 400.829 403.547 464.67 454.834 468.292C558.505 475.613 532.95 288.37 474.187 202.581Z" fill="#E58411" />
          </svg>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

          <div className='max-w-5xl mx-auto'>
            <div className='relative'>
              <img src="https://s3-alpha-sig.figma.com/img/7376/56c2/eeb8f98032e5e2b9bd9d84137bbf9d6e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tF4I7xik~ijRklyOEnpJE8oKGW1bDuD3XZIoeN1unYtQSTXg6RgoanHoN8y9Ae39ByPo4BPH3YPTETgPCmfMiBK8UYcZkCMiEmxReYnbs3fHhmescMKegHkk1IBO-yPCCIWwfDi9c9RnqgPBgNLeeE4-vr2FBjTPPjkkPeBSfc8epy-TapwXW~fK4x6vTayTZh11PhsUTxpYhpsqJeCcLxVoL5Zm~5pB89Pof3i5rgdTCJx0cFgk-cfYEfi~Cc1I7RThOWSz5w~0eHZCMbJT0Ibufq5YJJYveq7Cqt0fZjx0wneGKvOmvFWm9FwdnjUZPKK1HUg6pFVAXPUopwBhNg__" className='w-[370px] h-[370px] mx-auto relative' alt="" />

              <div className='ship rounded-lg'></div>
              <div className='ring rounded-full'></div>

              

            </div>

          </div>

          <div className='max-w-5xl mx-auto'>
            <div className='relative'>
              <img src="https://s3-alpha-sig.figma.com/img/86ca/2d40/e5cc03367af5eb6766025000d1108f3d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eB~UntAnPGJjdhQhg~AIbcibmZqujkBv3f5yCTNNiLSRUkfqXYaJHXJLpPEYunTCnaWlZloVPFfMblyas-itRXVyo63RuwGQPr9N7BTfdFqr10U0sR0n7TNLP-wFhZLmyUlWhNRL-aeLjb7CP7ncZVZ2Ur1KIz04b2vdJ13MtqXTj9mJFiYgYDqEnnq5Grdgt7~WhLvxaEkwJAl1NIXyQsq4N6H8iESzrsmkclECHZTk~DFaxfrx7jOwBcaTAloMD~HT3duYdxNrQlYbCu1e7DdqB8yMkNcMvxa1XsAsodZxjufTi7YdvD0afdWtMq8xNM~VN~J8AUXZAfY7BqrJ3A__" className='w-[370px] h-[370px] mx-auto relative' alt="" />

              <div className='ship rounded-lg'></div>
              <div className='ring rounded-full'></div>
            </div>

          </div>



          <div className='max-w-5xl mx-auto'>
            <div className='relative'>
              <img src="https://s3-alpha-sig.figma.com/img/9b2e/d3d9/b2a3882779d03355c1e1da861bab3d1d?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=P7juTtDoH-A-K4nWri1SgPJ8NQ2DbMkwbu2ZUbFwa37d7s4kj6jfmCWS2m97oKqdDxPvwdZx5ZJZ4r6zDXLZRTd5WXVC~sRfP3u7WiInOGVCH0jdx~GfS13Kjf6u56KdpAokTqbbuGulWmRwDktSvOIpKGSyUol~sW8~OfRE6S5eH2mArJlNjJ5VaQ-XafNkYl19RUYptjLk2ZeRu5FM6GxsK-Vm4618HINrASNOY2zJISO~L~E6U2tR3jO9r8p8iihi8vtO4AEnSXeuG3fKc8mnTvaeZxT~0076NZSsqSl5OJdoirmHFcvaq1Et6yp9taONY7haVU5VvFQq4~ERJA__" className='w-[370px] h-[370px] mx-auto relative' alt="" />

              <div className='ship rounded-lg'></div>
              <div className='ring rounded-full'></div>
            </div>

          </div>

        </div>


        <div>

          <svg width="347" height="684" viewBox="0 0 447 684" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M326.592 206.583C294.579 159.902 260.62 147.191 213.126 116.398C145.411 72.4947 104.634 10.8968 25.9494 28.8247C-33.0436 42.2658 -63.7357 75.6077 -92.2761 128.958C-137.135 212.812 -78.3909 276.92 -61.7897 370.558C-44.3876 468.715 -99.5203 590.254 -4.13642 619.227C94.1145 649.071 75.4775 417.881 177.541 429.15C236.664 435.677 244.929 509.458 304.264 513.656C424.2 522.14 394.593 305.742 326.592 206.583Z" fill="#E58411" fill-opacity="0.6" />
            <path d="M300.188 224.581C272.524 184.194 243.172 173.2 202.124 146.564C143.599 108.586 108.363 55.2932 40.3449 70.8195C-10.6506 82.4602 -37.1864 111.316 -61.8657 157.485C-100.656 230.051 -49.8889 285.512 -35.5551 366.534C-20.5297 451.465 -68.207 556.641 14.2372 581.695C99.1595 607.501 83.0897 407.458 171.311 417.191C222.416 422.829 229.547 486.67 280.835 490.292C384.505 497.613 358.951 310.37 300.188 224.581Z" fill="#E58411" />
          </svg>

        </div>


      </div>







    </div>
  )
}

export default Home
