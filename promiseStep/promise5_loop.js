/**
 * Created by zhengx on 2017/11/10.
 */
function getUserId() {
    return new Promise(function (resolve) {
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


function Promise(fn) {
    console.log("Promise construct")
    var state = 'pending',
        value = null,
        deferreds = [];

    this.then = function (onFulfilled) {
        return new Promise(function (resolve) {
            handle({
                onFulfilled: onFulfilled || null,
                resolve: resolve
            });
        });
    };

    function handle(deferred) {
        if (state === 'pending') {
            deferreds.push(deferred);
            return;
        }

        var ret = deferred.onFulfilled(value);
        deferred.resolve(ret);
    }

    function resolve(newValue) {
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
                newValue.then(resolve);
                return;
        }
        state = 'fulfilled';
        value = newValue;
        setTimeout(function () {
            deferreds.forEach(function (deferred) {
                handle(deferred);
            });
        }, 0);
    }

    fn(resolve);
}

function doStmWidt(mobile) {
    console.log('do sth with', mobile);
}
getUserId()
    .then(getUserMobileById)
    .then(doStmWidt);

