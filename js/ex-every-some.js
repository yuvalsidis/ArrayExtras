'use strict'

const students = [
    { name: 'yuval', grade: 100 },
    { name: 'adi', grade: 90 },
    { name: 'amir', grade: 80 }
]

const arr2d = [
    [1,2,3,4],
    [8,2,3,7],
    [1,5,2,8],
    [1,6,7,8],
] 
              
const players = [
    { name: 'yuval', isAlive: false},
    { name: 'adi', isAlive: true },
    { name: 'amir', isAlive: false }
]

allPassed(students) ? console.log('They all passed') : console.log('They didn\'t')
isGameOn(players) ? console.log('At least some of them are alive') : console.log('Nobody is alive')
isMatrix(arr2d) ?console.log('it is a matrix') : console.log('it isn\'t a matrix')

function allPassed(students) {
    return students.every((student) => (student.grade >= 70))
}

function isGameOn(players) {
    return players.some((player) => (player.isAlive))
}

function isMatrix(arr2d){
    return arr2d.every((arr, idx) => arr2d[idx].length === arr2d[0].length )
}