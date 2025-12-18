const API_URL = "http://localhost:5000/api";

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

export const addProduct = async (product) => {
  const res = await fetch(`${API_URL}/add-product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return res.json();
};
