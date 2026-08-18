// ==========================================
// CONFIGURAÇÃO DO WHATSAPP
// ==========================================

// COLOQUE SEU NÚMERO AQUI
// Exemplo: 5531999999999
const numeroWhatsApp = "SEU_NUMERO_AQUI";


// ==========================================
// WHATSAPP
// ==========================================

function comprar(produto) {

    const mensagem =
        `Olá! Tenho interesse na ${produto}. Gostaria de saber os tamanhos disponíveis e como posso comprar.`;

    const mensagemCodificada = encodeURIComponent(mensagem);

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    window.open(url, "_blank");
}


function abrirWhatsApp() {

    const mensagem =
        "Olá! Gostaria de conhecer as chuteiras disponíveis na Arena das Chuteiras.";

    const mensagemCodificada = encodeURIComponent(mensagem);

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    window.open(url, "_blank");
}


// ==========================================
// BUSCA E FILTROS
// ==========================================

const searchInput = document.getElementById("searchInput");

const products = document.querySelectorAll(".product-item");

const filterButtons = document.querySelectorAll(".filter-btn");

const noResults = document.getElementById("noResults");

let filtroAtual = "todos";


// Filtro por categoria
filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        filtroAtual = button.dataset.filter;

        filtrarProdutos();

    });

});


// Busca
searchInput.addEventListener("input", () => {

    filtrarProdutos();

});


// Função principal
function filtrarProdutos() {

    const textoBusca =
        searchInput.value.toLowerCase().trim();

    let encontrados = 0;


    products.forEach(product => {

        const categoria =
            product.dataset.category;

        const nome =
            product.dataset.name.toLowerCase();


        const categoriaCorreta =
            filtroAtual === "todos" ||
            categoria === filtroAtual;


        const nomeCorreto =
            nome.includes(textoBusca);


        if (categoriaCorreta && nomeCorreto) {

            product.style.display = "";

            encontrados++;

        } else {

            product.style.display = "none";

        }

    });


    // Mostra mensagem caso não encontre
    if (encontrados === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


// ==========================================
// FECHAR MENU MOBILE AO CLICAR
// ==========================================

const navLinks =
    document.querySelectorAll(".navbar-nav .nav-link");

const menu =
    document.getElementById("menu");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(menu);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});