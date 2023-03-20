// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
// findingMatching(drivers,name): takes an array of drivers' names and a string as arguments, and returns the matching list of drivers
function findMatching(drivers, name){
    
    return drivers.filter(function (driver){
        return driver.toLowerCase() === name.toLowerCase()
    })
};
//fuzzyMatch(drivers, name): akes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters
function fuzzyMatch(drivers, name){
    return drivers.filter(function (driver){
        return driver.toLowerCase().substring(0, name.length) === name.toLowerCase()
    })
};
//matchName(drivers,name): takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
function matchName(drivers,name){
    return drivers.filter(function (driver) {
        return driver.name === name
    })
}