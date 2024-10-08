import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
    const [name, setName] = useState('');
    const [cartonPrice, setCartonPrice] = useState('');
    const [unitPrice, setUnitPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct({ 
            id: Date.now(), 
            name, 
            cartonPrice: parseFloat(cartonPrice), 
            unitPrice: parseFloat(unitPrice) 
        });
        setName('');
        setCartonPrice('');
        setUnitPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Add Product</button>
        </form>
    );
}

export default AddProductForm;
