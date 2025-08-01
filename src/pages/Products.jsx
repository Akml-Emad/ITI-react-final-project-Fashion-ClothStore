import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../API/ProductsApi';


function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-3">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-4 text-danger">Trending</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-5 g-0">
        {products.map(product => {
          if(product.category != "electronics"){
          return <div className="col" key={product.id}>
            <div className="card h-100">
              <div className="card-img-container" style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px' }}>
                <img 
                  src={product.image} 
                  className="card-img-top" 
                  alt={product.title} 
                  style={{ maxHeight: '150px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
             <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title.substring(0,30)}...</h5>
                <p className="card-text mb-auto">{product.price} EGP</p>
                <Link to={`/products/${product.id}`} className="btn btn-primary mt-2">
                  view
                </Link>
              </div>
            </div>
          </div>
        }
        })}
      </div>
    </div>
  );
}

export default Products;