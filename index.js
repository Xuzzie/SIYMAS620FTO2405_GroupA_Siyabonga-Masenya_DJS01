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

const newDistance = initialDistance + initialVelocity * timeInSeconds; //calcultes new distance
const remainingFuel = initialFuel - fuelBurnRate * timeInSeconds; //calculates remaining initialFuel
const newVelocity = calcNewVel(Acceleration, initialVelocity, timeInSeconds); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (initialVelocity, Acceleration, timeInSeconds) => {
  return initialVelocity + Acceleration * timeInSeconds;
};

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
