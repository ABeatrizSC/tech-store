import { catalogue } from "./utility.js";
import { addToCart } from "./cartMenu.js";

export function catalogueProducts() {
    for (const product of catalogue) {
      const cartaoProduto = `<div class="container-product product ${product.hardwares ? 'hardwares' : 'perifericos'}">
      <img class="product-image"
        src="assets/images/${product.nomeArquivoImagem}"
        alt="Carrinho: ${product.nome}."
        style="height: 300px"
      />
    
      <h2>${product.nome}</h2>
      <p class="product-price">R$ ${product.preco}</p>
      <button class="buttons button-add-cart" id="button-add-cart-product${product.id}"><i class="fa-solid fa-cart-plus"></i> Adicionar no carrinho</button>
      </div>`;
        
      document.getElementById("section-products").innerHTML += cartaoProduto;
    }
    
    for (const product of catalogue) {
      document.getElementById(`button-add-cart-product${product.id}`).addEventListener('click', () => addToCart(product.id));
    }
}