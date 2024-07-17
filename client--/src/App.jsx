
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const App = () => {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/getAll')
            .then(response => {
                setProducts(response.data.products);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product._id}>
                    <h2>{product.name}</h2>
                    <p>{product.type}</p>
                    <p>{product.price}</p>
                    <p>{product.rating}</p>
                    <p>{product.warranty_years}</p>
                    <p>{product.available}</p>
                </div>
            ))}
        </div>
    );
}

export default App
