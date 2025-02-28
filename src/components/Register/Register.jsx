

// import { useFormik } from 'formik';
// import { LockKeyhole } from 'lucide-react';

// import { FaGoogle, FaUser } from 'react-icons/fa'
// import { MdAlternateEmail } from 'react-icons/md'
// import * as yup from 'yup'
// import axios from 'axios'
// import { useContext } from 'react';

// import { authContext } from '../../context/Auth/Auth';








// const Register = () => {




//     let { token, setToken } = useContext(authContext)
//     let user = {
//         name: "",
//         lastname: "",
//         email: "",
//         password: "",
//     }


//     let valid = yup.object({
//         name: yup.string().required("Please Enter Your Name"),
//         lastname: yup.string().required("Please Enter Your Last Name"),
//         email: yup.string().required("Please Enter Your Email").email('Please Enter Valid Email'),
//         password: yup.string().required("Please Enter Your Password").matches(/[a-z0-9]{6}/),
//     })

//     async function register(value) {
//         try {
//             let { data } = await axios.post("https://test-ecomerce.xn--hrt-w-ova.de/api/register", value)
//             console.log(data);

//         } catch (error) {
//             console.log(error.response.data.message);


//         }





//     }

//     let formic = useFormik({
//         initialValues: user,
//         onSubmit: register,


//         validationSchema: valid,

//     })



//     async function login(value) {
//         try {
//             let { data } = await axios.post("https://test-ecomerce.xn--hrt-w-ova.de/api/login", value)





//             if (data.isSuccessful === true) {
//                 setTimeout(() => {
//                     window.location.href = "/";
//                     localStorage.setItem("token", data.data.token)
//                      setToken(data.data.token)

//                 }, 1000)
//             }
//             console.log(data.data);
//         } catch (error) {
//             console.log(error.response.data.message);


//         }





//     }


//     let validate = yup.object({
//         email: yup.string().required("Please Enter Your Email").email('Please Enter Valid Email'),
//         password: yup.string().required("Please Enter Your Password").matches(/[a-z0-9]{6}/),
//     })

//     let formik = useFormik({
//         initialValues: {
//             email: "",
//             password: "",
//         },
//         onSubmit: login,

//         validationSchema: validate,

//     })




//     const tabs = [
//         { id: "signup", label: "Sign Up" },
//         { id: "signin", label: "Sign In" },

//     ];





//     return (
//         <>




//             <div className='relative max-w-full min-h-screen mx-auto text-center  overflow-hidden   '>



// <div className='max-w-5xl min-h-screen mx-auto text-center my-48  '>

// <div className='my-8'>
//     <h1 className='text-3xl font-bold mt-12'>Welcom To Our Store</h1>
//     <p className='py-3 text-slate-600'>Bringing Your Style Home</p>
// </div>





//                     <div className='grid grid-cols-1 gap-4 md:grid-cols-2 '>





//                         <div className='bg-slate-100 py-8 px-4 shadow sm:rounded-lg sm:px-10 '>


//                             <div className='flex-1 flex flex-col justify-center items-center md:mx-30 my-4'>
//                                 <form onSubmit={formik.handleSubmit} className='lg:w-3/2 mx-auto  flex gap-4 flex-col my-4'>

//                                     <p className='text-xl font-bold '>I am already a customer</p>



//                                     <div className='flex gap-4 flex-wrap'>

//                                         <label className='input input-bordered rounded flex items-center gap-2 w-full'>
//                                             <MdAlternateEmail />
//                                             <input
//                                                 type='email'
//                                                 id="email"
//                                                 placeholder='Email'
//                                                 name='email'
//                                                 required
//                                                 value={formik.values.email}
//                                                 onChange={formik.handleChange}


//                                             />
//                                             {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

//                                         </label>
//                                         <label className='input input-bordered rounded flex items-center gap-2 w-full'>
//                                             <LockKeyhole />
//                                             <input
//                                                 type='password'
//                                                 id="password"
//                                                 placeholder='Password'
//                                                 name='password'
//                                                 required
//                                                 value={formik.values.password}
//                                                 onChange={formik.handleChange}

