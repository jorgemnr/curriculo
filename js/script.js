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
    window.scroll({ top: 0, behavior: "smooth" });
}

