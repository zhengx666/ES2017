/**
 * Created by zhengx on 2017/11/13.
 */
function TPromise(fn) {
    var state = 'pending',
        value = null,
        deferreds = [];

    this.then = function (onFulfilled) {
        if (state === 'pending') {
            deferreds.push(onFulfilled);
            return this;
        }
        onFulfilled(value);
        return this;
    };

    function resolve(newValue) {
        value = newValue;
        state = 'fulfilled';
        setTimeout(function () {
            deferreds.forEach(function (deferred) {
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