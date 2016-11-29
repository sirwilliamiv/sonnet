








var theSonnet = document.getElementById("sonnet").innerHTML


console.log(theSonnet);

console.log("orphans",theSonnet.indexOf("orphans"))

var numOfCharacters = theSonnet.length

console.log("numOfCharacters", numOfCharacters)

var newSonnet = theSonnet.replace("winter", "yuletide")

console.log("new Sonnet" ,newSonnet)

// replace all occurances of the string"the" with "a large"
// 

var aLarge = newSonnet.split(' the ').join(' a large ').split('The ').join(' A large ')
// string.split('apple').join('banana')
// 
 console.log(aLarge)


document.getElementById('sonnet').innerHTML = aLarge


