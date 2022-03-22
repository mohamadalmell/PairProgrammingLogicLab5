//Problem 1

getProperties = (obj) => {
  return console.log(Object.getOwnPropertyNames(obj));
};

objects = { a: "val", b: "val2" };

// getProperties(objects);

//Problem 2

isPlainObject = (obj) => {
  if (obj.constructor == Object && obj !== null) {
    return (true);
  }
  return (false);
};

// objects = {};

// objects = ["a"];

// console.log(isPlainObject(objects));

//Problem 3

modifyObject = (obj) => {
  let obj2 = {
    ...obj,
    getProperties: Object.keys(obj).length,
    isPlainObject: isPlainObject(obj),
  };

  return console.log(obj2);
};

object = { a: "val", b: "val2" };

// modifyObject(object);

//Problem 4

makePairs = (obj) => {
  console.log(Object.entries(obj));
};

// makePairs({ a: "val", b: "val2" });

//Problem 5

without = (obj, key) => {
    let obj2 = {};
    for(let i in obj){
        if (i!== key) {
            obj2[i]=obj[i]
        }
    }
    return console.log(obj2);
}

// without({ a: "val", b: "val2" }, 'b');

//Problem 6

isEmpty = (obj) =>{
    if (Object.keys(obj).length == 0) {
        return true
    } else 
        for (let i in obj){
            if (obj[i] !== undefined) { 
                return false
            } 
    }  return true
}

// console.log(isEmpty({ a: undefined, b: '1ed' }));

//Problem 7

isEqual = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    } else 
    for (let i in obj1){
        if (obj1[i] !== obj2[i]) {
            return false
        }
    } return true
}

// console.log(isEqual({ a: 1, b: 1 },{ a: 1, b: 1 }));

// Problem 8

intersection = (obj1, obj2) =>{
    let obj = {};

    for(let i in obj1){
        for(let j in obj2){
            if (obj1[i] === obj2[j] && i===j) {
                obj[i] = obj1[i];
            }
        }
    }

    return obj;
}

// console.log(intersection({ a: 1, b: 2 }  , { c: 1, b: 1, a:1 }));





