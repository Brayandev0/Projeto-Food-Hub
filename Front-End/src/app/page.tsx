"use client"
import "./globals.css";
import Link from 'next/link';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Home() {
useEffect(() => {
  async function fetchProdutos() {
    try {
      const res = await fetch("http://127.0.0.1:8080/produtos/promocionais", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("Resposta da API:", res);

      if (!res.ok) throw new Error("Erro ao buscar produtos");

      const produtosRaw = await res.json();
      const grid = document.querySelector('.products-grid');

      // 🔁 Converte snake_case para camelCase
      const produtos = produtosRaw.map(prod => ({
        nome: prod.nome_Produto,
        preco: prod.Valor_Produto,
        precoPromocional: prod.PrecoPromocional,
        categoria: prod.categoria,
        caminho_img: prod.caminho_img,
        estimativa_entrega: prod.Estimativa_Entrega
      }));

      if (grid && Array.isArray(produtos)) {
        grid.innerHTML = produtos.map(prod => `
          <div class="product-card">
            <div class="product-image">
              <img src="${prod.caminho_img}" alt="${prod.nome}">
            </div>
            <div class="product-info">
              <h3 class="product-title">${prod.nome}</h3>
              <p class="product-category">${prod.categoria}</p>
              <p class="product-price">
                ${prod.precoPromocional ?
                  `R$ ${Number(prod.precoPromocional).toFixed(2)} <span class="product-discount">R$ ${(Number(prod.preco) + 10).toFixed(2)}</span>` :
                  `R$ ${(Number(prod.preco) + 20).toFixed(2)}`
                }
              </p>
              <p class="product-entrega">entrega em <strong>${prod.estimativa_entrega}</strong></p>
            </div>
          </div>
        `).join('');
      }

    } catch (err) {
      console.error("Erro ao carregar produtos:", err);
    }
  }

  fetchProdutos();
}, []);


  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div id="texto_principal">
              <h2>Os melhores produtos, diretamente na sua casa!</h2>
              <p>Entrega rápida e segura. Peça agora mesmo!</p>
            </div>
            <div className="address-form">
              <input type="text" id="cepInput" placeholder="Digite seu CEP" max="9" />
              <button id="checkCEP">Verificar</button>
            </div>
            <p id="cepMessage" className="cep-message"></p>
          </div>
        </div>
      </section>

      <section id="promocoes" className="promotions">
        <div className="container">
          <h2>Promoções</h2>
          <div className="products-grid"></div>
        </div>
      </section>

     

      {/* Scripts opcionais */}
      <Script src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js" strategy="lazyOnload" />
      <Script src="/config.js" strategy="lazyOnload" />
      <Script src="/app.js" strategy="lazyOnload" />
    </>
  );
}
