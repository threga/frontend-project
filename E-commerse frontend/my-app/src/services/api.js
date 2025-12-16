import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';
const API = axios.create({
  baseURL: "http://localhost:5000", // backend URL
});


export const productAPI = {
    getAllProducts: async () => {
        const response = await API.get('/getproduct');
        return response.data;
    },
    createProduct: async (productData) => {
        const response = await API.post('/postProduct', productData);
        return response.data;
    },
    updateProduct: async (id, productData) => {
        const response = await API.put(`/updateProduct/${id}`, productData);
        return response.data;
    },
    deleteProduct: async (id) => {
        const response = await API.delete(`/deleteProduct/${id}`);
        return response.data;
    },
};

export default API;
