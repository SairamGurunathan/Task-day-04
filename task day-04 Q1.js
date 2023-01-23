let obj1 = {name:"Person1",age:5};
let obj2 = {age:5,name:"Person1"};
let object1 = Object.keys(obj1);
let object2 = Object.keys(obj2);

if(Object.keys(obj1).every(key=>obj1[key]==obj2[key]) && object1.length==object2.length){
    console.log(true);
}else{
    console.log(false);
}
