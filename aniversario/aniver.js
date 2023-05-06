function aniv(){
let div = document.getElementById("tabelaAniver")

const newElement = JSON.parse(localStorage.getItem("users"));
 
const date = new Date();
let novoElemento = newElement.filter((user) => 
  String(user.dataNasc.substring(5)) === String(`${date.getMonth() + 1}-${date.getDate()}`)
)
console.log(String(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)) 
console.log(date.getDate())
    novoElemento.map((aniversariante) =>  {

        let elementoTr = document.createElement("tr")
        let elementoTd = document.createElement("td")
        let elementoTd2 = document.createElement("td")
        elementoTd.innerHTML = aniversariante.user
        elementoTd2.innerHTML = Number(date.getFullYear()) -  Number(aniversariante.dataNasc.substring(0, 4)) 
        elementoTr.appendChild(elementoTd);
        elementoTr.appendChild(elementoTd2);
        div.appendChild(elementoTr);

    })

}