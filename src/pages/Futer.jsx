import React from 'react'


const Futer = () => {
    return (
        <div className='py-12 futercolor relative'>
            <div className=' flex flex-col md:flex-row justify-between items-center'>

                <div className='w-full mx-auto md:w-1/3 text-center md:text-center'>
                    <p className='min-color'>SOME OF OUR</p>
                    <h2 className='text-3xl font-bold'>
                        Featuers we offer to you</h2>

                </div>

            </div>

            <div className='he  '>
                <svg width="300" height="684" viewBox="0 0 424 684" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M510.592 206.583C478.579 159.902 444.62 147.191 397.126 116.398C329.411 72.4947 288.634 10.8968 209.949 28.8247C150.956 42.2658 120.264 75.6077 91.7239 128.958C46.8653 212.812 105.609 276.92 122.21 370.558C139.612 468.715 84.4797 590.254 179.864 619.227C278.114 649.071 259.478 417.881 361.541 429.15C420.664 435.677 428.929 509.458 488.264 513.656C608.2 522.14 578.593 305.742 510.592 206.583Z" fill="#E58411" fill-opacity="0.6" />
                    <path d="M474.187 202.581C446.524 162.194 417.172 151.2 376.123 124.564C317.599 86.5863 282.363 33.2932 214.345 48.8195C163.349 60.4602 136.813 89.316 112.134 135.485C73.3441 208.051 124.111 263.512 138.445 344.534C153.47 429.465 105.793 534.641 188.237 559.695C273.159 585.501 257.089 385.458 345.31 395.191C396.415 400.829 403.547 464.67 454.834 468.292C558.505 475.613 532.95 288.37 474.187 202.581Z" fill="#E58411" />
                </svg>

            </div>


            <div className='absolute top-[30px] left-[0px]  transform rotate-180'>
                <svg width="200" height="684" viewBox="0 0 424 684" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M510.592 206.583C478.579 159.902 444.62 147.191 397.126 116.398C329.411 72.4947 288.634 10.8968 209.949 28.8247C150.956 42.2658 120.264 75.6077 91.7239 128.958C46.8653 212.812 105.609 276.92 122.21 370.558C139.612 468.715 84.4797 590.254 179.864 619.227C278.114 649.071 259.478 417.881 361.541 429.15C420.664 435.677 428.929 509.458 488.264 513.656C608.2 522.14 578.593 305.742 510.592 206.583Z" fill="#E58411" fill-opacity="0.6" />
                    <path d="M474.187 202.581C446.524 162.194 417.172 151.2 376.123 124.564C317.599 86.5863 282.363 33.2932 214.345 48.8195C163.349 60.4602 136.813 89.316 112.134 135.485C73.3441 208.051 124.111 263.512 138.445 344.534C153.47 429.465 105.793 534.641 188.237 559.695C273.159 585.501 257.089 385.458 345.31 395.191C396.415 400.829 403.547 464.67 454.834 468.292C558.505 475.613 532.95 288.37 474.187 202.581Z" fill="#E58411" />
                </svg>

            </div>

            <div className='max-w-5xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 items-center'>

                    <div className='p-4 relative  rounded-md'>
                        <img src="./public/images/m1.jpeg" width={370} height={476} className='object-cover shadow-lg rounded-md ' alt="" />
                        
                        <div className='absolute bottom-10 translate-x-10  w-[200px] h-[100px] bg-gray-400 bg-opacity-50 rounded-md' />
                       

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Futer
