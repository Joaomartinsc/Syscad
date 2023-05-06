

function marcaUser (){
    let novoElemento = JSON.parse(localStorage.getItem('eu'))
    let seriesInputs = []
    let repeticaoInputs = []
    for(let i =1; i<25;i ++) {
        seriesInputs.push(document.getElementById(`serie${i}`));
        repeticaoInputs.push(document.getElementById(`repeticao${i}`));
     }
     let arrayKeyTreino = []
     let arrayKeySubtreino= []
     Object.keys(novoElemento.treino).forEach((key, index) => {
         arrayKeyTreino.push(key);
     })
     arrayKeyTreino.map((keyTreino) => {
         Object.keys(novoElemento.treino[keyTreino]).forEach((key, index) => {
             arrayKeySubtreino.push(key)
         })
     })
 
     let series = []
     let repeticoes = []
     for(let k = 0; k<arrayKeyTreino.length; k ++) {
         for(let j = 0; j<arrayKeySubtreino.length; j ++) {
             if(novoElemento.treino[arrayKeyTreino[k]][arrayKeySubtreino[j]] != undefined) {
                series.push(novoElemento.treino[arrayKeyTreino[k]][arrayKeySubtreino[j]].serie);
                 repeticoes.push(novoElemento.treino[arrayKeyTreino[k]][arrayKeySubtreino[j]].repeticao);
             }
         }
     }
     seriesInputs.map((serie, index) => {
         serie.value = String(series[index])
         document.getElementById(`serie${index+1}`).value =  String(series[index])
         console.log(document.getElementById(`serie${index}`))
     })
     
     repeticaoInputs.map((repeticao, index) => {
         console.log(repeticoes[index])
         repeticao.value = String(repeticoes[index])
         document.getElementById(`repeticao${index+1}`).value =String(repeticoes[index])
         console.log(document.getElementById(`repeticao${index}`))
     })
 }