// Code your solution here


function findMatching(array, string) {
    return array.filter(name => name.toLowerCase() == string.toLowerCase());
}

// const drivers = ['Vladimir', 'Duda', 'Susana', 'Pai', 'Paula']
// console.log(findMatching(drivers, 'Susana'))

function fuzzyMatch(array, string) {
    return array.filter(name => {
      return name[0] === string || name.substring(0,2) === string
    })
}

// console.log(fuzzyMatch(drivers, "Pa"));

const drivers = [
    {name: 'Vladimir',
     hometown: 'Chicago'},

    {name: 'Duda',
     hometown: 'Chicago'},

    {name: 'Susana',
     hometown: 'Recife'},

    {name: 'Pai',
     hometown: 'Rio de Janeiro'},
]

// console.log(drivers[1].name)

function matchName(array, string) {
    return array.filter(element => {
        return element.name === string
    }) 
}

 console.log(matchName(drivers, "Pai"));