import React from 'react';
import ParticularCard from '../components/ParticularCard';
import { useProduct } from '../context/ProductProvider';

const Cart = () => {
  const { state: { products, error, loading, cart } } = useProduct()
  console.log(products);

  let content;

  if (loading) {
    content = <p>Loading</p>;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && cart.length === 0) {
    content = <p>Nothing to show, product list is empty</p>;
  }

  if (!loading && !error && cart.length) {
    content = cart.map((product) => (
      <ParticularCard key={product._id} product={product}></ParticularCard>
    ));
  }


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  )
};

export default Cart;