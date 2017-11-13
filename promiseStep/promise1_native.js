/**
 * Created by zhengx on 2017/11/13.
 */
function getUserId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1234);
        }, 1000)
    });
}

console.log("start");
getUserId()
    .then((data) => {
        console.log("user id is" + data);
    });