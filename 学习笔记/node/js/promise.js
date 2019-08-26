const fs = require("fs");
// let promise = new Promise((resolve,reject)=>{

//     fs.readFile("ss",(err,doc)=>{
//         if(err==null) {
//             resolve(doc);
//         }else {
//             reject(err);
//         }
//     });
// });
// promise.then((result)=>{
//     console.log(result);
// })
// .catch(err=>{
//     console.log(err);
// })

/*
    解决回调地狱
*/

// function f1(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile("./1.js","utf8",(err,doc)=>{
//             resolve(doc);
//             // reject(err);
//         });
//     });
// }
// function f2(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile("./2.js","utf8",(err,doc)=>{
//             resolve(doc);
//             // reject(err);
//         });

//     });
// }
// function f3(){
//     return new Promise((resolve,reject)=>{
//         fs.readFile("./3.js","utf8",(err,doc)=>{
//             resolve(doc);
//             // reject(err);
//         });
//     });
// }
// f1().then(err1=>{
//     console.log(err1);
//     return f2();
// }).then(err2=>{
//     console.log(err2);
//     return f3();
// }).then(err3=>{
//     console.log(err3);
// });

/**
 * async
 * await
 */

// async function f1(){
//     return "f1";
// }

// async function f2(){
//     return "f2";
// }
// async function f3(){
//     return "f3";
// }

async function run() {
    let n1 = await f1();
    let n2 = await f2();
    let n3 = await f3();
    console.log(n1,n2,n3);
}
run();

/**
 * util模块下的promisify方法
 */

 const promisify = require("util").promisify;

 let readFile = promisify(fs.readFile);

 async function run() {
    let f1 = readFile("./1.js","utf8");
    console.log(f1);
 }
 run();