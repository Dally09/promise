let promise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2) {
        resolve('Promise Fulfilled')
    } else {
        reject('Promise Not Fulfilled')
    }
})

promise.then((message) => { // then is used to return a promise
    console.log(message + ', promise has passed!')
}).catch((message) => {
    console.log(message + ', promise has failed')
})
