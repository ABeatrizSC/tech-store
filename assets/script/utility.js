export const catalogue = [
    {
        id: "1",
        nome: 'PC Gamer RYZEN 7 5700G',
        preco: 2900,
        nomeArquivoImagem: 'product-1.jpg',
        hardwares: true,
    },
    {
        id: "2",
        nome: 'Memória RAM 16GB DDR4',
        preco: 180,
        nomeArquivoImagem: 'product-2.jpg',
        hardwares: true,
    },
    {
        id: "3",
        nome: 'Placa-mãe Asus Prime B450M',
        preco: 879,
        nomeArquivoImagem: 'product-3.jpg',
        hardwares: true,
    },
    {
        id: "4",
        nome: 'Mouse GT',
        preco: 180,
        nomeArquivoImagem: 'product-4.jpg',
        hardwares: false,
    },
    {
        id: "5",
        nome: 'Mousepad Gamer RGB',
        preco: 120,
        nomeArquivoImagem: 'product-5.jpg',
        hardwares: false,
    },
    {
        id: "6",
        nome: 'Teclado Mecânico Preto RGB',
        preco: 350,
        nomeArquivoImagem: 'product-6.jpg',
        hardwares: false,
    },
    {
        id: "7",
        nome: 'Headset Orelhas Gato Rosa',
        preco: 85,
        nomeArquivoImagem: 'product-7.jpg',
        hardwares: false,
    },
    {
        id: "8",
        nome: 'VGA Geforce RTX',
        preco: 700,
        nomeArquivoImagem: 'product-8.jpg',
        hardwares: true,
    },
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}

export function desenharProdutoNoCarrinhoCheckout(idProduct, idContainerHTML, quantidadeProduto){
    const product = catalogue.find((p) => p.id === idProduct);
    const containerProductsCart = document.getElementById(idContainerHTML);
    
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
    <div class="product-button">
    <p id="quantidade-${product.id}">${quantidadeProduto}x</p>
    </div>`;
    
    divElement.innerHTML = cartaoProdutosCarrinho;
    containerProductsCart.appendChild(divElement);
}