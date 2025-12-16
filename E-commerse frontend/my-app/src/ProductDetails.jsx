import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  
  const products = [
    {
      _id: "1",
      name: "Laptop",
      price: 55000,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300",
      description: "High performance laptop for work and gaming."
    },
    {
      _id: "2",
      name: "Mobile",
      price: 25000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
      description: "Latest smartphone with amazing camera and features."
    },
    {
      _id: "3",
      name: "Headphones",
      price: 3000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
      description: "Noise-cancelling headphones for immersive sound."
    }
  ];

  const product = products.find((p) => p._id === id);

  if (!product) return <h2>Product not found!</h2>;

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find((item) => item._id === product._id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{padding: '20px', maxWidth: '800px', margin: '0 auto'}}>
      <div style={{display: 'flex', gap: '30px', alignItems: 'flex-start'}}>
        <div style={{flex: '1'}}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{width: '100%', maxWidth: '400px', borderRadius: '8px'}}
          />
        </div>
        
        <div style={{flex: '1'}}>
          <h1>{product.name}</h1>
          <p style={{fontSize: '1.1rem', color: '#666', margin: '15px 0'}}>{product.description}</p>
          <h2 style={{color: '#e74c3c', fontSize: '2rem', margin: '20px 0'}}>₹{product.price.toLocaleString()}</h2>
          
          <div style={{display: 'flex', gap: '10px', marginTop: '30px'}}>
            <button 
              onClick={handleAddToCart}
              style={{
                padding: '12px 24px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Add to Cart
            </button>
            <button 
              style={{
                padding: '12px 24px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;