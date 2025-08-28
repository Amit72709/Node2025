import {EventEmitter } from 'events'

// class emitter extends EventEmitter {}

const emitter = new EventEmitter() ;


emitter.on('callevent',(fi,se)=>{
  console.log(`emitte ${fi} and ${se}`);
});


console.log("masagge early from emmite");

emitter.emit('callevent',"first","second");