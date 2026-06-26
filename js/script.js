const valorMetro = 550;

let lotes = [];

function calcularAdicional(valor) {

    if (valor <= 20000) {
        return "Isento";
    }

    if (valor <= 100000) {
        return (valor * 0.05).toFixed(2);
    }

    if (valor <= 500000) {
        return (valor * 0.10).toFixed(2);
    }

    if (valor <= 1000000) {
        return (valor * 0.15).toFixed(2);
    }

    return (valor * 0.20).toFixed(2);

}

function atualizarTabela() {

    let tabela = document.getElementById("listaLotes");

    tabela.innerHTML = "";

    for (let i = 0; i < lotes.length; i++) {

        let lote = lotes[i];

        tabela.innerHTML += `
            <tr>
                <td>${lote.descricao}</td>
                <td>${lote.comprimento} m</td>
                <td>${lote.largura} m</td>
                <td>${lote.area} m²</td>
                <td>R$ ${lote.valor.toFixed(2)}</td>
                <td>${lote.adicional === "Isento" ? "Isento" : "R$ " + lote.adicional}</td>
            </tr>
        `;
    }

}

document.getElementById("formLote").addEventListener("submit", function(event){

    event.preventDefault();

    let descricao = document.getElementById("descricao").value;

    let comprimento = Number(document.getElementById("comprimento").value);

    let largura = Number(document.getElementById("largura").value);

    let area = comprimento * largura;

    let valor = area * valorMetro;

    let adicional = calcularAdicional(valor);

    let lote = {
        descricao,
        comprimento,
        largura,
        area,
        valor,
        adicional
    };

    lotes.push(lote);

    atualizarTabela();

    this.reset();

});