function matches(victory, defeat) {
  let result = victory - defeat
  return result
}

function rank() {
  let resultRank = matches(50, 20)
  let nivel = ""
  if (resultRank <= 10) {
    nivel = "Ferro"
  } else if (resultRank <= 20) {
    nivel = "Bronze"
  } else if (resultRank <= 50) {
    nivel = "Prata"
  } else if (resultRank <= 80) {
    nivel = "Ouro"
  } else if (resultRank <= 90) {
    nivel = "Diamante"
  } else if (resultRank <= 100) {
    nivel = "Lendário"
  } else if (resultRank >= 100) {
    nivel = "Imortal"
  }
  return `O Herói tem de saldo de ${resultRank} e está no nível de ${nivel}`
}

console.log(rank())
