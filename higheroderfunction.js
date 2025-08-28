function chield (name){
console.log(`hell ${name}`);
}

function parent (callback){
    const name="amit kumar singh"
    callback(name);
}

parent(chield);