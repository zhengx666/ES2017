/**
 * Created by zhengx on 2017/11/9.
 */
function TPromise(fn) {
    let self = this;
    this.deferreds = [];
    this.then = function (onFulfilled) {
        let self = this;
        self.deferreds.push(onFulfilled);
        return this;
    }
    function resolve(value) {
        setTimeout(() => {
            self.deferreds.forEach(function (deferred) {
                deferred(value);
            });
        }, 0);
    }

    fn(resolve);
}


/**
 * @test1
 */
function getUserId() {
    return new TPromise((resolve, reject) => {
        setTimeout(() => {
            resolve(1234);
        }, 1000)
    });
}

console.log("start");
let promise = getUserId()
    .then((data) => {
        console.log("user id is" + data);
    });

setTimeout(()=>{
    promise.then(function () {
        console.log("call later")
    })
},2000)
