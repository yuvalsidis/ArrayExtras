'use strict'
/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
var sum = 0
var newSum = array1.forEach((num) => sum += num)
console.log(sum);
*/

var emps = [
    {
        name: 'Joe Schmoe',
        yearsExperience: 5,
        department: 'IT'
    },
    {
        name: 'Sally Sallerson',
        yearsExperience: 15,
        department: 'Engineering'
    },
    {
        name: 'Bill Billson',
        yearsExperience: 5,
        department: 'Engineering'
    },
    {
        name: 'Jane Janet',
        yearsExperience: 15,
        department: 'Management'
    },
    {
        name: 'Bob Hope',
        yearsExperience: 9,
        department: 'IT'
    }
];




const sumYearsExpiriance = emps.reduce((accumulator, correctValue) => {
    return accumulator + correctValue.yearsExperience
}, 0)

console.log('Sum years expiriance is:', sumYearsExpiriance)

const deptCollectiveExp = emps.reduce((accumulator, correctValue) => {
    const strCurrectKeyValue = correctValue.department
    console.log(strCurrectKeyValue)
    if (accumulator.hasOwnProperty(strCurrectKeyValue)) {
        accumulator[strCurrectKeyValue] += correctValue.yearsExperience
    }else{
        accumulator[strCurrectKeyValue] = correctValue.yearsExperience
    }
    return accumulator
}, {})

console.log('The map of dep and there collective years :', deptCollectiveExp)

const emplyeesByExperience = emps.reduce((accumulator, correctValue) =>{
    const strCurrectKeyValue = correctValue.yearsExperience + ''
    const strCurrectName = correctValue.name
    if (accumulator.hasOwnProperty(strCurrectKeyValue)) {
        accumulator[strCurrectKeyValue].push(strCurrectName)
    }else{
        accumulator[strCurrectKeyValue] = [strCurrectName]
    }
    return accumulator
   
}, {})

console.log(emplyeesByExperience)
