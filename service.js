const fs = require('fs')
const path = 'C:\\Users\\ChiaJuiYang\\Documents\\Account Profile'
// console.log('C:\\Users\\ChiaJuiYang\\Documents\\Account Profile')

fs.readdir(path, function(err, files){
    if (err) {
      console.log(err);
      return;
    }
    files.forEach((item, index, array)=>{
        fs.rename(item,'zAccountProfile'+item, function(err){
            if(err){
             throw err;
            }
            console.log('done!');
           })
    })
  })