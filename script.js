const form = document.getElementById("form-atividade");
const ImgAprovado = '<img src="images/aprovado.png" alt="emojis celebrando">';
const ImgReprovado = '<img src="images/reprovado.png" alt="emojis Decepcionado">';

const SpanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const SpanReprovado = '<span class="resultado reprovado">Reprovado</span>';

const NotaMinima = parseFloat(prompt("Digite a nota minima:"));

const atividades = [];
const notas = [];

let linhas = '';



form.addEventListener("submit",function(e){
    e.preventDefault();
    AdicionaLinha();
    AtualizaTabela();
    AtualizarMediaFinal();
})


AdicionaLinha = function(){
    const InputNomeAtividade = document.getElementById("nome-atividade");
    const InputNotaAtividade = document.getElementById("nota-atividade");
    if(atividades.includes(InputNomeAtividade.value)){
        alert(`A atividade: ${InputNomeAtividade.value} Já foi inserida`)
    }else{
        atividades.push(InputNomeAtividade.value);
        notas.push(parseFloat(InputNotaAtividade.value));
        let linha = '<tr>';
        linha += `<td> ${InputNomeAtividade.value}</td>`
        linha += `<td> ${InputNotaAtividade.value}</td>`
        linha += `<td> ${InputNotaAtividade.value >= NotaMinima ? ImgAprovado : ImgReprovado}</td>`;
        linha += '</tr>'
        linhas += linha;
    }
    
    InputNomeAtividade.value = '';
    InputNotaAtividade.value = '';
}

AtualizaTabela = function(){
    const CorpoTabela = document.querySelector("tbody");
    CorpoTabela.innerHTML = linhas;
}

AtualizarMediaFinal = function(){
    const MediaFinal = CalculaMediaFinal();
    document.getElementById('media-final-valor').innerHTML = MediaFinal;
    document.getElementById('media-final-resultado').innerHTML = MediaFinal >= NotaMinima ? SpanAprovado : SpanReprovado;
}

CalculaMediaFinal = function(){
    let SomaDasNotas = 0;
    for (let i = 0; i < notas.length; i++){
        SomaDasNotas += notas[i]
    }
    let media = SomaDasNotas / notas.length;
    return media
}