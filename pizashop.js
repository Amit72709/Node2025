
// import  EventEmitter  from 'node:events';
import {EventEmitter } from 'events'

class PizzaShop extends EventEmitter{
    constructor(){
        super();
       this.oderno=0;

    }

    getorder(size,topping){
        this.oderno++;
        this.emit("order",size,topping);
    }
    disporder(){
        console.log(`your oder no is ${this.oderno}`);
    }
}


export default PizzaShop;