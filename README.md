# 🏆 Projeto de Certificação — Sistema de Ranking de Atletas

![Status](https://img.shields.io/badge/status-concluído-success)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![POO](https://img.shields.io/badge/Paradigma-Orientado%20a%20Objetos-blue)

---

## 📌 Sobre o Projeto

Este projeto implementa um **Sistema de Ranking de Atletas** utilizando JavaScript moderno (ES6+).

A aplicação recebe uma lista de atletas com suas respectivas notas, calcula a **média válida** (excluindo a maior e a menor nota) e exibe os resultados no console.

O foco principal do projeto é aplicar conceitos de:

- Estruturação de classes
- Manipulação de arrays
- Ordenação de dados
- Cálculo de médias
- Organização de lógica de negócio

---

## 🎯 Objetivos de Aprendizado

- Praticar Programação Orientada a Objetos (POO)
- Trabalhar com métodos como:
  - `slice()`
  - `sort()`
  - `forEach()`
- Aplicar regra de negócio real (remoção da maior e menor nota)
- Organização clara de código para avaliação técnica

---

## 🧠 Regra de Negócio

Para cada atleta:

1. Ordenar as notas em ordem crescente
2. Remover a menor nota
3. Remover a maior nota
4. Calcular a média das 3 notas restantes

---

## 🏗️ Estrutura da Classe

```javascript
class Ranking {
  constructor(dadosAtletas) {
    this.atletas = dadosAtletas;
  }

  obterMedias() {
    // Calcula e exibe as médias válidas
  }
}
