const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}
//Task 1 
function getString(subjects){
    let str = Object.keys(subjects).join(' , ')
    return str
}
console.log(getString(subjects))
//Task 2


let sumTeachersAndStudents = 0

function getCountTeachers(subjects){
    for(let key in subjects){
        sumTeachersAndStudents += (subjects[key].teachers + subjects[key].students)
       }
       return sumTeachersAndStudents
}

console.log(getCountTeachers(subjects))

// Task 3
let sumStudents=0
function avgCount(subjects){
    for(let key in subjects){
     sumStudents += subjects[key].students
    }
    return sumStudents/Object.keys(subjects).length
 }

console.log(avgCount(subjects))

// Task 4
    
  
let arrayFromObject = Object.entries(subjects)
console.log(arrayFromObject)
// Task 5
function getSortedArray(){
    let arr= Object.entries(subjects).sort((a,b)=> b[1].teachers - a[1].teachers)
    let sortedNames = arr.map(el =>el[0])
    console.log(sortedNames)
}
getSortedArray()