// import { Moon, Search, ShoppingBag, Sun } from 'lucide-react'
// import React, { useContext, useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { authContext } from '../../context/Auth/Auth'


// const Navbar = () => {

//     const { token } = useContext(authContext)

//     const [theme, setTheme] = useState(() => {
//         if (typeof window !== "undefined") {
//             return localStorage.getItem("theme") || "light";
//         }
//         return "light";
//     });


//     useEffect(() => {
//         const root = document.documentElement;
//         if (theme === "dark") {
//             root.classList.add("dark");
//         } else {
//             root.classList.remove("dark");
//         }
//         localStorage.setItem("theme", theme);
//     }, [theme]);




//     const toggleTheme = () => {
//         setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
//     };


//     return (
//         <>
//         <header className='fixed top-0 left-0 z-50 w-full md:mt-0 bg-transparent text-center py-2 mx-auto border-b-2 border-gray-100'>
//             <div className='container mx-auto flex justify-between px-4 py-8'>
//                 <Link to='/' className='text-xl font-bold space-x-2 flex items-center '>LOGO</Link>

// <nav className='md:flex space-x-4 items-center'>
//     {token ? <>
//         <Link to={'/'}>Home</Link>
//         <Link to={'category/:id'}>Shop</Link>
//     </> : ""}

// </nav>

//                 <nav className='flex  space-x-4 items-center'>
//                     <form className='hidden lg:flex  items-center relative'>
//                         <input type='text' placeholder='search' className='border p-2 rounded-full px-4 ' />
//                         <Search size={29} color="#080808" strokeWidth={1.25} className='absolute right-2' />
//                     </form>
// <Link to={'/cart'} className='relative group hidden md:flex items-center'>
//     <ShoppingBag size={28}  strokeWidth={1.25} />
//     <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full min-color text-[10px] text-white'>
//         0
//     </span>
// </Link>


//                     <div>

//                         <button
//                             onClick={toggleTheme}
//                             className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition duration-300"
//                         >
//                             {theme === "dark" ? <Sun className="text-yellow-500" /> : <Moon className="text-gray-900" />}
//                         </button>

//                     </div>




//                 </nav>

//             </div>



//         </header>


//         </>
//     )
// }

// export default Navbar








import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Moon, Sun, Menu, X, ChevronDown, ShoppingBag, Search } from "lucide-react";
import { authContext } from "../../context/Auth/Auth";
import { Link } from "react-router-dom";

const Navbar = () => {

    const { token } = useContext(authContext)
    const { t } = useTranslation();
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
    const [menuOpen, setMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const currentLanguage = i18n?.language ? i18n.language.toUpperCase() : "EN";

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleLangMenu = () => setLangMenuOpen(!langMenuOpen);
    const changeLanguage = (lng) => {
        if (i18n) {
            i18n.changeLanguage(lng);
            setLangMenuOpen(false);
        }
    };

    return (
        <nav className="bg-transparent dark:bg-gray-900 p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to='/' className='text-xl font-bold space-x-2 flex items-center '>LOGO</Link>



                <div className="flex justify-between items-center mx-24">
                    {token ? <>
                        <Link className="mx-10" to={'/'}>Home</Link>
                        <Link to={'category/:id'}>Shop</Link>
                    </> : ""}

                </div>





                <nav className='flex  space-x-4 items-center'>
                    <Link to={'/search'} className='hidden lg:flex  items-center relative'>
                        <input type='text' placeholder='search' className='border p-2 rounded-full px-4 ' />
                        <Search size={29} color="#080808" strokeWidth={1.25} className='absolute right-2' />
                    </Link>
                    <Link to={'/cart'} className='relative group hidden md:flex items-center'>
                        <ShoppingBag size={28} strokeWidth={1.25} />
                        <span className='absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full min-color text-[10px] text-white'>
                            0
                        </span>
                    </Link>
                </nav>
                <div className="hidden md:flex space-x-4 items-center relative">
                    <button onClick={toggleDarkMode} className="p-2 bg-gray-700 text-white rounded">
                        {darkMode ? <Sun /> : <Moon />}
                    </button>
                    <div className="relative">
                        <button onClick={toggleLangMenu} className="p-2 bg-transparent text-white rounded flex items-center justify-center">
                            {currentLanguage} <ChevronDown className="ml-2" />
                        </button>
                        {langMenuOpen && (
                            <div className="absolute left-full top-0 ml-2 bg-white dark:bg-gray-700 shadow-lg rounded p-2 flex flex-col w-40">
                                <button onClick={() => changeLanguage("en")} className="p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded flex items-center">
                                    <img src="/flags/en.png" alt="English" className="w-6 h-6 mr-2" /> En
                                </button>
                                <button onClick={() => changeLanguage("ar")} className="p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded flex items-center">
                                    <img src="/flags/ar.png" alt="Arabic" className="w-6 h-6 mr-2" /> Ar
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <button onClick={toggleMenu} className="md:hidden p-4 bg-gray-700 text-white rounded">
                    {menuOpen ? <X /> : <Menu />}
                </button>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-gray-200 dark:bg-gray-800 p-4 flex flex-col space-y-2 items-start">
                    <div className="flex justify-between w-full">
                        <h1 className="text-xl font-bold dark:text-white">{t("logo")}</h1>
                        <button onClick={toggleMenu} className="p-2 bg-gray-700 text-white rounded">
                            <X />
                        </button>
                    </div>
                    <button onClick={toggleDarkMode} className="p-2 bg-gray-700 text-white rounded w-full">
                        {darkMode ? <Sun /> : <Moon />}
                    </button>
                    <div className="relative w-full">
                        <button onClick={toggleLangMenu} className="p-2 bg-blue-500 text-white rounded flex items-center w-full justify-between">
                            {currentLanguage} <ChevronDown />
                        </button>
                        {langMenuOpen && (
                            <div className="absolute left-0 top-full mt-2 bg-black text-white  dark:bg-gray-700 shadow-lg rounded p-2 flex flex-col w-full">
                                <button onClick={() => changeLanguage("en")} className="p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded w-full flex items-center">
                                     English
                                </button>
                                <button onClick={() => changeLanguage("ar")} className="p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded w-full flex items-center">
                                     العربية
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;



