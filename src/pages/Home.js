import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../context/ProductProvider";

const Home = () => {
  const { state: { products, error, loading } } = useProduct()
  console.log(products);

  let content;

  if (loading) {
    content = <p>Loading</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!loading && !error && products.length) {
    content = products.map((product) => (
      <ProductCard key={product._id} product={product}></ProductCard>
    ));
  }


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Home;
