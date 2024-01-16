import { catalogue, lerLocalStorage, salvarLocalStorage } from "./utility.js";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

function openCart() {
    document.getElementById('container-cart').classList.add('open');
}

function closeCart() {
    document.getElementById('container-cart').classList.remove('open');
}

function goToCheckout() {
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0) {
        return;
    }
    window.location.href = "./checkout.html";
}

export function cartInitialization() {
    const buttonCloseCart = document.getElementsByClassName('button__close-cart')[0];
    const buttonOpenCart = document.getElementsByClassName('button__open-cart')[0];
    const buttonFinalizePuchase = document.getElementsByClassName('button__finalize-puchase')[0];
    
    buttonCloseCart.addEventListener('click', closeCart);
    buttonOpenCart.addEventListener('click', openCart);
    buttonFinalizePuchase.addEventListener('click', goToCheckout);

}

function removerDoCarrinho(idProduct){
    delete idsProdutoCarrinhoComQuantidade[idProduct];
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    renderizarProdutosCarrinho();
    atualizarPrecoCarrinho();
}

function incrementarQtdProduto(idProduct){
    idsProdutoCarrinhoComQuantidade[idProduct]++;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    attQtd(idProduct);
    atualizarPrecoCarrinho();
}

function decrementarQtdProduto(idProduct){
    if (idsProdutoCarrinhoComQuantidade[idProduct] === 1){
        removerDoCarrinho(idProduct);
        return;
    }

    idsProdutoCarrinhoComQuantidade[idProduct]--;
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    attQtd(idProduct);
    atualizarPrecoCarrinho();
}

function attQtd(idProduct){
    document.getElementById(`quantidade-${idProduct}`).innerText = idsProdutoCarrinhoComQuantidade[idProduct];
}

function desenharProdutoNoCarrinho(idProduct){
    const product = catalogue.find((p) => p.id === idProduct);
    const containerProductsCart = document.getElementById('container-cart__content');
    
    const divElement = document.createElement('div');
    const divElementClasses = ['product',];

    for (const divElementClass of divElementClasses) {
        divElement.classList.add(divElementClass);
    };

    const cartaoProdutosCarrinho = `<img src="assets/images/${product.nomeArquivoImagem}" alt="Foto do produto da Tech Store">
    <div class="product-information">
    <h4>${product.nome}</h4>
    <p>R$${product.preco}</p>
    </div>
    <button class="buttons" id="remover-item-${product.id}">    
    <i class="fa-solid fa-circle-xmark"></i>
    </button>
    <div class="product-button">
    <button class="buttons" id="increment-product-${product.id}">+</button>
    <p id="quantidade-${product.id}">${idsProdutoCarrinhoComQuantidade[product.id]}</p>
    <button class="buttons decrement" id="decrement-product-${product.id}">-</button>
    </div>`;

    divElement.innerHTML = cartaoProdutosCarrinho;
    containerProductsCart.appendChild(divElement);

    document.getElementById(`increment-product-${product.id}`).addEventListener('click', () => incrementarQtdProduto(idProduct));
    document.getElementById(`decrement-product-${product.id}`).addEventListener('click', () => decrementarQtdProduto(idProduct));

    document.getElementById(`remover-item-${product.id}`).addEventListener('click', () => removerDoCarrinho(idProduct));
}

export function renderizarProdutosCarrinho(){
    const containerProductsCart = document.getElementById('container-cart__content');
    containerProductsCart.innerHTML = '';
    for (const idProduct in idsProdutoCarrinhoComQuantidade) {
        desenharProdutoNoCarrinho(idProduct);
    }
}

export function addToCart(idProduct) {
    if (idProduct in idsProdutoCarrinhoComQuantidade){
        incrementarQtdProduto(idProduct);
        return;
    }

    idsProdutoCarrinhoComQuantidade[idProduct] = 1;

    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade);
    desenharProdutoNoCarrinho(idProduct);
    atualizarPrecoCarrinho();
}

export function atualizarPrecoCarrinho() {
    const precoCarrinho = document.getElementById('cart-price');
    let precoTotalCarrinho = 0;
    for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade) {
        precoTotalCarrinho += catalogue.find(p => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
    }

    precoCarrinho.innerText = `Total: R$ ${precoTotalCarrinho}`;
}