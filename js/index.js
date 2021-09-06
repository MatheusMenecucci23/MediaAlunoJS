var botaoCalcular = document.querySelector("#calcular");
botaoCalcular.addEventListener("click", function (event) {
  //criando uma função anonima
  var p = document.querySelector("p");
  p.remove();
  event.preventDefault(); //tirando o comportamento padrão do evento, ou seja
  var form = document.querySelector("#form");
  var aluno = obtemalunoFormulario(form);
  var erros = validacao(aluno, form);
  if (!(erros.length > 0)) {
    exibirNaTela(aluno);
    return 
  }
  console.log(erros)
  
  
});
function obtemalunoFormulario(form) {
  var aluno = {
    //criando um objeto
    nome: form.nome.value, //atributos do objetos
    nota1: parseFloat(form.nota1.value),
    nota2: parseFloat(form.nota2.value),
    nota3: parseFloat(form.nota3.value),
  };
  return aluno;
}

function calcularMedia(aluno) {
  var media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
  return media;
}

function exibirNaTela(aluno) {
  var p = document.createElement("p");
  var MediaNaTela =
    "Olá " +
    aluno.nome +
    "! Sua nota final é " +
    calcularMedia(aluno).toFixed(2);
  p.textContent = MediaNaTela;
  form.appendChild(p);
}

function validacao(aluno, form) {
  var erros = [];
  if (form.nome.value == "" || parseInt(form.nome.value)) {
    form.nome.focus()
    erros.push("Nome invalido");
    alert("Nome Invalido");
  }
  if (aluno.nota1 < 0 || aluno.nota1 > 10 || form.nota1.value == "") {
    form.nota1.focus()
    erros.push("Nota invalida");
    alert("Nota 1 Invalida");
  }
  if (aluno.nota2 < 0 || aluno.nota2 > 10 || form.nota2.value == "") {
    form.nota2.focus()
    erros.push("Nota invalida");
    alert("Nota 2 Invalida");
  }
  if (aluno.nota3 < 0 || aluno.nota3 > 10 || form.nota3.value == "") {
    form.nota3.focus()
    erros.push("Nota invalida");
    alert("Nota 3 Invalida");
  }
  return erros;
}

function limpar() {}
