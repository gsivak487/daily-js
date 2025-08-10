function throttlingFun(fun, limit){
    let lastFun;
    let lastRan;

    return function(...args){
        if(!lastRan){
            fun.apply(this, args);// Firat Call Always
            lastRan = Date.now();
        } else {
            clearTimeout(lastFun);
            lastFun = setTimeout(()=> {
                if((Date.now() - lastRan) >= limit) {
                    fun.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now()- lastRan));
        }
    };
}


function searchName(str){
    console.log('search name', str)
}

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  
  return function(...args) {
    if (!lastRan) {
      // First call - execute immediately
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      // Clear any pending executions
      clearTimeout(lastFunc);
      
      // Schedule the next execution
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const throtSearch = throttle(searchName, 5000);

throtSearch('siva1');
throtSearch('siva2');
// setTimeout(()=> {
//      throtSearch('siva3');
// }, 3000)
// throtSearch('siva4');   
// setTimeout(()=> {
//  throtSearch('siva5');
// }, 6000);



    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
