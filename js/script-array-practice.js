//STEP 1
let favMovies = ['GoodFellas', 'Hereditary', 'Memento', 'Avengers: Endgame', 'The Prestige']
console.log(favMovies[1])
//STEP 2
let movies = new Array(5)

movies[0] = 'Interstellar'
movies[1] = 'Guardians of The Galaxy: Vol. 1'
movies[2] = 'The Green Mile'
movies[3] = 'Fight Club'
movies[4] = 'The Hateful Eight'

console.log(movies[0])
//STEP 3
let movies = new Array(5)

movies[0] = 'Interstellar'
movies[1] = 'Guardians of The Galaxy: Vol. 1'
movies[2] = 'The Green Mile'
movies[3] = 'Fight Club'
movies[4] = 'The Hateful Eight'

console.log(movies[0])

movies[3] = 'Pulp Fiction'

console.log(movies.length)
//STEP 4
let movies = ['Forest Gump', 'Parasite', 'Heat', 'Casino', 'Doctor Strange']
delete movies[0]

console.log(movies)
//STEP 5
let movies = ['Forest Gump', 'Parasite', 'Heat', 'Casino', 'Doctor Strange', 'Hereditary', 'Memento']

for (movie in movies){
    console.log(movies[movie])
}
//STEP 6
let movies = ['Forest Gump', 'Parasite', 'Heat', 'Casino', 'Doctor Strange', 'Hereditary', 'Memento']

for (movie of movies){
    console.log(movie)
}
//STEP 7
let movies = ['Forest Gump', 'Parasite', 'Heat', 'Casino', 'Doctor Strange', 'Hereditary', 'Memento']
movies.sort()
for (movie in movies){
    console.log(movies[movie])
}
//STEP 8
let movies = ['Forest Gump', 'Parasite', 'Heat', 'Casino', 'Doctor Strange', 'Hereditary', 'Memento']

console.log('Movies I Like:')
for (movie of movies) {
    console.log(movie)
}

let leastFavoriteMovies = ['The Gray Man', 'Jurrasic World', 'Spongebob Movie']

console.log('Movies I Dislike:')
for (movie of leastFavoriteMovies) {
    console.log(movie);
}

//STEP 9
let movies = ['Forest Gump', 'Parasite', 'Heat', 'Casino', 'Doctor Strange', 'Hereditary', 'Memento']
let leastFavMovies = ['The Gray Man', 'Jurrasic World', 'Spongebob Movie']

movies = movies.concat(leastFavMovies)

movies.sort().reverse()

console.log('Movies I Like and Dislike (in reverse sorted order):')
for (movie of movies) {
    console.log(movie)
}
//STEP 10
let movies = ['Forest Gump', 'Parasite', 'Heat', 'Casino', 'Doctor Strange', 'Hereditary', 'Memento']
let leastFavMovies = ['The Gray Man', 'Jurrasic World', 'Spongebob Movie']

movies = movies.concat(leastFavMovies)

movies.sort().reverse()

console.log('Movies I Like and Dislike (in reverse sorted order):')
for (movie of movies) {
    console.log(movie)
}

let lastMovie = movies.slice(-1)[0]
console.log(`The last movie in the list is: ${lastMovie}`)

//STEP 11
let movies = ['Forest Gump', 'Parasite', 'Heat', 'Casino', 'Doctor Strange', 'Hereditary', 'Memento']
let leastFavMovies = ['The Gray Man', 'Jurrasic World', 'Spongebob Movie']

movies = movies.concat(leastFavMovies)

movies.sort().reverse()

console.log('Movies I Like and Dislike (in reverse sorted order):')
for (movie of movies) {
    console.log(movie)
}

let firstMovie = movies.shift()
console.log(`The first movie in the list is: ${firstMovie}`)
//STEP 12
let movies = ['Forest Gump', 'Parasite', 'Heat', 'Casino', 'Doctor Strange', 'Hereditary', 'Memento']
let leastFavMovies = ['The Gray Man', 'Jurassic World', 'Spongebob Movie']

movies = movies.concat(leastFavMovies)

let dislikedMovieIndices = []
for (let i = 0; i < leastFavMovies.length; i++) {
  let index = movies.indexOf(leastFavMovies[i])
  if (index !== -1) {
    dislikedMovieIndices.push(index)
  }
}

console.log('Indices of disliked movies:', dislikedMovieIndices)

movies.splice(dislikedMovieIndices[0], 0, 'Rush Hour', 'The Usual Suspects', 'Seven')

console.log('Movies I Like and Dislike (in reverse sorted order):')
for (movie of movies) {
  console.log(movie)
}
//STEP 13
let movies = [
    ["The Shawshank Redemption", 1],
    ["The Godfather", 2],
    ["The Dark Knight", 3],
    ["The Lord of the Rings: The Return of the King", 4],
    ["Pulp Fiction", 5]
  ]
  
  let movieNames = movies.filter(function(movie) {
    return typeof movie[0] === 'string'
  }).map(function(movie) {
    return movie[0]
  })
  
  console.log("My favorite movies:")
  console.log(movieNames)
//STEP 14
let employees = ['ZAK', 'Jessica', 'MARK', 'fred', 'SALLY']

let showEmployee = function(employeeArray) {
  console.log("Employees:")
  for (let i = 0; i < employeeArray.length; i++) {
    if (typeof employeeArray[i] === 'string') {
      console.log(employeeArray[i].toUpperCase())
    }
  }
}

showEmployee(employees)
//STEP 15
function filterValues(arr) {
    var result = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== false && arr[i] !== null && arr[i] !== 0 && arr[i] !== '') {
        result.push(arr[i])
      }
    }
    return result
  }
  

  console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16
function getRandomItemFromArray(array) {
    let randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }
  
  let numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let randomItem = getRandomItemFromArray(numericArray)
  console.log(randomItem)
//STEP 17
function getMaxNumber(arr) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]
      }
    }
    return max
  }