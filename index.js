const bleno = require('bleno');

let name = 'rpi';
let uuids = ['d4474eb4-5713-456c-b13b-6ce31955f3a0'];
bleno.on('stateChange' , function(state){
  if(state === 'poweredOn'){
    bleno.startAdvertising(name , uuids , (err)=>{
     if(err){
      console.log(err);
     }
    })
  }else{
    bleno.stopAdvertising();
  }
})
