console.log(`Teste`);
const listaDeLugares = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Minas Gerais`,
    `Espirito Santo`,
    `Paraná`,
);

const idadeComprador = 25;
const acompanhado = false;
const temPassagemComprada = true;

console.log("Lista de lugares possíveis")
console.log (listaDeLugares);

if (idadeComprador >= 18 || acompanhado == true) {
    console.log("Boa viagem!")
    listaDeLugares.splice (4,1)
}else {
    console.log("Você não é maior de idade, não posso vender")
}

console.log("Embarque");
if (idadeComprador >=18 && temPassagemComprada) {
    console.log("Boa viagem!")
}else {
    console.log("Você não pode embarcar")
}