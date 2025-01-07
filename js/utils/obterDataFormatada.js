export function obterDataFormatada() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const ano = data.getFullYear();
    const time = data.toLocaleTimeString();

    return `${dia}/${mes}/${ano} | ${time}`;
}