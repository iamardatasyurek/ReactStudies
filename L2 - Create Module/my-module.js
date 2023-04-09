// function Addition(a,b){
//     return a+b;
// }

//export default Addition;

/*
If you use only one line in a function, you don't have to use these -> {}
*/
export const Addition = (a,b) => a+b;

/*
If you use only one parameters in a function, you don't have to these -> ()
You can use only 1 default module
*/
// const Hello = name => console.log(`Hello, ${name}`);
// export default Hello
export default name => console.log(`Hello, ${name}`);


export const Subtraction = (a,b) => a-b;

//export {Addition,Hello};

export const Hi = name => console.log(`Hi, ${name}`);

export const movieName = "Star Wars";

export const padawan = {
    name : "Ahsoka",
    surname : "Tano",
    ligthsaber : 2
};

export const ligthsaberColors = ["red","blue","green","purple","yellow","white"];

// export {
//     Addition,
//     Subtraction,
//     Hi,
//     movieName,
//     padawan,
//     ligthsaberColors
// };

