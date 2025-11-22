


function deepEqual (obj1, obj2) {
    
    if(typeof obj1 !== "object" || obj1 === null || 
    typeof obj2 !== "object" || obj2 === null 
    )

    {
    return obj1 === obj2;
    }  
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if(keys1.length !== keys2.length)
    return false;
    
    for(let key of keys1) {
        if(!deepEqual (obj1[key], obj2[key]))
        {
            return false;
        }
    }
    
    return true;
    
}

const obj1 = { a: 1, b: { c: 2, d: [3, 4] } };

const obj2 = { a: 1, b: { c: 2, d: [3, 4] } };

const result = deepEqual(obj1, obj2);

console.log(result)

