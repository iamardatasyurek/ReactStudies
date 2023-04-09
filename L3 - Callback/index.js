/*
Its will run after delay.
*/
// setTimeout(() => {
//     console.log("Hello there!");
// },10000);

/*
Its will run with delay.
*/
// setInterval(() => {
//     console.log("I have run every 1 second.")
// },1000)

// const sayHi = (cb) => {
//     cb();
// }
// sayHi(() => {
//     console.log("Hello there!");
// });


/*
response -> response data from url
json -> response.json | it can be change, in this example, we change the response data format to json
*/
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => console.log(json))

/*
They will run step by step
*/
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         console.log("Users have been loaded.");
//         console.log(users)
//         fetch('https://jsonplaceholder.typicode.com/posts/1')
//             .then(response => response.json())
//             .then(post => console.log(post))
//     });

/*
They will run step by step
*/
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         console.log("Users have been loaded.");
//         console.log(users)
//         fetch('https://jsonplaceholder.typicode.com/posts/1')
//             .then(response => response.json())
//             .then(post => {
//                 console.log("Post 1 been loaded.");
//                 console.log(post);
//                 fetch('https://jsonplaceholder.typicode.com/posts/2')
//                     .then(response => response.json())
//                     .then(post => {
//                         console.log("Post 2 been loaded.");
//                         console.log(post);
//                     });
//             });
//     });

/*
They will run step by step
*/
// async function GetData(){
//     const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
//     console.log("USERS");
//     console.log(users);
    
//     const post1 = await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
//     console.log("POST 1");
//     console.log(post1);

//     const post2 = await (await fetch('https://jsonplaceholder.typicode.com/posts/2')).json();
//     console.log("POST 2");
//     console.log(post2);
// }

// GetData();

/*
Anonymous function
*/
// (() => {
//     console.log("Hello there!");
// })();

(async () => {
    const users = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    console.log("USERS");
    console.log(users);
    
    const post1 = await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
    console.log("POST 1");
    console.log(post1);

    const post2 = await (await fetch('https://jsonplaceholder.typicode.com/posts/2')).json();
    console.log("POST 2");
    console.log(post2);
})();