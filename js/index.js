
var botaoCalcular = document.querySelector("#calcular");
botaoCalcular.addEventListener("click", function(event) {//criando uma função anonima
    event.preventDefault();//tirando o comportamento padrão do evento, ou seja
    var form = document.querySelector("#form")
    var aluno = obtemalunoFormulario(form)
    exibirNaTela(aluno,form)
    
})
function obtemalunoFormulario(form){
    var aluno = {//criando um objeto 
        nome: form.nome.value,//atributos do objetos
        nota1: parseFloat(form.nota1.value),
        nota2: parseFloat(form.nota2.value),
        nota3: parseFloat(form.nota3.value)
    }
    return aluno
    
}

function calcularMedia(aluno){
    var media = (aluno.nota1+aluno.nota2+aluno.nota3)/3
    return media
}

function exibirNaTela(aluno){
    var p = document.createElement("p")
    var MediaNaTela =("Olá "+aluno.nome+"! Sua nota final é "+calcularMedia(aluno).toFixed(2))
    p.textContent = MediaNaTela
    form.appendChild(p)
}