import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div style={{
      padding: 20,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 20,
      justifyContent: 'center',
      backgroundColor: '#f9f9f9',
      minHeight: '100vh'
    }}>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))
      )}
    </div>
  );
}
