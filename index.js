// const order = require("./pizashop");
import PizzaShop from "./pizashop.js";

const pizashop = new PizzaShop();

pizashop.on("order",(size,topping)=>{
    console.log(`oder receive baking a ${size} pizza with ${topping}`);
})

pizashop.getorder("large","mushroom");
pizashop.disporder();