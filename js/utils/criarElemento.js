export function criarElemento(tag, texto = '', classe = '') {
    const elemento = document.createElement(tag);
    elemento.textContent = texto;
    if (classe) {
        elemento.classList.add(classe);
    }
    return elemento;
}