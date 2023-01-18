//Ex 1.1
const makeObjKeysToArr = (object) => {
const theKeyArr = Object.keys(object);
console.log(theKeyArr);
}

const object1 = {
    name: 'hillel',
    age: 30,
    hobbies: 'basketball',
    family: 'mom'
}

makeObjKeysToArr(object1)

//Ex1.2
const  makeObjectKeysToUperr = (obj) => {
    let newObj = {};
for(const [key, value] of Object.entries(obj) ) {
   key.toUpperCase;
}
console.log(obj)
}

makeObjectKeysToUperr(object1)


//Ex1.3
const valueArr = (obj) => {
const values = Object.values(obj);
console.log(values)
}
valueArr(object1)

//Ex1.4
const doubleMyVal = (obj) => {
    let result = {};
    for(const[key,value] of Object.entries(obj)) {
        return obj.value*2
    }
    console.log(result)
}

doubleMyVal(object1)

//Ex 1.5
const reverseMyObj = () => {
    let result1 = {};
    for(const [key,value] of Object.entries(obj)) {
        return [value,key]
    }
    console.log(result1)
}

reverseMyObj(object1);



//Ex1.6

const object2 = {
    id: 324234,
    phone: 345345,
    adress: 444,
}
const sumMyVal = (obj) => {
    let result2 = Object.values(obj);
    let final = 0;
    for(i=0;i<result2.length;i++) {
    final += result2[i]
    }
   console.log(final)
}
sumMyVal(object2);


//Ex1.7
const averageMyVal = (obj) => {
    let aver;
    let result2 = Object.values(obj);
    let final = 0;
    for(i=0;i<result2.length;i++) {
    final += result2[i];
    aver = final/object2.length;
    }
   console.log(aver)
}

averageMyVal(object2);

//Ex1.8
const sortTheKeys = (obj) => {
 const theNewObj = Object.keys(obj)
 console.log(theNewObj);
 let newdic = {};
 for(i of theNewObj.sort()){
    newdic[i]=obj[i]
 }
 console.log(newdic)
}

sortTheKeys(object1)


//Ex1.9
const people = { 
    person1: { name: "John", age: 25 },
    person2: { name: "Mike", age: 32 },
    person3: { name: "hillel", age: 55 },
    person4: { name: "dan", age: 88 },
}
const checkIfNameExcist = (obj,nameInput) => {
const valuesArr = (Object.values(obj))
console.log(valuesArr)
for(i=0;i<valuesArr.length;i++) {
    let personName = valuesArr[i].name;
   console.log(valuesArr[i].name)
    if (nameInput===personName) {
        console.log('true!!');
        break;
    }
    else {
        console.log('false!!');
        break
    }
}
}
checkIfNameExcist(people,"John");

//Ex1.19
const arr = [ 'hillel','hillel','dan','roy','roy','roy','oded']
const wordFrequency = (arr) => {
    let theCounter = {};
for(let x of arr) {
    if(theCounter.hasOwnProperty(x)) {
        theCounter[x]++;
    }
    else {
        theCounter[x] = 1;
    }
}
console.log(theCounter)
} 

wordFrequency(arr);


//Ex1.20
