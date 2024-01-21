import { desenharProdutoNoCarrinhoCheckout, lerLocalStorage, apagarDoLocalStorage, salvarLocalStorage } from "./utility.js";
import { atualizarPrecoCarrinho } from "./cartMenu.js";

function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

    for (const idProduct in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinhoCheckout(idProduct, 'products-checkout-container', idsProdutoCarrinhoComQuantidade[idProduct]);
    }

    atualizarPrecoCarrinho();
}

function finalizePuchase(evt) {
    evt.preventDefault();
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }

    const dateNow = new Date();
    const orderNow = {
        orderDate: dateNow,
        order: idsProdutoCarrinhoComQuantidade 
    }
    
    const orderHistoric = lerLocalStorage('historic') ?? [];
    const puchaseHistoricUpdated = [orderNow, ...orderHistoric];

    salvarLocalStorage('historic', puchaseHistoricUpdated);
    apagarDoLocalStorage('carrinho');

    window.location.href = "./puchases-history.html";
}

desenharProdutosCheckout();

document.addEventListener('submit', (evt) => finalizePuchase(evt));