//                                             />

//                                             {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
//                                         </label>
//                                     </div>





//                                     <div className='my-4'>





//                                         <button className='min-color w-full rounded-lg shadow-md text-white py-2 my-48' type='submit'
//                                         >

//                                             Login




//                                         </button>



//                                     </div>

//                                 </form>


//                             </div>



//                         </div>




//                         <div className='bg-slate-100 py-8 px-4 shadow sm:rounded-lg sm:px-10  '>


//                             <div className=' flex-1 flex flex-col justify-center items-center md:mx-30 my-4'>
//                                 <form onSubmit={formic.handleSubmit} className='lg:w-3/2 mx-auto  flex gap-4 flex-col my-4'  >

//                                     <p className='text-xl font-bold '>I am new to This store</p>
//                                     <p className='text-sm m-0'>Enjoy exclusive discounts & offers</p>

//                                     <div className='flex gap-4 flex-wrap'>
//                                         <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
//                                             <FaUser />
//                                             <input
//                                                 type='text'
//                                                 id='name'
//                                                 placeholder='First Name'
//                                                 name='name'
//                                                 required
//                                                 value={formic.values.name}
//                                                 onChange={formic.handleChange}


//                                             />

//                                             {formic.touched.name && formic.errors.name ? <div>{formic.errors.name}</div> : null}
//                                         </label>
//                                         <label className='input input-bordered rounded flex items-center gap-2 flex-1'>
//                                             <FaUser />
//                                             <input
//                                                 type='text'
//                                                 id='lastname'
//                                                 placeholder='Last Name'
//                                                 name='lastname'
//                                                 required
//                                                 value={formic.values.lastname}
//                                                 onChange={formic.handleChange}


//                                             />

//                                             {formic.touched.lastname && formic.errors.lastname ? <div>{formic.errors.lastname}</div> : null}
//                                         </label>
//                                     </div>

//                                     <div className='flex gap-4 flex-wrap'>

//                                         <label className='input input-bordered rounded flex items-center gap-2 w-full'>
//                                             <MdAlternateEmail />
//                                             <input
//                                                 type='email'
//                                                 id='email'
//                                                 placeholder='Email'
//                                                 name='email'
//                                                 required
//                                                 value={formic.values.email}
//                                                 onChange={formic.handleChange}

//                                             />
//                                             {formic.touched.email && formic.errors.email ? <div>{formic.errors.email}</div> : null}
//                                         </label>
//                                         <label className='input input-bordered rounded flex items-center gap-2 w-full'>
//                                             <LockKeyhole />
//                                             <input
//                                                 type='password'
//                                                 id='password'
//                                                 placeholder='Password'
//                                                 name='password'
//                                                 required
//                                                 value={formic.values.password}
//                                                 onChange={formic.handleChange}

//                                             />
//                                             {formic.touched.password && formic.errors.password ? <div>{formic.errors.password}</div> : null}
//                                         </label>
//                                     </div>





//                                     <div className='my-4'>

//                                         <div className='text-sm text-left w-full'>

//                                             <input type='checkbox' defaultChecked className='mr-2' />
//                                             <label className='text-sm text-left'>
//                                                 Yes, I would like to receive personalized offers, tips and
//                                                 tricks, and other information from Store.

//                                             </label>


//                                             <div className='text-sm  text-left'>
//                                                 The terms and conditions for Dubai Perfumes apply. Here you can find our privacy information.

//                                             </div>
//                                         </div>



//                                         <button className='min-color w-full rounded-lg shadow-md text-white py-2 my-2 relative ' type='submit' >


//                                             Sign up


//                                         </button>

//                                         <div className='flex items-center gap-5'>
//                                             <div className='bg-slate-400 w-full h-[1px]'></div>
//                                             <p>or</p>
//                                             <div className='bg-slate-400 w-full h-[1px]'></div>
//                                         </div>
//                                         <div className='flex flex-col items-center'>
//                                             <p className='text-sm my-5'>sign up with google</p>
//                                             <FaGoogle width={30} />
//                                         </div>



//                                     </div>

//                                 </form>


//                             </div>

//                         </div>









//                     </div>



