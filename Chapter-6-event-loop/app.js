// =====================================================
// NODE.JS EVENT LOOP MASTER DEMO
// =====================================================

const fs = require("fs");
const EventEmitter = require("events");

console.log("\n=================================================");
console.log("NODE.JS EVENT LOOP MASTER DEMO");
console.log("=================================================");

// =====================================================
// 1. EVENT DRIVEN ARCHITECTURE
// =====================================================

console.log("\n1. EVENT DRIVEN ARCHITECTURE");

const emitter = new EventEmitter();

emitter.on("login", (user) => {
    console.log(`Event Received -> ${user} logged in`);
});

emitter.emit("login", "Miracle");

// =====================================================
// 2. SINGLE THREADED
// =====================================================

console.log("\n2. SINGLE THREADED");

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

console.log("Executed on the main thread");

// =====================================================
// 3. V8 VS LIBUV
// =====================================================

console.log("\n3. V8 VS LIBUV");

console.log("JavaScript executed by V8");

setTimeout(() => {
    console.log("Timer handled by libuv");
}, 1000);

// =====================================================
// 4. NODE RUNTIME
// =====================================================

console.log("\n4. NODE RUNTIME");

console.log(`
Your Code
   ↓
V8 Engine
   ↓
Node APIs
   ↓
libuv
   ↓
Operating System
`);

// =====================================================
// 5. BASIC EVENT LOOP
// =====================================================

console.log("\n5. BASIC EVENT LOOP");

console.log("Start");

setTimeout(() => {
    console.log("Timer Callback");
}, 0);

console.log("End");

// =====================================================
// 6. CALLBACK QUEUE
// =====================================================

console.log("\n6. CALLBACK QUEUE");

setTimeout(() => {
    console.log("Moved from Callback Queue -> Call Stack");
}, 0);

// =====================================================
// 7. MICROTASK QUEUE
// =====================================================

console.log("\n7. MICROTASK QUEUE");

Promise.resolve().then(() => {
    console.log("Promise Microtask");
});

process.nextTick(() => {
    console.log("process.nextTick Microtask");
});

setTimeout(() => {
    console.log("Timer Macrotask");
}, 0);

// =====================================================
// 8. ASYNC FILE READ (POLL PHASE)
// =====================================================

console.log("\n8. ASYNC FILE READ");

fs.readFile(__filename, () => {
    console.log("File Read Completed (Poll Phase)");
});

console.log("Program continues...");

// =====================================================
// 9. BLOCKING CODE
// =====================================================

console.log("\n9. BLOCKING CODE");

console.time("Blocking Loop");

for (let i = 0; i < 50000000; i++) {
    // simulate CPU work
}

console.timeEnd("Blocking Loop");

console.log("Blocking work finished");

// =====================================================
// 10. SYNC VS ASYNC FILE READ
// =====================================================

console.log("\n10. SYNC FILE READ");

console.time("Sync Read");

fs.readFileSync(__filename);

console.timeEnd("Sync Read");

console.log("Synchronous operation blocked thread");

// =====================================================
// 11. TIMERS PHASE
// =====================================================

console.log("\n11. TIMERS PHASE");

setTimeout(() => {
    console.log("Executed inside Timers Phase");
}, 100);

// =====================================================
// 12. CHECK PHASE
// =====================================================

console.log("\n12. CHECK PHASE");

setImmediate(() => {
    console.log("Executed inside Check Phase");
});

// =====================================================
// 13. POLL PHASE
// =====================================================

console.log("\n13. POLL PHASE");

fs.readFile(__filename, () => {
    console.log("Poll Phase Executed");
});

// =====================================================
// 14. EVENT LOOP PHASE ORDER
// =====================================================

console.log("\n14. EVENT LOOP PHASE ORDER");

setTimeout(() => {
    console.log("Timers Phase");
}, 0);

setImmediate(() => {
    console.log("Check Phase");
});

Promise.resolve().then(() => {
    console.log("Promise Queue");
});

process.nextTick(() => {
    console.log("NextTick Queue");
});

// =====================================================
// 15. setTimeout VS setImmediate
// =====================================================

console.log("\n15. setTimeout VS setImmediate");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

setImmediate(() => {
    console.log("setImmediate");
});

// =====================================================
// 16. GUARANTEED ORDER INSIDE POLL PHASE
// =====================================================

console.log("\n16. GUARANTEED ORDER");

fs.readFile(__filename, () => {

    setImmediate(() => {
        console.log("Immediate Inside Poll");
    });

    setTimeout(() => {
        console.log("Timeout Inside Poll");
    }, 0);

});

// =====================================================
// 17. ASYNC / AWAIT
// =====================================================

console.log("\n17. ASYNC / AWAIT");

async function getData() {

    console.log("Fetching Data...");

    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    console.log("Data Received");
}

getData();

console.log("Application Still Running");

// =====================================================
// 18. INTERVIEW QUESTION
// =====================================================

console.log("\n18. INTERVIEW QUESTION");

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

process.nextTick(() => {
    console.log("D");
});

console.log("E");

// Expected:
// A
// E
// D
// C
// B

// =====================================================
// 19. COMPLETE EVENT LOOP PHASE DEMO
// =====================================================

console.log("\n19. COMPLETE EVENT LOOP PHASE DEMO");

setTimeout(() => {
    console.log("Timers Phase Callback");
}, 0);

setImmediate(() => {
    console.log("Check Phase Callback");
});

Promise.resolve().then(() => {
    console.log("Promise Microtask Callback");
});

process.nextTick(() => {
    console.log("nextTick Callback");
});

fs.readFile(__filename, () => {

    console.log("Poll Phase Callback");

    setImmediate(() => {
        console.log("Check Phase After Poll");
    });

    setTimeout(() => {
        console.log("Timers Phase After Poll");
    }, 0);

});

// =====================================================
// END
// =====================================================

console.log("\nMain Script Finished");