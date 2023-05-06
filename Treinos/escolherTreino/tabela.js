// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Mostra Obejeto ALunos<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function tabeladora() {
  let tabelaTbody = document.getElementById("tabelaPai");
  const newElement = JSON.parse(localStorage.getItem("users"));

  let novoElemento = newElement.filter((user) => 
    user.role === "aluno"
  );
  novoElemento.map((treinoUser)=> {
    let elementoTr = document.createElement("tr")
    let elementoTd = document.createElement("td")
    let elementoA = document.createElement("a")

    elementoA.innerHTML = treinoUser.user

    elementoA.href = `file:///C:/Users/joaoc/OneDrive/Documentos/objeto/Treinos/funcionario/treinoFuncionario.html?id=${treinoUser.id}`
   
    
    
    elementoTd.appendChild(elementoA)
    elementoTr.appendChild(elementoTd)
    tabelaTbody.appendChild(elementoTr)
    
    
}
)
}
