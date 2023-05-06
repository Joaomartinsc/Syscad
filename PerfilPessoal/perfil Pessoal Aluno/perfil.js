const newElement = JSON.parse(localStorage.getItem("users"));
 

function nomedora(){
let nome = document.getElementById("last_name0")
let cpf = document.getElementById("last_name1")
let email = document.getElementById("last_name2")
let dataNasc = document.getElementById("last_name3")
let endereco = document.getElementById("last_name4")
let celular = document.getElementById("last_name5")
let plano = document.getElementById("last_name6")
let matricula = document.getElementById("last_name7")
    
    let novoElemento = JSON.parse(localStorage.getItem('eu'))
    nome.value = novoElemento.user
    cpf.value = novoElemento.CPF
    email.value = novoElemento.email
    dataNasc.value = novoElemento.dataNasc
    endereco.value = novoElemento.endereco
    celular.value = novoElemento.celular
    matricula.value = novoElemento.id
    plano.value = novoElemento.plano

}


function salvarPerfil(){
    let email = document.getElementById("last_name2")
    let endereco = document.getElementById("last_name4")
    let celular = document.getElementById("last_name5")
    let plano = document.getElementById("last_name6")

    let novoElemento = JSON.parse(localStorage.getItem('eu'))

    novoElemento = {...novoElemento, email: email.value, endereco: endereco.value, celular:celular.value, plano: plano.value }

    const users = JSON.parse(localStorage.getItem('users'));

    let newUsers = users.filter((user) => Number(user.id) != Number(novoElemento.id))
    newUsers = [...newUsers, novoElemento]
    localStorage.setItem('users', JSON.stringify(newUsers));
    localStorage.setItem('eu', JSON.stringify(novoElemento));
    
}