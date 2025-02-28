
import axios from 'axios'
import { BadgeCheck, Circle, MoveLeft } from 'lucide-react'
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'







const Data = () => {
    let obj = []
    let AllData = []






    let navigate = useNavigate()

    let user = {
        shipping_street_address: '',
        shipping_state: '',
        shipping_country: '',
        payment_method: 'STRIPE'

    }


    async function createOrder(value) {



        try {
            let { data } = await axios.post('https://test-ecomerce.xn--hrt-w-ova.de/api/order/create', value,
                {
                    headers: {
                        'Country-Id': '1',
                        'Authorization': "Bearer " + localStorage.getItem('token')
                    }
                })

            console.log(data);
            if (data?.isSuccessful === true) {
                // console.log(data?.data.order)

                obj = data?.data.order_details
                localStorage.setItem('obj', JSON.stringify(obj))


                AllData = data?.data
                localStorage.setItem('AllData', JSON.stringify(AllData))
                localStorage.setItem('session_url', data.data.session_url)

                // window.location.href = session_url

                // <Payment session_url={data.data.session_url} />
                navigate('/payment')

            }

            console.log("obj", obj);






        } catch (error) {
            console.log(error);


        }



    }





    let validationSchema = yup.object({
        shipping_street_address: yup.string().required('Please Enter Your shipping street address').max(50, 'Must be 50 characters or less').min(5, 'Must be 5 characters or more'),
        shipping_state: yup.string().required('Please Enter Your shipping state').max(50, 'Must be 50 characters or less').min(5, 'Must be 5 characters or more'),
        shipping_country: yup.string().required('Please Enter Your shipping country').max(50, 'Must be 50 characters or less').min(5, 'Must be 5 characters or more'),

    })


    let formic = useFormik({
        initialValues: user,
        validationSchema: validationSchema,
        onSubmit: createOrder
    })







    return (
        <div className='mt-40 container text-center mx-auto md:max-w-7xl sm:px-2 overflow-hidden'>


            <Link to={'/signin'}>
                <MoveLeft className='w-8 h-8 mine-color mx-6' />

            </Link>


            <div className='flex items-center justify-between py-10 md:py-10 gap-3 border-b-2 w-[1000px] min-w-[300px] mx-auto overflow-hidden'>

                <div className='flex gap-4 bg-green-200 px-2 py-1 sm:py-0 rounded-full'>
                    <BadgeCheck className='md:w-8 h-8  text-green-500' />
                    <h2 className='text-xl text-green-500'>login</h2>

                </div>
                <div className='md:w-[100px] h-1 bg-gray-400 sm:w-[50px]'></div>



                <div className='flex gap-4 px-2 py-1 rounded-full'>
                    <Circle strokeWidth={1} className='w-8 h-8' />
                    <h2 className='text-xl '>Data</h2>

                </div>
                <div className='w-[100px] h-1 bg-gray-400'></div>



                <div className='flex gap-4 px-2 py-1 rounded-full'>
                    <Circle strokeWidth={1} className='w-8 h-8' />
                    <h2 className='text-xl '>Payment</h2>

                </div>
                <div className='w-[100px] h-1 bg-gray-400'></div>



                <div className='flex gap-4 px-2 py-1 rounded-full'>
                    <Circle strokeWidth={1} className='w-8 h-8' />
                    <h2 className='text-xl '>Review</h2>

                </div>


            </div>


            <div className='text-center mx-auto my-5'>
                <h1 className='font-bold text-5xl my-10'>Your customer data for the order
                </h1>
                <p className='text-xl my-3'>Bringing Your Style Home</p>
            </div>


            <div className='max-w-3xl mx-auto'>
                <h3 className='text-2xl text-start mt-5'>Delivery address</h3>
                <div className='my-5 flex flex-col'>
                    <form className='flex flex-col my-5' onSubmit={formic.handleSubmit} >

                        <input type="text" className='form-control outline-none my-4 border-b-2 border-gray-700 py-5'
                            id='shipping_street_address' name='shipping_street_address' placeholder='shipping_street_address' value={formic.values.shipping_street_address} onChange={formic.handleChange} />
                        {formic.errors.shipping_street_address && formic.touched.shipping_street_address && <p className='text-red-500'>{formic.errors.shipping_street_address}</p>}


                        <input type="text" className='form-control outline-none my-4 border-b-2 border-gray-700 py-5' placeholder='shipping_state'
                            id='shipping_state' name='shipping_state' value={formic.values.shipping_state} onChange={formic.handleChange} />
                        {formic.errors.shipping_state && formic.touched.shipping_state && <p className='text-red-500'>{formic.errors.shipping_state}</p>}


                        <input type="text" className='form-control outline-none my-4 border-b-2 border-gray-700 py-5' placeholder='shipping_country'
                            id='shipping_country' name='shipping_country' value={formic.values.shipping_country} onChange={formic.handleChange} />

                        {formic.errors.shipping_country && formic.touched.shipping_country && <p className='text-red-500'>{formic.errors.shipping_country}</p>}


                        <input type="text" className='form-control outline-none my-4 border-b-2 border-gray-700 py-5' placeholder='payment_method'
                            id='payment_method' name='payment_method' value={formic.values.payment_method} onChange={formic.handleChange} />

                        <button className='min-color text-white w-full py-2 rounded-lg' type='submit'>Next</button>







                    </form>
                </div>

            </div>

        </div>
    )
}

export default Data
