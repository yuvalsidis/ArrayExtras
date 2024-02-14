'use strict'

const students = [
    { name: 'yuval', grade: 100 },
    { name: 'adi', grade: 90 },
    { name: 'amir', grade: 80 }
]

const players = [
    { name: 'yuval', isAlive: false},
    { name: 'adi', isAlive: true },
    { name: 'amir', isAlive: false }
]

allPassed(students) ? console.log('They all passed') : console.log('They didn\'t')
isGameOn(players) ? console.log('At least some of them are alive') : console.log('Nobody is alive')

function allPassed(students) {
    return students.every((student) => (student.grade >= 70))
}

function isGameOn(players) {
    return players.some((player) => (player.isAlive === true))
}