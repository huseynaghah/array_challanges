"use strict"

//1. merge 2 functions

function merger(a, b) {
    let totalArr = a.concat(b);
    return totalArr;
}

let arr1 = [2, 3, 6 ,9];
let arr2 = ["ag" ,"qara", "qirmizi"]

//3. filler

function array_filled(times, element) {
    let answer = [];
    for (let i = 0; i < times; i++) {
        answer.push(element)
    }
    return answer;
}

//2. delete undef

function defUndef(arr){
    let deleted= arr.filter((element)=>{return element!==undefined&&element!==null&&element!==false&&element!==0&&element!==""&&!Number.isNaN(element)})
    return deleted;
}

let myNewArray = [undefined, false, 0, "", null, NaN, 6, 8]

//5. increased array

function array_range(first, len) {
    let myAnswer = [];
    for (let i = 0; i < len; i++) {
       myAnswer.push(first+i) 
    }
    return myAnswer;
}

//4. 

function move(arr, elem, step) {
    let movable = arr[elem];
    arr.splice(elem, 1);
    arr.splice(step, 0, movable)
    return arr;
}


//6.

function checkPrime(arr) {
    let testArray=[];
    arr.forEach(element => {
        if (element%2==1){
            testArray.push(true);
        }else{testArray.push(false)}
    });
    if(testArray.includes(false) == true){
        return false
    }else{return true
    }
}