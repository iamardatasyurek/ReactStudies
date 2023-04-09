//import Gather from "./my-module.js";
/*
Default module has to be out side the {}
*/
import Hello,{Addition,Subtraction,Hi,movieName,padawan,ligthsaberColors} from "./my-module.js";

console.log(Addition(2,4));

/*
Hello is name of default function 
*/
Hello("Anakin");

console.log(Subtraction(2,4));

Hi("Obi-wan");

console.log(`Movie's name is ${movieName}`);
console.log(`Anakin's padawan : ${JSON.stringify(padawan)}`);
console.log(`Lightsaber colors : ${ligthsaberColors}`);