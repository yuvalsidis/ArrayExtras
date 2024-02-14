'use strict'
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

var arrayTest = [15, 1, 15, 12, 1, 12, 15]
var arrayTest2 = [15, "asdasd", [1, 17], 15, [10, 16], [4], 12, 15]

const sumYearsExpiriance = emps.reduce((accumulator, correctValue) => {
    return accumulator + correctValue.yearsExperience
}, 0)

console.log('Sum years expiriance is:', sumYearsExpiriance)

const deptCollectiveExp = emps.reduce((accumulator, correctValue) => {
    const strCurrectKeyValue = correctValue.department
    console.log(strCurrectKeyValue)
    if (accumulator.hasOwnProperty(strCurrectKeyValue)) {
        accumulator[strCurrectKeyValue] += correctValue.yearsExperience
    } else {
        accumulator[strCurrectKeyValue] = correctValue.yearsExperience
    }
    return accumulator
}, {})

console.log('The map of dep and there collective years :', deptCollectiveExp)

const emplyeesByExperience = emps.reduce((accumulator, correctValue) => {
    const strCurrectKeyValue = correctValue.yearsExperience + ''
    const strCurrectName = correctValue.name
    if (accumulator.hasOwnProperty(strCurrectKeyValue)) {
        accumulator[strCurrectKeyValue].push(strCurrectName)
    } else {
        accumulator[strCurrectKeyValue] = [strCurrectName]
    }
    return accumulator

}, {})

console.log(emplyeesByExperience)

const emplyersEachDepartment = emps.reduce((accumaltor, correctValue) => {
    const strDepartment = correctValue.department

    if (accumaltor.hasOwnProperty(strDepartment)) {
        accumaltor[strDepartment]++
    }
    else {
        accumaltor[strDepartment] = 1
    }
    return accumaltor
}, {})

console.log(emplyersEachDepartment)

function findModes(values) {
    const mapNumberByAppear = values.reduce((accumaltor, correctValue) => {
        if (accumaltor.hasOwnProperty('' + correctValue)) {
            accumaltor['' + correctValue]++
        }
        else {
            accumaltor['' + correctValue] = 1
        }
        return accumaltor
    }, {})
    console.log('times', mapNumberByAppear)
}

findModes(arrayTest)

function flatten(values) {
    if (!Array.isArray(values)) {
        console.error("Input is not an array");
        return;
    }

    const sortedArray = values.filter((value) => value.length)
    const diconnectedArray = sortedArray.reduce((accumaltor, currectValue) => {
        console.log(currectValue)
        if (typeof (currectValue) === "string") {
            accumaltor.push(currectValue)
        } else {
            currectValue.forEach(element => {
                accumaltor.push(element)
            });
        }
        return accumaltor
    }, [])
    return diconnectedArray
}

console.log('The modify array is :', flatten(arrayTest2) ) 

