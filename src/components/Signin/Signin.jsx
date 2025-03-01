import axios from 'axios';
import React, { useContext } from 'react'

import * as yup from 'yup'
import { LockKeyhole } from 'lucide-react';
import { MdAlternateEmail } from 'react-icons/md';
import { useFormik } from 'formik';
import { authContext } from '../../context/Auth/Auth';
import toast from 'react-hot-toast';

const Signin = () => {
    let { setToken } = useContext(authContext)
    let user = {
        name: "",
        lastname: "",
        email: "",
        password: "",
    }


    async function login(value) {
        try {
            let { data } = await axios.post("https://test-ecomerce.xn--hrt-w-ova.de/api/login", value)





            if (data.isSuccessful === true) {
                setTimeout(() => {
                    window.location.href = "/";
                    localStorage.setItem("token", data.data.token)
                    setToken(data.data.token)

                }, 1000)
            }
            console.log(data.data);
        } catch (error) {
            console.log(error.response.data.message);
            toast.error(error.response.data.message)


        }





    }


    let validate = yup.object({
        email: yup.string().required("Please Enter Your Email").email('Please Enter Valid Email'),
        password: yup.string().required("Please Enter Your Password").matches(/[a-z0-9]{6}/),
    })

    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: login,

        validationSchema: validate,

    })
    return (
        <>

            <div className='bg-gray-200 dark:bg-gray-700 text-black   py-84 md:py-20 px-4 shadow sm:rounded-lg sm:px-10 text-center '>


                <div className='flex-1 flex flex-col justify-center items-center md:mx-30 my-4'>
                    <form onSubmit={formik.handleSubmit} className='lg:w-3/2 mx-auto  flex gap-4 flex-col my-4'>

                        <p className='text-xl font-bold text-center py-10 '>I am already a customer</p>



                        <div className='flex gap-4 flex-wrap'>

                            <label className='input input-bordered rounded flex items-center gap-2 w-full'>
                                <MdAlternateEmail />
                                <input
                                    type='email'
                                    id="email"
                                    placeholder='Email'
                                    name='email'
                                    required
                                    value={formik.values.email}
                                    onChange={formik.handleChange}


                                />
                                {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

                            </label>
                            <label className='input input-bordered rounded flex items-center gap-2 w-full'>
                                <LockKeyhole />
                                <input
                                    type='password'
                                    id="password"
                                    placeholder='Password'
                                    name='password'
                                    required
                                    value={formik.values.password}
                                    onChange={formik.handleChange}

                                />

                                {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                            </label>
                        </div>








                        <div className='my-4'>





                            <button className='min-color w-full rounded-lg shadow-md text-white py-2 my-20' type='submit'
                            >

                                Login




                            </button>



                        </div>

                    </form>


                </div>




               

            </div>


        </>
    )
}

export default Signin
