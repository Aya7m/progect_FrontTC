import React from 'react'

const Search = () => {
    return (
        <div className='my-32 max-w-5xl mx-auto'>
            <div className='grid grid-col-1 md:grid-cols-3 gap-10'>
                <div className='rounded-lg relative z-50'>
                    <img src="https://s3-alpha-sig.figma.com/img/240a/b3ab/f07f0fffafdf7756eaf81f4650c2304f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LKFxM1N7z37ihe-sXLnOKtjnOY1KWsx0QnQLr7KHNkdU7ppl1fSq9jSkeDMlNw-COCs5tEsnQNwpe9HOi8MxoPawA5LgGLYxkLNB7wnuGCgyEg8-H3jJ~oGF2Dd7JDInSBhH6QKtZWt9~erfK3Mn8iilfX-suPTBe31d6mIW73DFaAcuOCyIsHV3F5nT8hkO~oJV-zxuwnVxdeZ-pYs2uyvFwRstl-~0sHXy7rtN6ifGMaFizASeCaHldcjIUv3BjU~ZBTDFMh~cV-3oyw8--cK1aBzIbSJLOrSv79p1p65DHvH4EhhcL7IdGqL-R4~FXH~2rntDWy7Dtuk6hlW7fw__" alt="img"
                        className='w-[300px] h-[200px] rounded-lg' />


                </div>

                <div className='absolute w-[300px] h-[200px] left-[200px] top-[150px] rounded-lg   bg-rose-100'></div>

                <div className='mx-auto text-center '>


                    <div className='z-50 relative'>

                        <h1 className='font-bold text-2xl my-3 '>Chic Furnishings Online
                            Furniture Store</h1>

                        <p className='my-24 font-bold'>Discover Elegant Comfort for Every Room </p>

                    </div>


                    <div className='absolute top-[90px] right-[590px]'>
                        <svg width="438" height="446" viewBox="0 0 438 446" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M260.747 102.919C231.923 97.1206 214.671 104.68 185.831 110.404C144.714 118.565 107.224 110.382 84.4048 145.547C67.2962 171.911 67.9344 195.442 76.6178 225.648C90.2659 273.123 135.357 275.736 175.441 304.606C217.459 334.868 240.923 400.101 286.942 376.362C334.345 351.908 243.705 272.538 285.802 239.786C310.189 220.812 339.978 245.304 363.6 225.386C411.347 185.126 321.976 115.237 260.747 102.919Z" fill="#E58411" fill-opacity="0.6" />
                            <path d="M245.738 114.608C220.812 109.579 205.898 116.11 180.964 121.049C145.415 128.09 112.996 120.996 93.2808 151.404C78.4994 174.202 79.0616 194.557 86.5832 220.69C98.4053 261.763 137.394 264.043 172.066 289.034C208.411 315.231 228.728 371.67 268.509 351.155C309.485 330.023 231.077 261.326 267.462 233.012C288.54 216.611 314.309 237.809 334.724 220.591C375.992 185.786 298.685 125.29 245.738 114.608Z" fill="#E58411" />
                        </svg>

                    </div>



                </div>


                <div className='rounded-lg relative z-50'>
                    <img src="https://s3-alpha-sig.figma.com/img/cf88/febd/7ba0b385b4e0fe22b570166df5d40b74?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rh9T3INwER96eBVpPOAuv8Io-wxtwNBCJ09XC18YZAhd71kWa62T2okQUcAPjMBQ1CKQQVMxkJyL9o2YSm~A9RgiE69nrPBohQmBk4SAhGJRBvpsbwDxJdxPOFf22CIOmAcGY81E5tVSs8oLxr7jqMFHD6LfjUOp9EhlaN2-gXM30yUIleZ3xYsIoqBxN9~gGJWf5qG252Owk25s7WnGSEkpUUPF84JBL8Qq9HEPrEBojDI-SsAPcPKxltHOl1XWHSDKVW71MiUklwVzdkgya3P48hlliYdTNSprvJxLycbZ4Ivla64m48aHa~~wcIRnKvxRnI-OMlNyLVwCKmBEAg__" alt="img"
                        className='w-[300px] h-[200px] rounded-lg' />


                </div>




            </div>


            <label className="input input-bordered flex items-center gap-2 my-10 border-orange-300">
                <input type="text" className="grow " placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70 border-orange-200">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>

        </div >
    )
}

export default Search
