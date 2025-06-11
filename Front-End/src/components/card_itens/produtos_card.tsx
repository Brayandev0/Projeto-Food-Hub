"use client"
// components/ProductCard.tsx
import "./itens_card.css"
import React from 'react';
import { Star } from 'lucide-react';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  originalPrice: number;
  promotionalPrice?: number;
  rating: number;
  reviewCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  originalPrice,
  promotionalPrice,
  rating,
  reviewCount,
}) => {
  return (
    <div className="div-principal" > 
    <div className="product-card">
      {/* Imagem do produto */}
      <div className="product-image-container">
        <img 
          src={imageUrl} 
          alt={title} 
          className="product-image"
        />
      </div>
      
      {/* Corpo do card */}
      <div className="product-card-body">
        {/* Título do produto */}
        <h3 className="product-title">
          {title}
        </h3>
        
        {/* Avaliações */}
        <div className="rating-container">
          <div className="stars-container">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                size={16}
                fill={i < Math.floor(rating) ? '#ee4d2d' : 'none'}
                className={`star-icon ${i < rating ? 'filled' : 'empty'}`}
              />
            ))}
          </div>
          <span className="review-count">
            ({reviewCount})
          </span>
        </div>
        
        {/* Preços */}
        <div className="price-container">
          {promotionalPrice ? (
            <>
              <span className="promotional-price">
                R$ {promotionalPrice.toFixed(2)}
              </span>
              <span className="original-price">
                R$ {originalPrice.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="normal-price">
              R$ {originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Tag promocional */}
        {promotionalPrice && (
          <div className="promo-tag-container">
            <span className="promo-tag">
              {Math.round((1 - promotionalPrice / originalPrice) * 100)}% OFF
            </span>
          </div>
        )}
      </div>


    </div>
    </div>
  );
};

export default ProductCard;