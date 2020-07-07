const id: string = Deno.args[0]
// console.log('id a buscar =>', id);

// En deno no es necesario declarar una función async para usar el await
const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
const body = await res.json();
console.log('Pokemon: ', body.species.name);
