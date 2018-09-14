var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
    text += person[x] + " ";
}
console.log(text)
for (var in object) {
    code block to be executed
}


//objects
object =  {}
person_object = {ky: value}




var animal = {name:"Koala", color:"brown", habitat: "forest"}
var wordings = "";
var y;
for (y in animal) {
  wordings+= animal[y] + " ";
}
console.log(wordings);



var human = {name:"Timmy", school:"Trinity"}
var text = "";
var y;
for (y in human)
text+= human[y] + " ";
console.log(text);
