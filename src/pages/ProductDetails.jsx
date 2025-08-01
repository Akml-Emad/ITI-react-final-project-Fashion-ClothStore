import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../API/ProductsApi';


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center ">
        <div className="spinner-border" role="status">
          <span >!</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="row g-4">
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div className="text-center md-6 justify-content-center">
          <h2 className="mb-3">{product.title}</h2>
        <p className="fs-4 text-primary">${product.price}</p>
        <p className="badge bg-secondary mb-3">{product.category}</p>
        <p className="mb-4">{product.description}</p>
              {product.category!="jewelery"&&<p>
                <span className="mb-4">Available sizes </span>
                <span className="badge bg-warning mb-3 text-dark">s</span>
                <span className="badge bg-warning mb-3 text-dark">m</span>
                <span className="badge bg-warning mb-3 text-dark">l</span>
                <span className="badge bg-warning mb-3 text-dark">xl</span>
              </p>}
        <p className="mb-3 ">Previous customer rating : {product.rating.rate}</p>
        <div className="d-grid gap-2">
          <button className="btn btn-outline-success" type="button">
            Add to Cart
          </button>
          <Link to="/products" className="btn btn-outline-secondary">
            Back to Products
          </Link>
        </div>
          
        </div>
      </div>
      <div className="col-12 col-md-6 mr-5">
        <img 
            src={product.image} 
            alt={product.title} 
            className="img-fluid" 
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
      </div>
    </div>
  );
}

export default ProductDetails;