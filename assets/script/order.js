import { lerLocalStorage, desenharProdutoNoCarrinhoCheckout } from "./utility.js";

function createHistoricOrder(orderWithDate) {
    const orderElement = `
    <section id="section-order-${orderWithDate.orderDate}" class="section-order">
    <p>${new Date(orderWithDate.orderDate).toLocaleDateString("pt-BR", {hour: "2-digit", minute: "2-digit"})}</p>
    </section>`;

    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += orderElement;

    for(const idProduct in orderWithDate.order) {
        desenharProdutoNoCarrinhoCheckout(idProduct, `section-order-${orderWithDate.orderDate}`, orderWithDate.order[idProduct]);
    }
}

function renderizarHistoricoPedidos() { 
    const historic = lerLocalStorage('historic');
    for (const orderWithDate of historic) {
        createHistoricOrder(orderWithDate);
    }
}

renderizarHistoricoPedidos();