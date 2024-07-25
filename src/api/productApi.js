import axios from 'axios';

const API_URL = 'http://localhost:8080/products';

export const fetchProducts = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

export const fetchProductById = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
};
