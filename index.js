const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.


// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  //Check if all numbers are divisible by 5. Cache the result in a variable.
  let dividedeBy5 = (n1 %5 && n2 % 5 && n3 % 5 && n4 % 5) === 0;
  console.log(dividedeBy5)
  console.log(`all numbers are divided by five ${dividedeBy5}`)
  //Check if the first number is larger than the last. Cache the result in a variable.
  let greatValue = n1 > n4;
  console.log(greatValue);
  console.log(`the first number ${n1} is greater than the last number (${n4})`)
  //Subtract the first number from the second number.
  let sub = n2-n1;
  console.log(sub);
  console.log('Subtract the first number from the second numbe is equal to '+sub)
 // Multiply the result by the third number.
 let mult = sub * 3;
 console.log(mult);
 console.log('the result multplyed by the third number is equal to '+mult)
 //Find the remainder of dividing the result by the fourth number.
 let remainder = mult / n4;
 console.log(remainder);
 let over25 = !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25);
 console.log('all numbes are less tha 25 '+over25);
 let tripDistance = 1500;
 let totalBudget = 175;
 let avarageCost = 3;
 let mileperGalon1 =30;
 let mileperHour1 = 55;
 let totalGalon = tripDistance/mileperGalon1;
 let totalhour = tripDistance/mileperHour1;
 let budgetNeeded1 = totalGalon*avarageCost;
 //At 55 miles per hour, you get 30 miles per gallon.
 console.log('the total amount of galon needed is '+totalGalon);
 console.log('The total hour it takes to the trip is '+ totalhour);
 console.log('the budget we need to the trip is '+budgetNeeded1);
 
 let mileperGalon2 =28;
 let mileperHour2 = 60;
 let totalGalon2 = tripDistance/mileperGalon2
 let totalhour2 = tripDistance/mileperHour2
 let budgetNeeded2 = totalGalon2*avarageCost;
 //At 60 miles per hour, you get 28 miles per gallon.
 console.log('the total amount of galon needed is '+totalGalon2);
 console.log('The total hour it takes to the trip is '+ totalhour2);
 console.log('the budget we need to the trip is '+budgetNeeded2);
 
 //At 75 miles per hour, you get 23 miles per gallon.
 let mileperGalon3 =30;
 let mileperHour3 = 23;
 let totalGalon3 = tripDistance/mileperGalon3
 let totalhour3 = tripDistance/mileperHour3
 let budgetNeeded3 = totalGalon3*avarageCost
 console.log('the total amount of galon needed is '+totalGalon3);
 console.log('The total hour it takes to the trip is '+ totalhour3);
 console.log('the budget we need to the trip is '+budgetNeeded3);

 

 // the 2nd lab assignment(plants)
 const PI = 3.1415;
const radius = 5;
const areaMin = 0.8; //1 plant sq meter
const AREA = PI * radius * radius; // total container area in sq meters

let currentPlants = 100;
let weeks = 10;

let plantGrowth = currentPlants * (2 ** weeks) // amount of plants
console.log("plant growth: " + plantGrowth)

const maxCapacity = AREA / areaMin; // 98.1 plants
console.log("max capacity" + maxCapacity) 

const pruningTime = maxCapacity * 0.80; //amount of plants
console.log("Pruning time", pruningTime)

const minCapacity = maxCapacity * 0.50;

//PRUNED
if (plantGrowth > pruningTime ) {
    console.log("Its time to prune")
} else if (plantGrowth < pruningTime && plantGrowth > minCapacity) { //MONITORED
    console.log("Growing at an acceptable rate")
} else { 
console.log("You can plant some more")
}

let biggerArea = plantGrowth * areaMin; //total area in sq meters
console.log("Bigger area: " + biggerArea) // 81920 sq meters
let biggerRadius = Math.sqrt(biggerArea / PI) // meters
console.log("RADIUS OF BIGGER AREA " + biggerRadius) // 161.48 meters

try {
    if (plantGrowth > maxCapacity){
        throw ('Too many plants for this planter!')
    }else {
        console.log("WAY TO GO! Keep growing!")
    }
}catch(err){
console.log(err)
}