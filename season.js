/*You may encounter code in which multiple cases should have the same output. In order to accomplish this, you can use more than one case for each block of code.

In order to test this, we are going to make a small application matching the current month to the appropriate season.
First, we will use the new Date() method to find a number corresponding to the current month, and apply that to the month variable.
*/
const month = new Date().getMonth();

switch (month) {
    // January, February, March
    case 0:
    case 1:
    case 2:
        console.log("Winter");
        break;
    // April, May, June
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    // July, August, September
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    // October, November, December
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Something went wrong.");
}
