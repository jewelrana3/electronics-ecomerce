
import React, { useState } from 'react';
import useProducts from "../../hooks/useProducts";
import ProductTwo from "./productTwo";
import './ProductTwo.css';

const Two = () => {
  const [products] = useProducts();
  const [activeTab, setActiveTab] = useState('top');

  const [activeDropdown, setActiveDropdown] = useState(null);


  const toggleDropdown = () => {
    setActiveDropdown('top');
  };

  const toggleDropdown2 = () => {
    setActiveDropdown('best');
  };

  const toggleDropdown3 = () => {
    setActiveDropdown('latest');
  };
  // Filter products based on the active tab
  const filteredProducts = () => {
    switch (activeTab) {
      case 'top':
        return products.filter(product => product.top);
      case 'best':
        return products.filter(product => product.best);
      case 'latest':
        return products.filter(product => product.latest);
      default:
        return products;
    }
  };

  return (
    <div className="md:px-20 mt-28">
      <div className="second lg:flex justify-between">
        <div>
          <h2 className="ml-2 text-4xl font-bold mb-10 ">Popular Products</h2>
        </div>
        <div className="flex gap-5">
          <div onClick={toggleDropdown} className={` ${activeDropdown === 'top' ? 'bg-red active' : ''}`}>
            <p className={`top ${activeTab === 'top' ? 'active' : ''}`} onClick={() => setActiveTab('top')}>Top Selling</p>
          </div>
          <div onClick={toggleDropdown2} className={`content ${activeDropdown === 'best' ? 'bg-red' : ''}`}>
            <p className={`top ${activeTab === 'best' ? 'active' : ''}`} onClick={() => setActiveTab('best')}>Best Selling</p>
          </div>
          <div onClick={toggleDropdown3} className={`content ${activeDropdown === 'latest' ? 'bg-red' : ''}`}>
            <p className={`top ${activeTab === 'latest' ? 'active' : ''}`} onClick={() => setActiveTab('latest')}>Latest Product</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredProducts().map(product => (
          <ProductTwo
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Two;
