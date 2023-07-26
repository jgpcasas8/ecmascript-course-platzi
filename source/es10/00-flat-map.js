//FLAT

const array = [1,1,2,3,4,44,[1,55,4,4,[332,3,3,4]]];
console.log(array.flat(3));

//FLATMAP

const array2 = [1,2,3,4,5,6];
console.log(array2.flatMap(v => [v, v * 2]));
//Hace funcion de MAP y funcion de FLAT a la vez, en este caso, se hace un array del resultado y del resultado por 2, luego de eso los condensa en un solo array con el metodo flat