// let dataObj;

// function foo(callBack) {
//   setTimeout(() => {
//     dataObj = {
//       name: "jawad",
//       email: "muhammadjawad.0@gmail.com",
//       profile: "picture.com",
//       password: "jawad123",
//     };
//     callBack(dataObj)
//     console.log("hello")
//   },2000);
// }

// function callBack(dataObj) {
//     console.log(dataObj)
//     console.log("ma bad ma chaloga q ke meri marzi ha")
// }

// foo(callBack)

// console.log("ma phele chalo ga")

// -------------------------------- Promise Practice -------------

// function pro() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             dataObj = {
//                 name: "jawad",
//                 email: "muhammadjawad.0@gmail.com",
//                 profile: "picture.com",
//                 password: "jawad123",
//             };
//             resolve(dataObj)
//             // reject("error agya ha")
//         }, 3000)
//     })
// }

// pro()

//     .then((data) => {
//         console.log("data>>>>", data)
//     }).catch((err) => {
//         console.log("err >>", err)
//     })

// ------------------- fetch bhi promise return krta ha ----------------------

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((data) => {
//         return data.json()
//     })
//     .then(function (data) {
//         console.log(data, "<<< data")
//     }).catch(function (err) {
//         console.log(err, "<<< err")
//     })