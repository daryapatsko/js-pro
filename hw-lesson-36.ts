// 1. Собрать в массив все жанры фильмов (без повторения)
// 2. Собрать в массив всех актеров всех фильмов (без
// повторения)
// 3. Отсортировать фильмы по рейтингу по убыванию
// 4. Создать новый массив, где объекты фильмов будут состоять
// из следующих полей:
// id, title, released, plot
// 5. Создать функцию, которая бы принимала массив фильмов и
// число. А результатом этой функции должен быть
// отфильтрованный массив, с фильмами где число равно году
// выхода фильма.
// 6. Создать функцию, которая бы принимала массив фильмов и
// строку. А результатом этой функции должен быть новый
// отфильтрованный массив, с фильмами, где строка входит в
// название фильма.
// 7. Создать функцию, которая бы принимала массив фильмов и
// строку. А результатом этой функции должен быть
// отфильтрованный массив, с фильмами где строка входит в
// название фильма или в его сюжет.
// 8. Создать функцию, которая бы принимала 3 параметра:
// 1)массив фильмов , 2) строка(название поля, например 'title') и
// строку/число(значение поля "Black Widow"). А результатом
// этой функции должен быть отфильтрованный массив, где
// параметры 2 и 3 равны в объекте фильма. Например:
// передаем (films, 'title', 'Black Widow') и на выходе получаем
// фильм с id=1 если передаем (films, 'year', 2011) , то получаем
// фильм с id=2


type TypeMovies={
    id: number,
    title: string,
    year: number,
    released: string,
    runtime: string,
    genre: string[],
    director: string,
    writer: string,
    actors: string[],
    plot: string,
    country: string,
    poster: string,
    imdbRating: number,
    imdbVotes: number,
    type: string,
    boxOffice: string,
    production: string,
}
  
const movies:TypeMovies[] = [
{
    id: 1,
    title: "Black Widow",
    year: 2021,
    released: "09 Jul 2021",
    runtime: "134 min",
    genre: ["Action", "Sci-Fi", "Adventure"],
    director: "Cate Shortland",
    writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
    actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
    plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
    country: "United States",
    poster: "https://m.media-amazon.com/images/M/MVGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    imdbRating: 6.9,
    imdbVotes: 121932,
    type: "movie",
    boxOffice: "$138,027,361",
    production: "Marvel Studios",
},
{
    id: 2,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    year: 2011,
    released: "15 Jul 2011",
    runtime: "130 min",
    genre: ["Adventure", "Drama", "Fantasy"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy.",
    country: "United Kingdom, United States",
    poster: "https://m.media-amazon.com/images/M/MXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    imdbRating: 8.1,
    imdbVotes: 790377,
    type: "movie",
    boxOffice: "$381,409,310",
    production: "Heyday Films, Moving Picture Company, Warner Bros.",
},
{
    id: 3,
    title: "Star Wars",
    year: 1977,
    released: "25 May 1977",
    runtime: "121 min",
    genre: ["Action", "Adventure", "Fantasy"],
    director: "George Lucas",
    writer: "George Lucas",
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot",
    country: "United States, United Kingdom",
    poster: "https://m.media-amazon.com/images/MkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    imdbRating: 8.6,
    imdbVotes: 1259440,
    type: "movie",
    boxOffice: "$460,998,507",
    production: "Lucasfilm Ltd.",
},
{ 
    id: 4,
    title: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    released: "15 Jul 2009",
    runtime: "153 min",
    genre: ["Action", "Adventure", "Family"],
    director: "David Yates",
    writer: "Steve Kloves, J.K. Rowling",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    plot: "As Harry Potter begins his sixth year at Hogwarts.",
    country: "United Kingdom",
    poster: "https://m.media-amazon.com/images/M/MV5BwOTg2ODg1Mg@@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 492245,
    type: "movie",
    boxOffice: "$302,305,431",
    production: "Heyday Films, Warner Bros.",
}, 
{ id:5,
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    released: "16 Nov 2001",
    runtime: "152 min",
    genre: ["Adventure", "Family", "Fantasy"],
    director: "Chris Columbus",
    writer: "J.K. Rowling, Steve Kloves",
    actors: ["Daniel Radcliffe", "Rupert Grint", "Richard Harris"],
    plot: "An orphaned boy enrolls in a school of wizardry.",
    country: "United Kingdom, United States",
    poster: "https://m.media-amazon.com/images/M/MkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    imdbRating: 7.6,
    imdbVotes: 684604,
    type: "movie",
    boxOffice: "$318,087,620",
    production: "1492 Pictures, Heyday Films, Warner Brothers",
}
]

 // Task 1
const getGenres = (movies: TypeMovies[]): string[] => {
return movies.map(({genre}) => genre).flat()
.reduce((result: string[], item: string) => {
    return result.includes(item) ? result : [... result, item];
}, []);
  
  }
console.log(getGenres(movies))


 //Task 2

const getActors = (movies: TypeMovies[]): string[] => {
return movies.map(({actors}) => actors).flat()
.reduce((unique: string[], item: string) => { 
    return unique.includes(item) ? unique : [...unique,item]
},[])

}
console.log(getActors(movies))

 //Task 3

const sortedRating = (movies: TypeMovies[]) => {
    return movies.sort((a,b) => a.imdbRating > b.imdbRating ? 1 : -1)
}
console.log(sortedRating(movies))

//Task 4

const newArrMovies = (movies: TypeMovies[]) => {
    return movies.map(({id,title,released,plot}) => ({id,title,released,plot}))
    }
console.log(newArrMovies(movies))

//Task 5

const filterByYear = (movies: TypeMovies[], year: number) => {
    return movies.filter(item => item.year === year)
    }
console.log(filterByYear(movies,2009))

// Task 6

const filterByName = (movies: TypeMovies[], string: string) => {
    return movies.filter(item => {
    return item.title.toLowerCase().includes(string.toLowerCase())
    })
    }
console.log(filterByName(movies,'wars'))

// Task 7

const filterByString = (movies: TypeMovies[], string: string) => {
    return movies.filter(item => {
      return item.title.toLowerCase().includes(string.toLowerCase()) || item.plot.toLowerCase().includes(string.toLowerCase()) 
    })
    }
console.log(filterByString(movies,'TiEs'))
 
// Task 8

type TypeValues=number|string|string[]
const filterWithParameters= <T extends TypeMovies> (array:T[],key:string,value: TypeValues)=>{

    return array.filter((item:TypeMovies) => item[key] === value)
}
console.log(filterWithParameters(movies,'year', 2011))
