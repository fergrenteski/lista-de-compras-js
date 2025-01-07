import { criarElemento } from './utils/criarElemento.js';
import { obterDataFormatada } from './utils/obterDataFormatada.js';
import { verificarListaVazia } from './utils/verificarListaVazia.js';
import { atualizarTotal } from './utils/atualizarTotal.js';
import { exibirModalConfirmacao } from './utils/exibirModalConfirmacao.js';

const inputItem = document.getElementById('input-item');
const inputItemPrice = document.getElementById('item-price');
const listaCompras = document.getElementById('lista-de-compras');
const button = document.getElementById('adicionar-item');
const clearButton = document.getElementById('clear-item');
let contador = 0;
let total = 0;

// Adiciona evento ao botão de adicionar item
function adicionarItem(event) {
    event.preventDefault();

    const itemValor = inputItem.value.trim();
    const inputPrice = parseFloat(inputItemPrice.value.trim());

    // Validação de entrada
    if (!itemValor) {
        alert('Digite um item para adicionar à lista');
        return;
    }

    if(!inputPrice) {
        alert('Digite um valor para o item');
        return;
    }

    // Criar container para o item da lista
    const itemLista = criarElemento('li');
    const divItemLista = criarElemento('div', '', 'lista-item');
    const divItemListaInfo = criarElemento('div', '', 'lista-item-info');
    const divItemProduct = criarElemento('div', '', 'lista-item-product');
    const divItemPrice = criarElemento('div', '', 'lista-item-price');

    // Criar checkbox com evento
    const inputCheckBox = criarElemento('input');
    inputCheckBox.type = 'checkbox';
    inputCheckBox.id = `checkbox-${contador++}`;
    const itemTexto = criarElemento('p', itemValor);

    inputCheckBox.addEventListener('click', () => {
        itemTexto.style.textDecoration = inputCheckBox.checked ? 'line-through' : 'none';
        price.style.textDecoration = inputCheckBox.checked ? 'line-through' : 'none';

        // Atualizar total ao marcar/desmarcar o item
        if (inputCheckBox.checked) {
            total -= inputPrice;
        } else {
            total += inputPrice;
        }
        atualizarTotal(total);
    });


    divItemPrice.appendChild(criarElemento('span', 'R$', 'lista-item-price-span'));

    const price = criarElemento('p', inputPrice.toFixed(2), 'lista-item-price-texto');
    divItemPrice.appendChild(price);
    
    // Adicionar checkbox e texto ao container
    divItemProduct.appendChild(inputCheckBox);
    divItemProduct.appendChild(itemTexto);

    // Criar e adicionar data ao item
    const dataElement = criarElemento('p', obterDataFormatada(), 'texto-data');

    // Montar item e adicionar à lista
    divItemListaInfo.appendChild(divItemProduct);
    divItemListaInfo.appendChild(dataElement);
    divItemLista.appendChild(divItemListaInfo);
    divItemLista.appendChild(divItemPrice);
    itemLista.appendChild(divItemLista);

    listaCompras.appendChild(itemLista);

     // Atualizar a mensagem de lista vazia
    verificarListaVazia(listaCompras);

    // Atualiza Total
    total += inputPrice;
    atualizarTotal(total);

    // Limpar o campo de entrada
    inputItem.value = '';
    inputItem.focus();

    inputItemPrice.value = '';

    clearButton.attributes.removeNamedItem('disabled');
};

// Botão para limpar a lista
clearButton.addEventListener('click', (event) => {
    event.preventDefault();
    exibirModalConfirmacao(() => {
        listaCompras.innerHTML = '';
        total = 0;
        atualizarTotal(total);
        verificarListaVazia(listaCompras);
        clearButton.attributes.setNamedItem(document.createAttribute('disabled'));
    });
});

document.getElementById('adicionar-item').addEventListener('click', adicionarItem);