// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Função set/get JSON-JS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function getItem(index) {
  return JSON.parse(localStorage.getItem(index)) || [];
}

function setItems(index, value) {
  const prevItems = getItem(index);
  if (prevItems.length) {
    const newItems = [...prevItems, value];
    localStorage.setItem(index, JSON.stringify(newItems));
    return;
  }
  localStorage.setItem(index, JSON.stringify([value]));
}

function setItem(index, value) {
  localStorage.setItem(index, JSON.stringify(value));
}
 


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Obejeto Usuario Geral <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


const usuarios = {
  professor: {
    user: "",
    senha: "",
    email: "",
    CPF: "",
    endereco: "",
    celular: "",
    telefone: "",
    dataNasc: "",
    role: "funcionario",
    id: "",
  },
  aluno: {
    user: "",
    senha: "",
    email: "",
    CPF: "",
    endereco: "",
    celular: "",

    dataNasc: "",
    plano: "",
    role: "aluno",
    id: "",
    treino: 
      {
        abdominal: {
          abdominalCanivete: { serie: 0, repeticao: 0 },
          pranchaIso: { serie: 0, repeticao: 0 },
          giroRusso: { serie: 0, repeticao: 0 },
          obliquo: { serie: 0, repeticao: 0 },
        },
        braco: {
          rosca21: { serie: 0, repeticao: 0 },
          roscaAlternada: { serie: 0, repeticao: 0 },
          tricepsCorda: { serie: 0, repeticao: 0 },
          tricepsTesta: { serie: 0, repeticao: 0 },
        },
        costas: {
          barra: { serie: 0, repeticao: 0 },
          graviton: { serie: 0, repeticao: 0 },
          crucifixo: { serie: 0, repeticao: 0 },
          pulldown: { serie: 0, repeticao: 0 },
        },
        peito: {
          crossover: { serie: 0, repeticao: 0 },
          crucifixoInclinado: { serie: 0, repeticao: 0 },
          flexao: { serie: 0, repeticao: 0 },
          supino: { serie: 0, repeticao: 0 },
        },
        gluteo: {
          apoioCaneleira: { serie: 0, repeticao: 0 },
          elevacao: { serie: 0, repeticao: 0 },
          gluteoPolia: { serie: 0, repeticao: 0 },
          afundoStep: { serie: 0, repeticao: 0 },
        },
        perna: {
          adutora: { serie: 0, repeticao: 0 },
          aducao: { serie: 0, repeticao: 0 },
          afundoHalter: { serie: 0, repeticao: 0 },
          agachamento: { serie: 0, repeticao: 0 },
        },
      },
    
  },
};
  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Função Carrousel Simples JS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const images = ["../assets/P1001406.jpg","../assets/P1001429.jpg","../assets/logo.png"];

  let carrousel = document.getElementById("imgs");

  let i = 0;
  let interval = setInterval(function () {
    if (i <=  images.length - 1) {
      carrousel.src = images[i];
      i++;
    } else {
      i = 0;
    }
  },1500);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Função troca div JS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function trocaDiv(){
  let login = document.getElementById("login")
  let cadastro = document.getElementById("cadastro")
  
      if(login.style.display == "none"){
          login.style.display = "flex"
          cadastro.style.display = "none"
      }else{
          cadastro.style.display = "flex"
          login.style.display = "none"
      }
  }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Função Criar Cadastro JSON-JS<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function generateUser() {
  let newUser;
  let user = document.getElementById("inputUser");
  let senha = document.getElementById("inputPass");
  let CPF = document.getElementById("inputCPF");
  let nascimento = document.getElementById("inputNasc");
  let checkAluno = document.getElementById("alunoCheck");
  let checkProfessor = document.getElementById("funcionarioCheck");

  if (checkAluno.checked) {
    newUser = {
      ...usuarios.aluno,
      user: user.value,
      senha: senha.value,
      CPF: CPF.value,
      dataNasc: nascimento.value,
      id: Date.now(),
    };
    alert("Aluno criado!")
  }
  if (checkProfessor.checked) {
    newUser = {
      ...usuarios.professor,
      user: user.value,
      senha: senha.value,
      CPF: CPF.value,
      dataNasc: nascimento.value,
      id: Date.now(),
    };
    alert("Professor criado!")
  }
  return newUser;
}

function criar(event) {
  event.preventDefault()
  const newUser = generateUser();
  setItems("users", newUser)
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Função showPassword <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function showpass(){
  let verSenha = document.getElementById("mostra")
  let naoVer = document.getElementById("esconde")
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Função login JSON-JS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function entrar(event) {
  event.preventDefault()
  let userLogin = document.getElementById("loginNome");
  let senhaLoguin = document.getElementById("loginSenha");
  const user = getItem("users").filter((user) => 
    user.user == userLogin.value &&
    user.senha == senhaLoguin.value
  )          //((u) => ) callBack, função com um parametro
  if(user.length) {
    if(user[0].role === 'funcionario') {
      setTimeout(function() {
        window.location.href = "../Home/perfil%20Funcionario/perfilFuncionario.html";
      }, 200); 
      setItem("eu", user[0])
      return;
    }
    setTimeout(function() {

      window.location.href = "../Home/perfil%20Aluno/perfilAluno.html";
  }, 200); 
      setItem("eu", user[0])
  }
  if(!user.length){
    alert("Senha ou Login errado!")
  }
}
