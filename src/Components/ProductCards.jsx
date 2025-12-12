'use client'

import { Heart } from 'lucide-react';
import { useState } from 'react';

const ProductCards = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="product-card">
      <div className={`product-image-wrapper ${!product.inStock ? 'out-of-stock-wrapper' : ''} ${product.isNew ? 'new-wrapper' : ''}`}>
        {product.isNew && product.inStock && (
          <div className="new">New Product</div>
        )}
        {!product.inStock && (
          <div className="out-of-stock">Out of Stock</div>
        )}
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

      <div className="product-card-content">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-bottom-row">
          <p className="product-price">₹{product.price}</p>
          <Heart
            onClick={toggleLike}
            className={`product-heart-icon ${liked ? 'liked' : ''}`}
            size={18}
            fill={liked ? 'red' : 'none'}
            stroke={liked ? 'red' : 'currentColor'}
            style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
