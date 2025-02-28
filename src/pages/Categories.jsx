// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { MoveRight } from 'lucide-react';
// import React, { useState } from 'react'

// const Categories = () => {

//     const fetchCategories = async () => {
//         try {
//             const { data } = await axios.get("https://test-ecomerce.xn--hrt-w-ova.de/api/category/get",
//                 {
//                     headers: {
//                         "Accept-Language": "en"
//                     }
//                 }
//             );
//             return data;
//         } catch (error) {
//             console.error("API Error:", error.response ? error.response.data : error.message);
//             throw new Error(error.response?.data?.message || "Failed to fetch categories");
//         }
//     };

//     const { data: categories, isLoading, isError, error } = useQuery({
//         queryKey: ["categories"],
//         queryFn: fetchCategories,
//     });

//     console.log(categories?.data);


//     const baseUrl = "https://test-ecomerce.xn--hrt-w-ova.de/";

//     const [expandedCategories, setExpandedCategories] = useState({});

//     const toggleCategory = (id) => {
//         setExpandedCategories((prev) => ({
//             ...prev,
//             [id]: !prev[id], // تغيير حالة الفئة الفردية
//         }));
//     };

    
//     return (
//         <div>

//             {categories?.map((category) => (


//             <div key={category.id}>



//                 return (
//                 <div className="flex flex-col  gap-4">
//                     <img src={baseUrl + category.image} className="rounded-md object-cover w-full imgo" width={277} height={267} alt="" />
//                     <h2 className="text-xl font-bold text-start">{category.title}</h2>
//                     <p>{expandedCategories[category.id] ? category.description : previewText}</p>

//                     <button
//                         onClick={() => toggleCategory(category.id)}
//                         className="flex 
//        items-center mine-color"
//                     >
//                         <span className="" >More Info</span>
//                         <MoveRight className="mx-3" />

//                         {expandedCategories[category.id] ? "Show Less" : "More Info"}
//                     </button>



//                 </div>
//                 );
//             </div>
//             ))}



//         </div>


//     )
// }

// export default Categories
