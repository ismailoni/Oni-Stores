import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomePage from './components/HomePage';
import ManagerLogin from './components/ManagerLogin';
import ManagerDashboard from './components/ManagerDashboard';
import './App.css';

const API_URL = 'http://localhost:5000/products';

function App() {
    const [products, setProducts] = useState([]);
    const [isManager, setIsManager] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(API_URL);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const addProduct = async (newProduct) => {
        try {
            const response = await axios.post(API_URL, newProduct);
            setProducts([...products, response.data]);
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const editProduct = async (updatedProduct) => {
        try {
            const response = await axios.put(`${API_URL}/${updatedProduct.id}`, updatedProduct);
            setProducts(products.map((product) =>
                product.id === updatedProduct.id ? response.data : product
            ));
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`${API_URL}/${productId}`);
            setProducts(products.filter((product) => product.id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="app-container">
            {!isManager ? (
                !showLogin ? (
                    <HomePage
                        products={products}
                        onLogin={() => setShowLogin(true)}
                    />
                ) : (
                    <ManagerLogin onLogin={() => {
                        setIsManager(true);
                        setShowLogin(false);
                      }} 
                      onBack={() => setShowLogin(false)}  // Pass back function
                    />
                )
            ) : (
                <ManagerDashboard
                    products={products}
                    addProduct={addProduct}
                    editProduct={editProduct}
                    deleteProduct={deleteProduct}
                    onLogout={() => setIsManager(false)}
                />
            )}
        </div>
    );
}

export default App;
