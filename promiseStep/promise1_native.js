/**
 * Created by zhengx on 2017/11/13.
 */
function getUserId() {
    return new Promise(function (resolve) {
        console.log("start to get user id")
        setTimeout(function () {
            resolve(9876);
        },1000);
    });
}

function getUserMobileById(id) {
    return new Promise(function (resolve) {
        console.log('start to get user mobile by id:', id);
        setTimeout(function () {
            resolve(13810001000);
        },1000);
    });
}
function doSthWidth(mobile) {
    console.log('do sth with', mobile);
}
getUserId()
    .then(getUserMobileById)
    .then(doSthWidth)
