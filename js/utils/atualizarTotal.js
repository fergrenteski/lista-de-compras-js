export function atualizarTotal(total) {
    const totalElement = document.querySelector('.total-value');
    totalElement.innerHTML = `R$ ${total.toFixed(2)}`;
}