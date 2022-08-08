import { Animal } from "./Animal";
import { Cat } from "./Cat";
import { Dog } from "./Dog";


let animal1 = new Animal ('Willie', 0 , false , false)
console.log(animal1)

let dog1 = new Dog ('Bob', 4, true, false, 'viralata')
console.log (dog1)
dog1.latir()

let cat1 = new Cat ('Bixano', 4, true, true, 'preto e branco')
cat1.color('preto')
cat1.andar()
