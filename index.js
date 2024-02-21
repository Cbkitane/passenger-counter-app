// DOM Elements
let incrementBtn = document.getElementById("increment-btn"); // Increment button
let saveBtn = document.getElementById("save-btn"); // Save button

let tempCounter = document.getElementById("count-el"); // The displayed counter
let finalCounter = document.getElementById("save-el"); // The saved counter

let counter = 0; // Counter value

// Incrementing counter by one each click
function increment() {
    counter++;
    tempCounter.innerText = counter;
}

// Array to store all the saved counter values
let finalResults = [];

// Save the counter value into the array
function save() {
    finalResults.push(counter); // Save the counter value into the array
    tempCounter.innerText = 0; // Reset the displayed counter back to zero
    counter = 0; // Reset the counter value to zero
    finalCounter.innerText = finalResults.join(" - "); // Convert the final results array into string format and set the separator to " - "
    // Example [1,2,4,5] => 1 - 2 - 3 - 4
}
