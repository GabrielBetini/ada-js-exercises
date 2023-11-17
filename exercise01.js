/**Crie uma função que receba como parâmetro a lista de hotifrutis abaixo que tem três tipos: `frutas`, `legumes` e `verduras`, faça com que essa função retorne o número de itens de cada um desses tipos.

Sendo que:

fruta → banana, maçã, abacaxi, melancia, laranja, limão.

legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.

verdura → alface, espinafre, rúcula, couve, agrião, acelga. */

console.log('---------- HORTIFRUTI ----------');

const hortifrutis = [
	'banana',
	'agrião',
	'maçã',
	'abacaxi',
	'melancia',
	'laranja',
	'limão',
	'cenoura',
	'melancia',
	'batata',
	'brócolis',
	'abóbora',
	'tomate',
	'alho-poró',
	'alface',
	'espinafre',
	'rúcula',
	'couve',
	'acelga',
	'maçã',
	'batata',
];

const frutas = [];
const legumes = [];
const verduras = [];

hortifrutis.forEach(Element => {
	switch (Element) {
		case 'banana':
		case 'maçã':
		case 'abacaxi':
		case 'melancia':
		case 'laranja':
		case 'limão':
			frutas.push(Element);
			break;
		case 'cenoura':
		case 'batata':
		case 'brócolis':
		case 'abóbora':
		case 'tomate':
		case 'alho-poró':
			legumes.push(Element);
			break;
		case 'alface':
		case 'espinafre':
		case 'rúcula':
		case 'couve':
		case 'agrião':
		case 'acelga':
			verduras.push(Element);
	}
});

console.log(`Frutas (${frutas.length}): ${showList(frutas)} `);
console.log(`Legumes (${legumes.length}): ${showList(legumes)} `);
console.log(`Verduras (${verduras.length}): ${showList(verduras)} `);

//Funcao para imprimir os elementos da lista com espaçamento
function showList(list) {
	let str = '';
	for (let i = 0; i <= list.length; i++) {
		str += `${list[i]}, `;
	}
	return str;
}
