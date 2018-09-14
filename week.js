var name = prompt("what is your name")


const day = new Date().getDay();
switch (day) {
    case 1:
        console.log(name + " " + "Happy Monday!");
        break;
    case 2:
        console.log(name + " " + "It's Tuesday. You got this!");
        break;
    case 3:
        console.log(name + " " + "Hump day already!");
        break;
    case 4:
        console.log(name + " " + "Just one more day 'til the weekend!");
        break;
    case 5:
        console.log(name + " " + "Happy Friday!");
        break;
    case 6:
        console.log(name + " " + "Have a wonderful Saturday!");
        break;
    case 7:
        console.log(name + " " + "It's Sunday, time to relax!");
        break;
    default:
        console.log(name + " " + "Something went horribly wrong...");
}
