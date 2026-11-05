import getUserInput from "./modules.js";

import {
    Calculator,
    convertToJson,
    saveToLocalStorage,
    getFromLocalStorage,
    isPositive,
    operateOnNumbers,
    fetchData
} from "./modules.js";

document.addEventListener("DOMContentLoaded", async function () {

    // Get a number from the user
    const userNumber = getUserInput();

    // Check if the number is positive
    const positiveResult = isPositive(userNumber);

    // Calculator operations
    const addition = Calculator.add(5, 3);
    const subtraction = Calculator.subtract(10, 7);

    // Convert object into JSON
    const data = {
        name: "Sample",
        value: 100
    };

    const jsonData = convertToJson(data);

    // Save and get data from local storage
    saveToLocalStorage("myData", jsonData);

    const savedData = getFromLocalStorage("myData");

    // Perform operations using a function
    const total = operateOnNumbers(4, 6, function (a, b) {
        return a + b;
    });

    const minus = operateOnNumbers(8, 3, function (a, b) {
        return a - b;
    });

    // Get data from API
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
    const apiData = await fetchData(apiUrl);

    // Show the results in the console
    console.log("Number entered:", userNumber);
    console.log("Is the number positive?", positiveResult);

    console.log("Addition:", addition);
    console.log("Subtraction:", subtraction);

    console.log("JSON Data:", jsonData);
    console.log("Data from Local Storage:", savedData);

    console.log("Sum:", total);
    console.log("Difference:", minus);

    console.log("API Data:", apiData);
});