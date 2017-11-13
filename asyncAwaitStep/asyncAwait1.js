/**
 * Created by zhengx on 2017/11/13.
 */
const co = require('co');
function getUserId() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1234);
        },1000)
    });
}
function getUserInfo() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("info");
        },1000)
    });
}


async function gen() {
    let uId = await getUserId();
    console.log("get user id " + uId);
    let uInfo = await getUserInfo();
    console.log("get user Info" + uInfo);
}

console.log("start");
co(gen);