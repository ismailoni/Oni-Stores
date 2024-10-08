import React, { useState } from 'react';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';

function ManagerDashboard({ products, addProduct, editProduct, deleteProduct, onLogout }) {
    const [editingProduct, setEditingProduct] = useState(null);

    return (
        <div className="manager-dashboard">
            <h2>Manager Dashboard</h2>
            <button onClick={onLogout}>Logout</button>
            <AddProductForm addProduct={addProduct} />
            {editingProduct && (
                <EditProductForm 
                    product={editingProduct} 
                    editProduct={editProduct} 
                    onCancel={() => setEditingProduct(null)}
                />
            )}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <span>{product.name} - Carton: #{product.cartonPrice}, Unit: #{product.unitPrice}</span>
                        <button className="edit-button" onClick={() => setEditingProduct(product)}>Edit</button>
                        <button className="delete-button" onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ManagerDashboard;
