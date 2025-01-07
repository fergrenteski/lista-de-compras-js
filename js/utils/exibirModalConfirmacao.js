import { criarElemento } from './criarElemento.js';

function exibirModalConfirmacao(callback) {
    const modalOverlay = criarElemento('div', '', 'modal-overlay');
    const modal = criarElemento('div', '', 'modal');
    const mensagem = criarElemento('p', 'Tem certeza que deseja limpar a lista?');

    const botaoConfirmar = criarElemento('button', 'Confirmar', 'btn-confirmar');

    botaoConfirmar.addEventListener('click', () => {
        callback();
        document.body.removeChild(modalOverlay);
    });

    const botaoCancelar = criarElemento('button', 'Cancelar', 'btn-cancelar');
    botaoCancelar.addEventListener('click', () => {
        document.body.removeChild(modalOverlay);
    });

    modal.appendChild(mensagem);
    modal.appendChild(botaoConfirmar);
    modal.appendChild(botaoCancelar);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
}

export { exibirModalConfirmacao };