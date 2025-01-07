export function verificarListaVazia(listaCompras) {
    const mensagemListaVazia = document.getElementById('mensagem-lista-vazia');
    if (listaCompras.children.length === 0) {
        mensagemListaVazia.style.display = 'block';
    } else {
        mensagemListaVazia.style.display = 'none';
    }
}

export default verificarListaVazia;