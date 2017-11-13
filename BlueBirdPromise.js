const Promise = require("bluebird");
new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("this is one");
        resolve();
    },2000);
}).then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("this is two");
            resolve();
        },2000);
    });
})
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("this is three");
                resolve();
            },2000);
        });
    });