let lowerCaseWords = new Promise((resolve, reject) => {
    let mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']


    if (mixedArray) {
        resolve('Success')
    } else {
        reject('Failed')
    }  

    mixedArray = mixedArray.filter((isim => typeof isim === 'string')
    
    )
    const l = mixedArray.map(i => {return i.toLowerCase();})
    console.log(l);

})


lowerCaseWords.then((message) => {
    console.log('Result of promise is: ' + message)
}).catch((message) => {
    console.log('Result of is: ' + message)
})




