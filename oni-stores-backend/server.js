const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const PRODUCTS_FILE = './products.json';

// Utility function to read products from JSON file
const readProducts = () => {
    const data = fs.readFileSync(PRODUCTS_FILE, 'utf-8');
    return JSON.parse(data);
};

// Utility function to write products to JSON file
const writeProducts = (products) => {
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2));
};

// Get all products
app.get('/products', (req, res) => {
    const products = readProducts();
    res.json(products);
});

// Add a new product
app.post('/products', (req, res) => {
    const products = readProducts();
    const newProduct = {
        id: Date.now(),
        ...req.body
    };
    products.push(newProduct);
    writeProducts(products);
    res.status(201).json(newProduct);
});

// Update a product
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const products = readProducts();
    const index = products.findIndex((p) => p.id === parseInt(id));

    if (index !== -1) {
        products[index] = { ...products[index], ...req.body };
        writeProducts(products);
        res.json(products[index]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Delete a product
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const products = readProducts();
    const filteredProducts = products.filter((p) => p.id !== parseInt(id));

    if (filteredProducts.length !== products.length) {
        writeProducts(filteredProducts);
        res.status(200).json({ message: 'Product deleted' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
