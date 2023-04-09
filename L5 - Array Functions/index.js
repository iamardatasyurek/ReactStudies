const clones = [
    {
        name : "Rex",
        number : "CT-7567"
    },
    {
        name : "Cody",
        number : "CC-2224"
    },
    {
        name : "Fives",
        number : "CT-27-5555"
    }
];
console.log(clones);
console.log(`------------------`);

/*
push
map
find
filter
some
evey
includes
*/

/*
add new data to array
*/
clones.push(
    {
        name : "Wolffe",
        number : "CC-3636"  
    }
);
console.log(clones);
console.log(`------------------`);

/* 
map like foreach. you can access every each index
*/
// for (let i = 0; i < clones.length; i++) {
//     console.log(clones[i]);
// }
clones.map((clone) => {
    console.log(clone.name);
});
console.log(`------------------`);

/*
Try to find FIRST item in your array by your query
*/
//const result = clones.find((clone) => clone.name === "Cody" || clone.number.includes("CT"));
const result = clones.find(({name,number}) => name === "Cody" || number.includes("CT"));
console.log(result);
console.log(`------------------`);

/*
Get all items which has been found by your query
*/
//const filter = clones.filter((clone) => clone.number.includes("CC"));
const filter = clones.filter(({name, number}) => number.includes("CC"));
console.log(filter);
console.log(`------------------`);

/*
if your query exists, it will return true.
if your query does not exist, it will return false.
*/
const some = clones.some((clone) => clone.name == "Anakin");
console.log(some);
console.log(`------------------`);

/*
your query must be true for every each item. if it is not, you will take false.
*/
const every = clones.every((clone) => clone.number[0] == 'C');
console.log(every);
console.log(`------------------`);

/*
Your query exist or not. It returns response.
*/
const jedis = ["Anakin","Obi-Wan","Yoda"];
const isIncluded = jedis.includes("Ahsoka");
console.log(isIncluded);
console.log(`------------------`);







