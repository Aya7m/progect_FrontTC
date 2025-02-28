import React from 'react'
import hero from '../images/hero.jpeg'
import { Link } from 'react-router-dom'
const CoverImage = () => {
    return (
        <>
            <div className='w-full h-[60vh] md:h-[100vh] relative'>


                <div className='w-full h-full overflow-hidden '>
                    <img
                        src={hero}
                        className='https://s3-alpha-sig.figma.com/img/c23f/5908/6b24d16c8f8b19fedc2930332e924ae3?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cWNkiJYgL1ib2GqG2gCoXCHDsLLtHMyHFKaXYnStPZI0P16AHDcKiGa7~Qh1N-ZX3SgXqr3SMjSVv44bTWQJWy909sX8TvriefW8SMlnfO4EVE9pn7O91XgnGrRSXhSxlzOQEeg2rhJsOngAfXcH9sB1KCBFzPO2PUuzI0RnE0u4vHN66lIytU56hXTT7~fSzQMOaIrkc5m0vSfAvZBl~gf554jFXIFO8PdgIjtxuM4B40hoQ4TTF3XHxg5FjgXXyX1i9FTNloH0YqtE~j7dL0HAB0clAvEntgN2thobDAEN~6MG6c1QhaQB-cmTJCVyliqCxgrM2eOtkQEstzabmw__'
                        width={1920}
                        height={1080}
                        className='w-full h-full object-cover'


                        alt='Horse Cover Image'
                    />
                    <div
                        className='absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-slate-500 to-transparent'
                        aria-hidden='true'
                    />
                </div>
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50' />
                <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white'>
                    <p className='text-2xl md:text-4xl font-bold w-[60vh] mx-auto'>
                        Make your interior more
                        minimalistic & modern

                    </p>

                    <p className='text-lg md:text-xl w-[50vh] my-4'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
                    

                    <input type="text" width={300} onInput={(e) => window.location.href = `/category/${e.target.value}`} className='bg-slate-300 p-3 rounded-full' placeholder='Search' />
                </div>

            </div>
        </>
    )
}

export default CoverImage
