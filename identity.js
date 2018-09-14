var myName = prompt("Please enter your name");
alert("Hi I know your name is " + " " + myName)
console.log(myName);
//var myAge = prompt("Please enter your age");
//alert("Hi I know your age is "+" " + myAge)
//console.log(myAge);
var listOfLocalGovInEdo = ["Akoko-Edo", "Egor", "Esan Central"]
var listOfLocalGovInOyo = ["Baochilu Government", "Arin-Oye", "Abiogun"]
var listOfLocalGovInOndo = ["Akure", "Okitipupa", "Ondo,"]
var listOfLocalGovInOgun = ["ijebu-ode","remo","shagamu","efo"]
var listOfLocalGov = ["Ifako-Ijaiye","ifako-tgbagada"]
var localGovStatement = "some local governments in your state"
var yearOfBirth = prompt("Please enter your year of birth")
var age = 2018 - yearOfBirth;
if(age > 12){
  alert("Hey you are qualified since you are" + " " + age)
  var occupation = prompt("please enter your occupation")
  alert("Oh great occupation as" + " " + occupation)
  if (occupation == "student") {
  prompt("what class are you in")
  }
  var userState = prompt("which state in nigeria do you reside")
  alert(userState +" " + "? what a nice state you live in")
  var userState = userState.toLowerCase();
  console.log(userState)
  if(userState == "lagos"){
    alert(localGovStatement +" " + listOfLocalGov)
  }else if (userState == "ogun") {
      alert(localGovStatement +" " +listOfLocalGovInOgun)
    }
    else if (userState == "ondo") {
      alert(localGovStatement +" " + listOfLocalGovInOndo)
    }
    else if (userState == "oyo") {
      alert(localGovStatement +" " + listOfLocalGovInOyo)
    }
    else if (userState == "edo") {
    alert(localGovStatement +" " + listOfLocalGovInEdo)
    }
    else {
      alert("sorry we do not have your local government")
    }
  }else {
  alert("sorry you are DISQUALIFIED since your age is" +" " + age)
}
const people = 15;
var allowed = 0;
      while (allowed < people) {
        allowed++
      console.log("there is room left for only " + (people - allowed) + " more people");
    }
    /*\n new line
    \u[code] for unicodes
     character if string begins with quotation marks apostrophe is allowed if you want to put
    quotation marks use this ''   */













/*The expression is evaluated
The first case, x, will be tested against the expression. If it matches, the code will execute, and the break keyword will end the switch block.
If it does not match, x will be skipped and the y case will be tested against the expression. If y matches the expression, the code will execute and exit out of the switch block.
If none of the cases match, the default code block will run.
Let's make a working example of a switch statement following the syntax above. In this code block, we will find the current day of the week with the new Date() method, and getDay() to print a number corresponding to the current day. 1 stands for Monday, all the way through 7 which stands for Sunday. We'll start by setting up our variable.*/




//welome a user to your page, ask them for their name, show their name,ask for their age
//show them their age,


//welcom a user to your page ask them for their year of birth, subtract this year from their year of birth and give them their age

//print one to one thousand multiply by five
