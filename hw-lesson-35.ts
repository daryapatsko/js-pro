type TypeUser = {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

const users: TypeUser[] = [
        {
            name: "Harry Felton",
            phone: "(09) 897 33 33",
            email: "felton@gmail.com",
            animals: ["cat"],
            cars: ["bmw"],
            hasChildren: false,
            hasEducation: true
            
        },
        {
            name: "May Sender",
            phone: "(09) 117 33 33",
            email: "sender22@gmail.com",
            hasChildren: true,
            hasEducation: true
        },
        {
            name: "Henry Ford",
            phone: "(09) 999 93 23",
            email: "ford0@gmail.com",
            cars: ["bmw", "audi"],
            hasChildren: true,
            hasEducation: false
        }
    ]
// Task 1
function printName(array:TypeUser[]){
    let arrNames: string[] = []
    array.forEach((el:TypeUser)=>{
    arrNames.push(el.name)
    })
    return arrNames.join(',')

}
console.log(printName(users))

//Task 2

function getSumAuto<T extends TypeUser>(array:T[]){
    let sumCars: number=0
        array.forEach((el:T)=>{
         if(el.cars !== undefined){
            sumCars+= el.cars.length
         }
        })
        console.log(sumCars)
    }
    getSumAuto(users)

//Task 3

function getUsersWithEducation(array: TypeUser[]){
    let arrWithEducation=array.filter((el:TypeUser)=>el.hasEducation === true)
    return arrWithEducation
}
console.log(getUsersWithEducation(users))


//Task 4

function filterAnimal(array: TypeUser[]){
    let arrWithAnimal=array.filter((el:TypeUser)=>el.animals)
    return arrWithAnimal
}
console.log(filterAnimal(users))

//Task 5

function getStringCars <T extends TypeUser>(array:T[]){
    let arrCars: string[]=[]
    array.forEach((el:T)=>{
        if(el.cars !== undefined){
          let arr:string[]=el.cars
          arr.forEach((prop:string)=>{
            arrCars.push(prop)
          })
        }
       })
       return arrCars.join(',')
}

console.log(getStringCars(users))