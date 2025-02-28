import { MoveRight } from "lucide-react";



const CategoryItem = ({ category }) => {
  const baseUrl = "https://test-ecomerce.xn--hrt-w-ova.de/";


  





  return (
    <>
      <div className="flex flex-col  gap-4">
        <img src={baseUrl + category.image} className="rounded-md object-cover w-full imgo" width={277} height={267} alt="" />
        <h2 className="text-xl font-bold text-start">{category.title}</h2>
        <p className="my-4">{category.description}</p>
        <div className="flex 
             items-center mine-color">
            <span className="" >More Info</span>
            <MoveRight className="mx-3" />

          </div>

      </div>
    </>
  );
};

export default CategoryItem;
