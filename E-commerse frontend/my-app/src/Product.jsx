import { Link } from "react-router-dom";

function Product() {
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

  return (
    <div style={{padding: '20px'}}>
      <h1>Our Products</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px'}}>
        {products.map((product) => (
          <div key={product._id} style={{border: '1px solid #ccc', padding: '15px', borderRadius: '8px'}}>
            <img
              src={product.image}
              alt={product.name}
              style={{width: '100%', height: '200px', objectFit: 'cover'}}
            />
            <h3>{product.name}</h3>
            <p style={{color: 'green', fontWeight: 'bold'}}>₹{product.price.toLocaleString()}</p>
            <p>{product.description}</p>
            <Link to={`/product/${product._id}`}>
              <button style={{padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px'}}>
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;