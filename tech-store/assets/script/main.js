import { catalogueProducts } from "./cardProduct.js";
import { atualizarPrecoCarrinho, renderizarProdutosCarrinho, cartInitialization } from "./cartMenu.js";
import { inicializarFiltros } from "./filtersCatalogue.js";

catalogueProducts();  
cartInitialization();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();