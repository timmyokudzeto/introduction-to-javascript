/*Grade of 90 and above is an A
Grade of 80 to 89 is a B
Grade of 70 to 79 is a C
Grade of 60 to 69 is a D
Grade of 59 or below is an F
Now we can write that as a switch statement. Since we're checking a range, we will perform the operation in each case to check if each expression is evaluating */to true then break out of the statement once the requirements for true have been satisfied.
const grade = 87

switch (true) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
      console.log("B");
      break;
  case grade >= 70:
      console.log("C");
      break;
  case grade >= 60:
      console.log("D");
      break;
  case grade <=59:
      console.log("F");
      break;


  default:

}
