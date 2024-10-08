import React, { useState } from 'react';
import ProductCard from './ProductCard';

function HomePage({ products, onLogin }) {
    const [searchTerm, setSearchTerm] = useState('');

    // Function to filter products based on the search term
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <button className="login-button" onClick={onLogin}>
                Manager Login
            </button>
            <div className="home-page">
                <h1>Oni Stores</h1>
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="search-bar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="product-list">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </div>
        
    );
}

export default HomePage;
