/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const Acceleration = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining initialFuel (kg)
const fuelBurnRate = 0.5; // initialFuel burn rate (kg/s)

// Pick up an error with how the function below is called and make it robust to such errors // for full clarity I did recivev help on this section of code : the math was a bit tricky for me
const calcNewVel = (initialVelocity, Acceleration, timeInSeconds) => {
  // Convert initial velocity from km/h to m/s
  const initialVelocityInMetersPerSecond = initialVelocity * (1000 / 3600);

  // Calculate new velocity in m/s
  const newVelocityInMetersPerSecond =
    initialVelocityInMetersPerSecond + Acceleration * timeInSeconds;

  // Convert new velocity back to km/h
  return newVelocityInMetersPerSecond * (3600 / 1000);
};

const newDistance = initialDistance + initialVelocity * (timeInSeconds / 3600); //calcultes new distance but also converts seconds into hours
const remainingFuel = initialFuel - fuelBurnRate * timeInSeconds; //calculates remaining initialFuel
const newVelocity = calcNewVel(Acceleration, initialVelocity, timeInSeconds); //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
