const fs = require('fs')
const path=require('path')
var fill = 'multiple';

let create = function () { 
   if (!fs.existsSync(fill)){
       fs.mkdirSync(fill);
   }
  
   try {
       process.chdir(fill);    
   }
   catch (err) {
       console.log('change dir error: ' + err);
   }
   let data = 'Alper Ekici - 10122904 ';
   for (let i = 0; i < 10; i++) {
       fs.writeFile(`log${i}.txt`, data+i, function(err){
           if (!err) {
               console.log(`log${i}.txt`)
           }
       })
   }
}
create()