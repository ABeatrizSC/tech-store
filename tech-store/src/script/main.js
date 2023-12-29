const catalogoProdutos = [
    {
        id: 1,
        nome: 'PC Gamer RYZEN 7 5700G',
        preco: 2900,
        nomeArquivoImagem: 'product-1.jpg',
    },
    {
        id: 2,
        nome: 'Memória RAM 16GB DDR4',
        preco: 180,
        nomeArquivoImagem: 'product-2.jpg',
    },
    {
        id: 3,
        nome: 'Placa-mãe Asus Prime B450M',
        preco: 879,
        nomeArquivoImagem: 'product-3.jpeg',
    },
    {
        id: 4,
        nome: 'Mouse GT',
        preco: 180,
        nomeArquivoImagem: 'product-4.jpg',
    },
    {
        id: 5,
        nome: 'Mousepad Gamer RGB',
        preco: 120,
        nomeArquivoImagem: 'product-5.jpg',
    },
    {
        id: 6,
        nome: 'Teclado Mecânico Preto RGB',
        preco: 350,
        nomeArquivoImagem: 'product-6.jpg',
    },
    {
        id: 7,
        nome: 'Headset Orelhas Gato Rosa',
        preco: 85,
        nomeArquivoImagem: 'product-7.jpg',
    },
    {
        id: 8,
        nome: 'VGA Geforce RTX',
        preco: 700,
        nomeArquivoImagem: 'product-8.jpg',
    },
  ];

for (const produto of catalogoProdutos) {
    const cartaoProduto = `<div class="container-product">
  <img class="product-image"
    src="src/images/${produto.nomeArquivoImagem}"
    alt="Imagem do produto da TechStore."
    style="height: 300px"
  />

  <h2>${produto.nome}</h2>
  <p class="product-price">R$ ${produto.preco}</p>
  <button class="buttons button__add-cart"><i class="fa-solid fa-cart-plus"></i> Adicionar no carrinho</button>
  </div>`;
    
  document.getElementById("section__products").innerHTML += cartaoProduto;
}

function openCart() {
    document.getElementById('container-cart').classList.add('open');
}

function closeCart() {
    document.getElementById('container-cart').classList.remove('open');
}

function cart() {
    const buttonCloseCart = document.getElementsByClassName('button__close-cart')[0];
    const buttonOpenCart = document.getElementsByClassName('button__open-cart')[0];

    buttonCloseCart.addEventListener("click", closeCart);
    buttonOpenCart.addEventListener("click", openCart);
}

cart();

