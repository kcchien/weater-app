/**
 * Created by jason on 2017/1/23.
 */
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            }
            else
            {
                reject('Not number');
            }
        }, 2000);
    });
};

asyncAdd(5, 'a').then((res) => {
    console.log(res);
}, (errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//
//     setTimeout(() => {
//         reject('It failed!');
//     }, 2000);
//
//
// });
//
// somePromise.then((message) => {
//     console.log('Success: ',message);
// }, (errorMessage) => {
//     console.log('Failed: ',errorMessage);
// });