/*
Temos uma lista de pessoas com seus respectivos nomes, alturas e pesos.

Crie um função que receba a função a seguir e mostre no console o valor do calculo do IMC da pessoa.
exemplo: `O IMC é Carlos é 40`
Sendo que o IMC é calculado pela fórmula `peso / altura²`.

Obs: Utilize `for` ou algum método de array.

*/

var pessoas = [
	{ nome: 'João', altura: 1.75, peso: 80 },
	{ nome: 'Maria', altura: 1.68, peso: 60 },
	{ nome: 'Pedro', altura: 1.8, peso: 70 },
	{ nome: 'Ana', altura: 1.65, peso: 55 },
	{ nome: 'Carlos', altura: 1.9, peso: 100 },
];

const pessoasIMC = [];

pessoas.forEach(pessoa => {
	let pessoaObj = {
		nome: '',
		IMC: 0,
	};

	pessoaObj.nome = pessoa.nome;
	pessoaObj.IMC = parseInt(calcIMC(pessoa.peso, pessoa.altura));

	pessoasIMC.push(pessoaObj);
});

function calcIMC(peso, altura) {
	return peso / (altura * altura);
}

console.log(pessoas);
console.log(pessoasIMC);
