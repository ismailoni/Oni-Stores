import React, { useState } from 'react';

function EditProductForm({ product, editProduct, onCancel }) {
    const [name, setName] = useState(product.name);
    const [cartonPrice, setCartonPrice] = useState(product.cartonPrice);
    const [unitPrice, setUnitPrice] = useState(product.unitPrice);

    const handleSubmit = (e) => {
        e.preventDefault();
        editProduct({
            ...product,
            name,
            cartonPrice: parseFloat(cartonPrice),
            unitPrice: parseFloat(unitPrice),
        });
        onCancel(); // Close the edit form after submitting
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Edit Product</h3>
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Carton Price"
                value={cartonPrice}
                onChange={(e) => setCartonPrice(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Unit Price"
                value={unitPrice}
                onChange={(e) => setUnitPrice(e.target.value)}
                required
            />
            <button type="submit">Save Changes</button>
            <button type="button" onClick={onCancel}>
                Cancel
            </button>
        </form>
    );
}

export default EditProductForm;
