class Ranking {
  constructor(dadosAtletas) {
    this.atletas = dadosAtletas;
  }

  obterMedias() {
    for (let i = 0; i < this.atletas.length; i++) {
      let atleta = this.atletas[i];

      let notasParaOrdenar = atleta.notas.slice().sort((a, b) => a - b);

      let notasComputadas = notasParaOrdenar.slice(1, 4);


      let soma = 0;
      notasComputadas.forEach(function(nota) {
        soma = soma + nota;
      });

      let media = soma / notasComputadas.length;

      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas}`);
      console.log(`Média Válida: ${media}`);
      console.log(""); 
    }
  }
}

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
{
  nome: "Fernando Puntel",
  notas:  [8, 10, 10, 7, 9.33]
},
{
  nome: "Daiane Jelinsky",
  notas: [7, 10, 9.5, 9.5, 8]
},
{
  nome: "Bruno Castro",
  notas: [10, 10, 10, 9, 9.5]
}
];

const minhaCompeticao = new Ranking(atletas);
minhaCompeticao.obterMedias();
