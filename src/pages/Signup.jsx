import { useFormik } from 'formik'
import React, { useContext } from 'react'

import * as yup from 'yup'
import axios from 'axios'
import { FaGoogle, FaUser } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { LockKeyhole } from 'lucide-react'
import { authContext } from '../context/Auth/Auth'
import {toast} from "react-hot-toast"

const Signup = () => {


    const { token } = useContext(authContext)


   


    let user = {
        name: "",
        lastname: "",
        email: "",
        password: "",
    }


    let valid = yup.object({
        name: yup.string().required("Please Enter Your Name"),
        lastname: yup.string().required("Please Enter Your Last Name"),
        email: yup.string().required("Please Enter Your Email").email('Please Enter Valid Email'),
        password: yup.string().required("Please Enter Your Password").matches(/[a-z0-9]{6}/),
    })

    async function register(value) {
        try {
            let { data } = await axios.post("https://test-ecomerce.xn--hrt-w-ova.de/api/register", value)
            console.log(data);
            if(data.isSuccessful === false){
                toast.error(data.message)
            }
          

        } catch (error) {
            console.log(error.response.data.message);


        }





    }

    let formic = useFormik({
        initialValues: user,
        onSubmit: register,


        validationSchema: valid,

    })
    return (
        <div className='bg-gray-200 text-black dark:bg-gray-700 py-4 px-4 shadow sm:rounded-lg sm:px-10  '>


            <div className=' flex-1 flex flex-col justify-center items-center md:mx-30 my-4'>
                <form onSubmit={formic.handleSubmit} className='lg:w-3/2 mx-auto  flex gap-4 flex-col my-4'  >

                    <p className='text-xl font-bold '>I am new to This store</p>
                    <p className='text-sm m-0'>Enjoy exclusive discounts & offers</p>

                    <div className='flex gap-4 flex-wrap'>
                        <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
                            <FaUser />
                            <input
                                type='text'
                                id='name'
                                placeholder='First Name'
                                name='name'
                                required
                                value={formic.values.name}
                                onChange={formic.handleChange}


                            />

                            {formic.touched.name && formic.errors.name ? <div>{formic.errors.name}</div> : null}
                        </label>
                        <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
                            <FaUser />
                            <input
                                type='text'
                                id='lastname'
                                placeholder='Last Name'
                                name='lastname'
                                required
                                value={formic.values.lastname}
                                onChange={formic.handleChange}


                            />

                            {formic.touched.lastname && formic.errors.lastname ? <div>{formic.errors.lastname}</div> : null}
                        </label>
                    </div>

                    <div className='flex gap-4 flex-wrap'>

                        <label className='input input-bordered rounded flex items-center gap-2 w-full relative'>
                            <MdAlternateEmail />
                            <input
                                type='email'
                                id='email'
                                placeholder='Email'
                                name='email'
                                required
                                value={formic.values.email}
                                onChange={formic.handleChange}

                            />
                           

                            {formic.touched.email && formic.errors.email ? <div className='text-red-500 my-4 hidden md:block'>{formic.errors.email}</div> : null}
                        </label>
                        <label className='input input-bordered rounded flex items-center gap-2 w-full'>
                            <LockKeyhole />
                            <input
                                type='password'
                                id='password'
                                placeholder='Password'
                                name='password'
                                required
                                value={formic.values.password}
                                onChange={formic.handleChange}

                            />
                            {formic.touched.password && formic.errors.password ? <div className='text-red-500 my-4 md:my-0'>{formic.errors.password}</div> : null}
                        </label>
                    </div>





                    <div className='my-4'>

                        <div className='text-sm text-left w-full'>

                            <input type="radio" className='mr-2' />
                            <label className='text-sm text-left'>
                                Yes, I would like to receive personalized offers, tips and
                                tricks, and other information from Store.

                            </label>


                            <div className='text-sm  text-left'>
                                The terms and conditions for Dubai Perfumes apply. Here you can find our privacy information.

                            </div>
                        </div>



                        <button className='min-color w-full rounded-lg shadow-md text-white py-2 my-2 relative ' type='submit' >


                            Sign up


                        </button>

                        <div className='flex items-center gap-5'>
                            <div className='bg-slate-400 w-full h-[1px]'></div>
                            <p>or</p>
                            <div className='bg-slate-400 w-full h-[1px]'></div>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-sm my-5'>sign up with google</p>
                            <FaGoogle width={30} />
                        </div>



                    </div>

                </form>


            </div>

        </div>
    )
}

export default Signup
