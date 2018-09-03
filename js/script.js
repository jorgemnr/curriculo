// Mostrar botão que volta para o topo
window.onscroll = function () { fncBtnTopo(); };
function fncBtnTopo() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnTopo").style.display = "block";
    } else {
        document.getElementById("btnTopo").style.display = "none";
    }
}

// Faz rolagem para o topo da pagina suavemente
document.getElementById("btnTopo").onclick = function () { fncTopo() };
function fncTopo() {
    this.display = "none";
    this.opacity = "0.5";
    window.scroll({ top: 0, behavior: "smooth" });
}

//Para ABRIR por seção
let TodosAbre = document.getElementsByClassName("fas fa-plus-circle");
for (let index = 0; index < TodosAbre.length; index++) {
    TodosAbre[index].onclick = function () { fncAbre(TodosAbre[index]) };
}
function fncAbre(e) {
    //Mostrar o divConteudo
    e.parentNode.parentNode.parentNode.lastElementChild.style.display = "block";
    //mostrar Menos
    e.previousElementSibling.style.display = "block";
    //esconde Mais
    e.style.display = "none";
}

//Para FECHAR por seção
let TodosFecha = document.getElementsByClassName("fas fa-minus-circle");
for (let index = 0; index < TodosFecha.length; index++) {
    TodosFecha[index].onclick = function () { fncFecha(TodosFecha[index]) };
}
function fncFecha(e) {
    //Esconde o divConteudo
    e.parentNode.parentNode.parentNode.lastElementChild.style.display = "none";
    //mostrar Mais
    e.nextElementSibling.style.display = "block";
    //esconde Menos
    e.style.display = "none";
}


