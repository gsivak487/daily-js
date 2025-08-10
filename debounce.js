function debouncefn(fun, delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=> { fun.apply(this, args) }, delay);
    }
}

function serachFun(name) {
    console.log(`i am ${name}`);
}
const deFun = debouncefn(serachFun, 1000);

deFun('siva');
deFun('siva1');
deFun('siva2');