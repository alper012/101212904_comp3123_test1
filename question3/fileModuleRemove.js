const fs = require('fs')
const path = require('path')

let remove = function () {
    if (!fs.existsSync('multiple')){
        console.log('There is no such a directory!');
        return;
    }

   fs.readdir('multiple', (err, files) => {
        if(files.length==0){
        console.log('There is no files in this folder！')
        return;
        }

       if (err) throw err;

       for (const file of files) {
            if(files.length ==0 ){
            console.log('There is no files in this folder！')
            break;
            }
           fs.unlink(path.join('multiple', file), err => {
           if (err) throw err;
           console.log(`Deleting files...${file}`)
       })
       }
       fs.rmdirSync('multiple');
   })
}
remove()