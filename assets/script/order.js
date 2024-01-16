import { lerLocalStorage, desenharProdutoNoCarrinhoCheckout } from "./utility.js";

function createHistoricOrder(orderWithDate) {
    const orderElement = `<p>${ new Date(orderWithDate.date).toLocaleDateString("pt-br", {hour: "2-digit", minute: "2-digit"})}</p>
    <section id="section-order-${orderWithDate.date}" class="section-order">
    
    </section>`;

    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += orderElement;

    for(const idProduct in orderWithDate.order) {
        desenharProdutoNoCarrinhoCheckout(idProduct, `section-order-${orderWithDate.date}`, orderWithDate.order[idProduct]);
    }
}

function renderizarHistoricoPedidos() { /* sem */
    const historic = lerLocalStorage('historic');
    for (const orderWithDate of historic) {
        createHistoricOrder(orderWithDate);
    }
}

renderizarHistoricoPedidos();