//                 </div>


//             </div>

//         </>



//     )
// }

// export default Register




import React, { useContext, useState } from 'react'
import Signup from '../../pages/Signup';
import Signin from '../Signin/Signin';


const Register = () => {

   






    const [activeTab, setActiveTab] = useState("signup");

    const tabs = [
        { id: "signup", label: "Sign Up" },
        { id: "signin", label: "Sign In" },
    ];



    return (
        <>
            <div className='min-h-screen relative max-w-5xl mx-auto overflow-hidden'>
                <div className='relative z-10 container mx-auto px-30 py-16 text-center'>


                    <div className='my-24'>
                        <h1 className='text-3xl font-bold mt-12'>Welcom To Our Store</h1>
                        <p className='py-3 '>Bringing Your Style Home</p>
                    </div>

                    <div className='hidden md:flex justify-center items-center gap-10'>
                        <Signup />
                        <Signin />


                    </div>



                    <div className='sm:flex md:hidden'>
                        <div className='flex justify-center items-center gap-10'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`justify-center  items-center w-full px-8 border-none py-2 mx-2  transition-colors duration-200 ${activeTab === tab.id
                                        ? "bg-orange-100 mine-color"
                                        : "bg-slate-200 text-gray-800  mx-auto"
                                        }`}
                                >

                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {activeTab === "signup" && <Signup />}
                        {activeTab === "signin" && <Signin />}
                    </div>










                </div>



            </div>


            <div className='si hidden lg:block'>

                <svg width="354" height="856" viewBox="0 0 354 856" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4465 196.858C-42.0448 185.694 -75.2568 200.247 -130.777 211.267C-209.934 226.978 -282.107 211.225 -326.038 278.922C-358.974 329.677 -357.745 374.978 -341.029 433.127C-314.754 524.524 -227.948 529.554 -150.781 585.133C-69.8902 643.393 -24.7178 768.975 63.8756 723.273C155.132 676.197 -19.3628 523.398 61.6811 460.345C108.629 423.819 165.978 470.968 211.453 432.624C303.373 355.117 131.321 220.571 13.4465 196.858Z" fill="#E58411" fill-opacity="0.6" />
                    <path d="M-15.4485 219.36C-63.4345 209.679 -92.145 222.252 -140.146 231.76C-208.583 245.316 -270.995 231.657 -308.95 290.197C-337.406 334.087 -336.323 373.274 -321.843 423.582C-299.084 502.655 -224.024 507.044 -157.276 555.156C-87.3081 605.588 -48.1937 714.24 28.389 674.746C107.274 634.064 -43.6725 501.812 26.3748 447.305C66.9521 415.73 116.561 456.54 155.864 423.392C235.309 356.387 86.4829 239.925 -15.4485 219.36Z" fill="#E58411" />
                </svg>

            </div>


            <div className='rig hidden lg:block'>
                <svg width="354" height="791" viewBox="0 0 354 791" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M432.447 162.531C376.955 151.367 343.743 165.92 288.223 176.94C209.066 192.651 136.893 176.898 92.9624 244.595C60.026 295.35 61.2545 340.651 77.9713 398.8C104.246 490.198 191.052 495.227 268.219 550.806C349.11 609.066 394.282 734.648 482.876 688.946C574.132 641.87 399.637 489.072 480.681 426.018C527.629 389.492 584.978 436.641 630.453 398.297C722.373 320.79 550.321 186.244 432.447 162.531Z" fill="#E58411" fill-opacity="0.6" />
                    <path d="M403.551 185.033C355.565 175.352 326.854 187.925 278.853 197.433C210.416 210.989 148.004 197.33 110.049 255.87C81.5933 299.76 82.6756 338.947 97.1557 389.255C119.915 468.328 194.975 472.717 261.723 520.829C331.691 571.261 370.805 679.914 447.388 640.419C526.273 599.737 375.327 467.485 445.374 412.978C485.951 381.403 535.56 422.213 574.863 389.065C654.308 322.06 505.482 205.598 403.551 185.033Z" fill="#E58411" />
                </svg>

            </div>

        </>
    )
}

export default Register
