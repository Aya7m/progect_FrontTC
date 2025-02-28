

import React from 'react'

import { MoveRight } from 'lucide-react'

const Deame = () => {
    return (
        <>
            <div className='flex md:flex-row flex-col my-24 justify-center items-center gap-8'>
                <div className="relative  rounded-md p-4  ">


                    <div className=" rounded-md p-4  hidden md:block">

                        <img src='https://s3-alpha-sig.figma.com/img/4a4b/57d9/1dde88ae6788c27acd5fc55158eb2f11?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nprd2be00zQnJnIKevYAnz~ClOVmXvorczi-s6h5oOpDtS~AEGnlU~pGK~q8abcW2HeaiUPwpnWZbZZjAmz1VN5WDT5obTmjrS~xqSOryUeVz0R2GPbMNtORnpn6qJbCllHJXJtmlYXKqW2pxKk9XnhVSzBTbnNf-0pbUaCgNytocfucpvii-tHE89V3b2-XmWFEYr9kEU4xaGJZ8EHePhpXsAU5J5QrBwb-sekJoZmN6bgIk16BihFAN1ZS4pIuGuEcz6yT0lpOb1IA-TuVXxcbadEhMmuzPGFJic~rPiS0iHM5-lTtZmEJ40t3iSuqT2x6w0gzO9cqQZcI6HXMlg__' className="rounded-md object-cover relative shadow-lg z-10 " width={629} height={445} alt="" />

                        <div className='rect1'></div>
                        <div className='rec2'></div>
                    </div>


                </div>

                <div className='flex flex-col w-[556px] gap-4 '>
                    <h2 className='text-2xl md:text-4xl font-bold'>
                        Furnish Your Dreams, Choose Wisely

                    </h2>
                    <p>
                        Discover quality furniture, curated styles, and exceptional service at Our Store. We make furnishing your home easy and enjoyable.
                        More Info
                    </p>
                    <div className='flex gap-4'>

                        <button className='flex items-center mine-color'>

                            <span className='gap-4'>More Info</span>
                            <MoveRight />
                        </button>
                    </div>

                </div>

            </div >

        </>
    )
}

export default Deame

