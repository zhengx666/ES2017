/**
 * Created by zhengx on 2017/11/13.
 */
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

// getUserId().then((data)=>{
//     console.log("getUserId"+data);
// })

function* gen() {
    let uId = yield getUserId();
    console.log("get user id " + uId);
    let uInfo = yield getUserInfo();
    console.log("get user Info" + uInfo);
}



let g = gen();
let uId = g.next();
console.log("start");
uId.value.then(function (data) {
    let uInfo = g.next(data);
    uInfo.value.then((data)=>{
        g.next(data)
    })
});
