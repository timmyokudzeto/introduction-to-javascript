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

if(condition){
  alert("timi is fine")
  if(condit){
    alert("navigate")
    if (condition){
    alert("elevate")
    }
    else if(condition){
    alert("a ball")
    }
  }
  if(condition){
  alert("a ball")
  }
  alert("timi")
}else {
  alert("ant-man")
}
switch (expression) {
  case 0:
    day = "sunday"
    break;
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tuesday"
      break;
  case 3:
   day = "wednesday";
}


















//welome a user to your page, ask them for their name, show their name,ask for their age
//show them their age,


//welcom a user to your page ask them for their year of birth, subtract this year from their year of birth and give them their age

//print one to one thousand multiply by five
