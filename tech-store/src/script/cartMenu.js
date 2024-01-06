import { catalogue } from "./utility.js";

const idsProdutoCarrinhoComQuantidade = {}

function openCart() {
    document.getElementById('container-cart').classList.add('open');
}

function closeCart() {
    document.getElementById('container-cart').classList.remove('open');
}

export function cartInitialization() {
    const buttonCloseCart = document.getElementsByClassName('button__close-cart')[0];
    const buttonOpenCart = document.getElementsByClassName('button__open-cart')[0];
    
    buttonCloseCart.addEventListener("click", closeCart);
    buttonOpenCart.addEventListener("click", openCart);
}

function removerDoCarrinho(idProduct){
    delete idsProdutoCarrinhoComQuantidade[idProduct];
    renderizarProdutosCarrinho();
}

function incrementarQtdProduto(idProduct){
    idsProdutoCarrinhoComQuantidade[idProduct]++;
    attQtd(idProduct);
}

function decrementarQtdProduto(idProduct){
    if (idsProdutoCarrinhoComQuantidade[idProduct] === 1){
        removerDoCarrinho(idProduct);
    } else {
        idsProdutoCarrinhoComQuantidade[idProduct]--;
        attQtd(idProduct);
    }
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

    const cartaoProdutosCarrinho = `<img src="src/images/${product.nomeArquivoImagem}" alt="Foto do produto da Tech Store">
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

function renderizarProdutosCarrinho(){
    const containerProductsCart = document.getElementById('container-cart__content');
    containerProductsCart.innerHTML = '';
    idsProdutoCarrinhoComQuantidade
}

export function addToCart(idProduct) {
    if (idProduct in idsProdutoCarrinhoComQuantidade){
        incrementarQtdProduto(idProduct);
        return;
    }

    idsProdutoCarrinhoComQuantidade[idProduct] = 1;

    desenharProdutoNoCarrinho(idProduct);
}