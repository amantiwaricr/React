import axios from 'axios'
import { useEffect, useState } from 'react';
import { Header } from '../../Components/Header';
import { ProductGrid } from './ProductGrid';
import './HomePage.css';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products')
        setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <>

      <Header cart={cart} />
      <title>Ecommerce Project</title>

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}