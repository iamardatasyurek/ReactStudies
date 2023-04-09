import axios from "axios";

// (async () => {
//     const {data: users} = await axios('https://jsonplaceholder.typicode.com/users');
//     console.log("USERS");
//     console.log(users);
    
//     const {data: post1} = await axios('https://jsonplaceholder.typicode.com/posts/1');
//     console.log("POST 1");
//     console.log(post1);

//     const {data: post2} = await axios('https://jsonplaceholder.typicode.com/posts/2');
//     console.log("POST 2");
//     console.log(post2);
// })();


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

// const Hello = (num) => {
//     return new Promise((resolve, reject) => {
//         if(num === 1)
//             resolve('Hello there!');
    
//         reject('General Kenobi!');
//     });
// };

// Hello(2)
//     .then( data => console.log(data))
//     .catch( err => console.log(err));

const GetUsers = () => {
    return new Promise(async (resolve, reject) => {
        const {data: users} = await axios('https://jsonplaceholder.typicode.com/users');
        resolve(users);
        reject('Users Error');
    });
};

// GetUsers()
//     .then(users => console.log(users));


const GetPost = () => {
    return new Promise(async (resolve, reject) => {
        var id = Math.floor(Math.random()*100);
        const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
        resolve(post);
        reject("Post Error");
    });
};
    
// GetPost()
//     .then(post => console.log(post));


// (async() => {
//     // await GetUsers()
//     //     .then(users => console.log(users))

    
//     // await GetPost()
//     //     .then(post => console.log(post))

//     try {   
//         const users = await GetUsers();
//         console.log(users);
        
//         const randomPost = await GetPost();
//         console.log(randomPost);
//     } 
//     catch (error) {
//         console.log(error)
//     }

// })();

Promise.all([GetUsers(),GetPost()])
    .then(data => console.log(data))
    .catch(err => console.log(err));
