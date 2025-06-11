import React from 'react';

import Head from 'next/head';
import ProductCard from '@/components/card_itens/produtos_card';

const ProdutosPage = () => {
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <style>{`
          .products-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }
          
          .products-title {
            font-size: 2rem;
            font-weight: bold;
            color: #ee4d2d;
            margin-bottom: 2rem;
            text-align: center;
          }
          
          .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.5rem;
            justify-content: center;
          }
        `}</style>
      </Head>

      <div className="products-container">
        <h1 className="products-title">Nossos Produtos em Destaque</h1>
        
        <div className="products-grid">
          <ProductCard
            imageUrl="https://via.placeholder.com/300x300?text=Produto+1"
            title="Smartphone Premium 128GB RAM 8GB Câmera Tripla"
            originalPrice={2499.99}
            promotionalPrice={1999.99}
            rating={4.5}
            reviewCount={342}
          />
          
          <ProductCard
            imageUrl="https://via.placeholder.com/300x300?text=Produto+2"
            title="Fone de Ouvido Sem Fio com Cancelamento de Ruído"
            originalPrice={799.99}
            promotionalPrice={599.99}
            rating={4.2}
            reviewCount={128}
          />
          
          <ProductCard
            imageUrl="https://via.placeholder.com/300x300?text=Produto+3"
            title="Smart TV 55 Polegadas 4K UHD Android TV"
            originalPrice={3599.99}
            promotionalPrice={3899.99}
            rating={4.8}
            reviewCount={512}
          />
          
          <ProductCard
            imageUrl="https://via.placeholder.com/300x300?text=Produto+4"
            title="Notebook Ultra Slim 16GB SSD 512GB"
            originalPrice={4299.99}
            promotionalPrice={3899.99}
            rating={4.3}
            reviewCount={276}
          />
        </div>
      </div>
    </>
  );
};

export default ProdutosPage;