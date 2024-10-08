import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p><strong>Carton Price:</strong> #{product.cartonPrice}</p>
            <p><strong>Unit Price:</strong> #{product.unitPrice}</p>
        </div>
    );
}

export default ProductCard;
