// =====================================================
// ERRORS & DEBUGGING MASTER DEMO
// =====================================================

const fs = require("fs");

console.log("\n====================================");
console.log("ERRORS & DEBUGGING MASTER DEMO");
console.log("====================================");

// =====================================================
// 1. TYPES OF ERRORS
// =====================================================

console.log(`
1. TYPES OF ERRORS

1. Syntax Errors
2. Runtime Errors
3. Logical Errors
`);

// =====================================================
// 2. SYNTAX ERROR
// =====================================================

console.log(`
====================================
2. SYNTAX ERRORS
====================================

Syntax errors occur when JavaScript
cannot parse your code.

Example:

let x = ;

function hello( {

}

Node won't even start.
`);

// =====================================================
// 3. RUNTIME ERROR
// =====================================================

console.log(`
====================================
3. RUNTIME ERRORS
====================================
`);

try {

    let user = null;

    console.log(user.name);

} catch (error) {

    console.log("Runtime Error Caught");
    console.log("Message:", error.message);

}

// =====================================================
// 4. REFERENCE ERROR
// =====================================================

console.log(`
====================================
4. REFERENCE ERROR
====================================
`);

try {

    console.log(notDefinedVariable);

} catch (error) {

    console.log("Reference Error Caught");
    console.log(error.message);

}

// =====================================================
// 5. TYPE ERROR
// =====================================================

console.log(`
====================================
5. TYPE ERROR
====================================
`);

try {

    const num = 100;

    num();

} catch (error) {

    console.log("Type Error Caught");
    console.log(error.message);

}

// =====================================================
// 6. FILE ERROR
// =====================================================

console.log(`
====================================
6. FILE SYSTEM ERROR
====================================
`);

fs.readFile("missing-file.txt", (err, data) => {

    if (err) {

        console.log("File Error Caught");
        console.log(err.code);

        return;
    }

    console.log(data.toString());

});

// =====================================================
// 7. LOGICAL ERROR
// =====================================================

console.log(`
====================================
7. LOGICAL ERRORS
====================================

Program runs successfully
but gives wrong output.
`);

const price = 100;
const quantity = 5;

const totalWrong = price + quantity;

console.log("Wrong Total =", totalWrong);

const totalCorrect = price * quantity;

console.log("Correct Total =", totalCorrect);

// =====================================================
// 8. CONSOLE DEBUGGING
// =====================================================

console.log(`
====================================
8. CONSOLE DEBUGGING
====================================
`);

const a = 10;
const b = 20;

console.log("a =", a);
console.log("b =", b);
console.log("sum =", a + b);

// =====================================================
// 9. STACK TRACE
// =====================================================

console.log(`
====================================
9. STACK TRACE
====================================
`);

function level1() {
    level2();
}

function level2() {
    level3();
}

function level3() {

    try {

        throw new Error("Something Broke");

    } catch (err) {

        console.log(err.stack);

    }
}

level1();

// =====================================================
// 10. CUSTOM ERROR
// =====================================================

console.log(`
====================================
10. CUSTOM ERRORS
====================================
`);

function divide(a, b) {

    if (b === 0) {

        throw new Error("Division By Zero");

    }

    return a / b;
}

try {

    console.log(divide(10, 0));

} catch (error) {

    console.log(error.message);

}

// =====================================================
// 11. DEBUGGER KEYWORD
// =====================================================

console.log(`
====================================
11. DEBUGGER
====================================

Run:

node inspect errors-debugging-demo.js

or use VS Code debugger.
`);

function calculateTotal(price, quantity) {

    debugger;

    return price * quantity;
}

console.log(calculateTotal(100, 5));

// =====================================================
// 12. ASYNC ERROR HANDLING
// =====================================================

console.log(`
====================================
12. ASYNC ERROR HANDLING
====================================
`);

async function fetchData() {

    try {

        throw new Error("API Failed");

    } catch (error) {

        console.log(error.message);

    }
}

fetchData();

// =====================================================
// 13. PROMISE ERROR HANDLING
// =====================================================

console.log(`
====================================
13. PROMISE ERROR HANDLING
====================================
`);

Promise.reject("Database Error")
    .catch((err) => {

        console.log(err);

    });

// =====================================================
// 14. UNCAUGHT EXCEPTION
// =====================================================

console.log(`
====================================
14. UNCAUGHT EXCEPTION
====================================
`);

process.on("uncaughtException", (err) => {

    console.log("Uncaught Exception Detected");
    console.log(err.message);

});

// Uncomment to test
// throw new Error("Crash");

// =====================================================
// 15. UNHANDLED PROMISE REJECTION
// =====================================================

console.log(`
====================================
15. UNHANDLED REJECTION
====================================
`);

process.on("unhandledRejection", (reason) => {

    console.log("Unhandled Promise Rejection");
    console.log(reason);

});

// Uncomment to test
// Promise.reject("Database Down");

// =====================================================
// 16. DEBUGGING ASYNC CODE
// =====================================================

console.log(`
====================================
16. DEBUGGING ASYNC CODE
====================================
`);

setTimeout(() => {

    console.log("Async Task Started");

    debugger;

    console.log("Async Task Finished");

}, 1000);

// =====================================================
// 17. NODEMON DEBUGGING
// =====================================================

console.log(`
====================================
17. NODEMON + DEBUGGING
====================================

Install:

npm install nodemon --save-dev

Run:

nodemon errors-debugging-demo.js

Every save automatically restarts
the application.
`);

// =====================================================
// 18. COMMON INTERVIEW QUESTIONS
// =====================================================

console.log(`
====================================
18. INTERVIEW QUESTIONS
====================================

Q. What is a Syntax Error?
A. Code cannot be parsed.

Q. What is a Runtime Error?
A. Error while program executes.

Q. What is a Logical Error?
A. Wrong output but no crash.

Q. Difference between try-catch
and process.on('uncaughtException')?

A.
try-catch -> specific errors
uncaughtException -> global errors

Q. How to debug Node.js?

A.
console.log()
debugger
VS Code Debugger
node inspect
Chrome DevTools
`);

// =====================================================
// END
// =====================================================

console.log(`
====================================
END OF DEBUGGING DEMO
====================================
`);