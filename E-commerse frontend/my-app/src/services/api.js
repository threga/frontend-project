import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5000", // backend URL
});

export const productAPI = {
    getAllProducts: async () => {
        try {
            const response = await API.get('/getproduct');
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },
    createProduct: async (productData) => {
        try {
            const response = await API.post('/postProduct', productData);
            return response.data;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },
    updateProduct: async (id, productData) => {
        try {
            const response = await API.put(`/updateProduct/${id}`, productData);
            return response.data;
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }
    },
    deleteProduct: async (id) => {
        try {
            const response = await API.delete(`/deleteProduct/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    },
};

export default API;
