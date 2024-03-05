function distanceFromHqInBlocks(blockNumber) {
  let distance = Math.abs(blockNumber - 42);
  return distance;
}

function distanceFromHqInFeet(blockNumber) {
  let distanceInFeet = distanceFromHqInBlocks(blockNumber) * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(start, destination) {
  let distanceTravelled = Math.abs(destination - start) * 264;
  return distanceTravelled;
}

function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400) {
    return 0;
  } else if (feet <= 2000) {
    return (feet - 400) * 0.02;
  } else if (feet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
// The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

console.log(distanceTravelledInFeet(34, 28));
// Code your solution in this file!
