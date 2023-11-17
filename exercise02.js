/*
Temos a lista de empregados com seus respectivos nomes e salários.

Utilize o método `some` para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.

Utilize o método `some` novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.

Obs: Pode utilizar o `for` .

*/

console.log('---------- EMPREGADOS (SALARIO) ----------');

const empregados = [
	{ nome: 'João', salario: 1200 },
	{ nome: 'Maria', salario: 1500 },
	{ nome: 'Pedro', salario: 1800 },
	{ nome: 'Ana', salario: 1400 },
	{ nome: 'Carlos', salario: 2000 },
];

const acima1500 = [];
const menor1000 = [];

const salarioIgualMaior1500 = empregados.some(empregado => empregado.salario >= 1500);
const salarioIgualMenor1000 = empregados.some(empregado => empregado.salario <= 1000);

console.log(empregados);

if (salarioIgualMaior1500) {
	console.log('Existem funcionarios com salario maior ou igual a R$1500.');
} else {
	console.log('Não existem funcionarios com salario maior ou igual a R$1500.');
}

if (salarioIgualMenor1000) {
	console.log('Existem funcionarios com salario menor ou igual a R$1000.');
} else {
	console.log('Não existem funcionarios com salario menor ou igual a R$1000.');
}
