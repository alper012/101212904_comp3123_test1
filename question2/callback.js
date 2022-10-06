const resolvedPromise = () => {
    const a = new Promise(function (resolve, reject) {
      setTimeout(() => {
        let success={'message': "delayed success!"};
        resolve(success );
      }, 500)
  })
    return a;
  }
  const rejectedPromise = () => {
    const b = new Promise(function (resolve, reject) {
      setTimeout(() => {
        try{
          let fail={'error':'delayed exception!'};
          reject(fail);
        }catch(e){
          console.error(e);
        }
      }, 500)
  })
    return b;
  }
  
  resolvedPromise()
  .then(result=>console.log(result))
  
  rejectedPromise()
  .then(result=>console.log(result))
  .catch((error) => console.log(error));