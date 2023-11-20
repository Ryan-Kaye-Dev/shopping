import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import ProductCard from "./ProductCard";
import getProducts from "../utils/getProducts";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getProducts();
        // Filter products based on the search term
        const filteredProducts = productsData.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  // Function to update the search term
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
