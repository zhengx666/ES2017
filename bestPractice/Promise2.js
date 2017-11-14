/**
 * Created by zhengx on 2017/11/14.
 */
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("step 1");
        resolve();
    }, 1000)
})
    .then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("step 2");
                resolve()
            }, 1000)
        })
            .then(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log("step 3")
                        resolve();
                    }, 1000)
                })
            })
    })