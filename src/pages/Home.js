import React from "react";
import { useProduct } from "../context/ProductProvider";

const Home = () => {
    const {state: {products, error, loading}} = useProduct()
    console.log(products);


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>

      This is home
    </div>
  );
};

export default Home;
