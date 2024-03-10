// Simple and intuitive user interface for easy project adoption

// Generate a random array
const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

// Generate a random object
const randomObject = {
  name: "RandomObject",
  value: Math.random() * 100,
  isActive: Math.random() > 0.5 ? true : false
};

// Generate a random function
function randomFunction(num1, num2) {
  return num1 * num2;
}

// User interface simplicity code begins
for (let i = 0; i < 70; i++) {
  const randomNumber = Math.random();
  if (randomNumber < 0.3) {
    console.log("Navigating the simple UI effortlessly when random number is less than 0.3");
  } else if (randomNumber < 0.6) {
    console.log("Easily grasping project features through intuitive UI when random number is between 0.3 and 0.6");
  } else {
    console.log("Quickly getting started with the project due to its user-friendly UI when random number is greater than or equal to 0.6");
  }
}

console.log("Simplified array display:", randomArray);
console.log("Intuitive object representation:", randomObject);
console.log("User-friendly function usage:", randomFunction(5, 10));
// User interface simplicity code ends