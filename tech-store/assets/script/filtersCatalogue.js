const catalogueProducts = document.getElementById('section-products');

function removerSelect() {
    const labels = Array.from(document.getElementsByClassName('select'));

    for (const label of labels) {
        label.classList.remove('select');
    }
}

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogueProducts.getElementsByClassName('product'));
    
    for (const product of produtosEscondidos) {
        product.style.display = 'flex';
    }

    removerSelect();
    document.getElementById('exibir-todos-label').classList.add('select');
}

function esconderHardwares() {
    exibirTodos();
    const produtosHardware = Array.from(catalogueProducts.getElementsByClassName('hardwares'));

    for (const product of produtosHardware) {
        product.style.display = "none";
    }
    
    removerSelect();
    document.getElementById('exibir-perifericos-label').classList.add('select');
}

function esconderPerifericos() {
    exibirTodos();
    const produtosPeriferico = Array.from(catalogueProducts.getElementsByClassName('perifericos'));

    for (const product of produtosPeriferico) {
        product.style.display = "none";
    } 

    removerSelect();
    document.getElementById('exibir-hardwares-label').classList.add('select');
}

export function inicializarFiltros() {
    document.getElementById('exibir-perifericos').addEventListener('click', esconderHardwares);
    document.getElementById('exibir-hardwares').addEventListener('click', esconderPerifericos);
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos);
}