// findMatching()
// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match
function findMatching(arrDrivers, strDriver) {
    // Callback function for filter.
    function callback(element) {
        // Case insensitive.
        // If element from drivers array equals passed in
        // argument strDriver returns true it will be
        // added to new array.
        return element.toLowerCase() === strDriver.toLowerCase()
    }
    // Returns new array of matching drivers' names.
    const driversNames = arrDrivers.filter(callback)
    // Return matching list of drivers.
    return driversNames
}
// fuzzyMatch()
// 4) returns a driver if beginning provided letters match
// 5) does not return drivers if only middle or ending letters match
// 6) does not return drivers if only middle or ending letters match
/* **********************************************************************************************************/
/* **https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith*** */
/* Use String.startsWith(String passed in as argument) */
/* **********************************************************************************************************/
function fuzzyMatch(arrDrivers, beginStringDriver) {
    // Callback function for filter().
    function callback(element) {
        // Returns true if beginStringDriver matches
        // beginning string of element from drivers array.

        /* #1 Solution: This works below but very hacky. */
        // if (element[0] === beginStringDriver[0]) {
        //     if (element[1] === beginStringDriver[1]) {
        //         return element
        //     }
        // }
        /* #2 Solution: This works below but verbose. */
        // let testBeginStringDriver = 0
        // for (let i = 0; i < beginStringDriver.length; i++ ) {
        //     if (element[i] === beginStringDriver[i]) {
        //         testBeginStringDriver += 1
        //     }
        // }
        // if (testBeginStringDriver === beginStringDriver.length) {
        //     return element
        // }
        /* #3 Solution: This works below but verbose. */
        if (element.startsWith(beginStringDriver)) {
            return element
        }
    }
    // Filter method.
    // const matchDriversNames = arrDrivers.filter(callback)
    // return matchDriversNames
    return arrDrivers.filter(callback)
}
// matchName()
// 7) accesses the data structure to check if name matches
function matchName(arr, string) {
    // Callback function.
    function callback(obj) {
        // If obj.name from array equals string argument
        // return obj.
        if (obj.name === string) {
            return obj
        }
    }
    // Filter method.
    return arr.filter(callback)
}
