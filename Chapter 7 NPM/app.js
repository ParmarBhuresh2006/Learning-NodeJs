// ============================================================
// NPM MASTER DEMO
// Run:
// node npm-master-demo.js
// ============================================================

console.clear();

console.log(`
============================================================
                NPM & TOOLS COMPLETE GUIDE
============================================================
`);

// ============================================================
// 1. WHAT IS NPM
// ============================================================

console.log(`
1. WHAT IS NPM?

NPM = Node Package Manager

Uses:
✓ Install Packages
✓ Manage Dependencies
✓ Run Scripts
✓ Publish Packages

Examples:

npm install express
npm install axios
npm install mongoose
`);

// ============================================================
// 2. NPM INIT
// ============================================================

console.log(`
============================================================
2. NPM INIT
============================================================

Command:

npm init

OR

npm init -y

Purpose:
Creates package.json
`);

// ============================================================
// 3. PACKAGE.JSON
// ============================================================

console.log(`
============================================================
3. PACKAGE.JSON
============================================================

Example:

{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}
`);

try {
    const pkg = require("./package.json");

    console.log("Current Project Information:");
    console.log("Name:", pkg.name);
    console.log("Version:", pkg.version);

} catch {
    console.log("package.json not found");
}

// ============================================================
// 4. NPM SCRIPTS
// ============================================================

console.log(`
============================================================
4. NPM SCRIPTS
============================================================

Inside package.json:

"scripts": {
   "start": "node index.js",
   "dev": "nodemon index.js",
   "test": "node test.js"
}

Run using:

npm start
npm run dev
npm run test
`);

// ============================================================
// 5. NPM PACKAGES
// ============================================================

console.log(`
============================================================
5. NPM PACKAGES
============================================================

Popular Packages:

express
axios
mongoose
bcrypt
jsonwebtoken
dotenv
nodemon
`);

// ============================================================
// 6. INSTALLING PACKAGES
// ============================================================

console.log(`
============================================================
6. INSTALLING PACKAGES
============================================================

Install Package:

npm install express

Install Specific Version:

npm install express@4.18.2

Uninstall:

npm uninstall express

Update:

npm update
`);

// ============================================================
// 7. DEPENDENCIES VS DEVDEPENDENCIES
// ============================================================

console.log(`
============================================================
7. DEPENDENCIES VS DEVDEPENDENCIES
============================================================

Dependencies:
Used in Production

npm install express

Dev Dependencies:
Used only during Development

npm install nodemon --save-dev
`);


// ============================================================
// 8. CHECK INSTALLED PACKAGE
// ============================================================

console.log(`
============================================================
8. CHECK INSTALLED PACKAGE
============================================================
`);

try {

    const axios = require("axios");

    console.log("✓ Axios Installed");

} catch {

    console.log("✗ Axios Not Installed");
    console.log("Install using:");
    console.log("npm install axios");
}

// ============================================================
// 9. NODE_MODULES
// ============================================================

console.log(`
============================================================
9. NODE_MODULES
============================================================

node_modules stores:

✓ Installed packages
✓ Package dependencies

Generated automatically after:

npm install
`);

// ============================================================
// 10. PACKAGE LOCK
// ============================================================

console.log(`
============================================================
10. PACKAGE-LOCK.JSON
============================================================

Purpose:

✓ Locks exact package versions
✓ Ensures same installation
✓ Faster installs
`);

// ============================================================
// 11. NODEMON
// ============================================================

console.log(`
============================================================
11. NODEMON
============================================================

Install:

npm install nodemon --save-dev

OR

npm install -g nodemon

Run:

nodemon app.js

Benefits:

✓ Auto Restart
✓ Faster Development
`);

// ============================================================
// 12. NPX
// ============================================================

console.log(`
============================================================
12. NPX
============================================================

Run package without installing globally:

npx nodemon app.js

npx create-react-app my-app
`);

// ============================================================
// 13. GLOBAL VS LOCAL PACKAGE
// ============================================================

console.log(`
============================================================
13. GLOBAL VS LOCAL PACKAGE
============================================================

Local:

npm install express

Available only inside project

Global:

npm install -g nodemon

Available everywhere
`);

// ============================================================
// 14. MATERIAL ICONS
// ============================================================

console.log(`
============================================================
14. MATERIAL ICONS
============================================================

React Installation:

npm install @mui/icons-material
npm install @mui/material
npm install @emotion/react
npm install @emotion/styled

Usage:

import HomeIcon from '@mui/icons-material/Home';

function App() {
   return <HomeIcon />;
}
`);

// ============================================================
// 15. PROCESS OBJECT
// ============================================================

console.log(`
============================================================
15. PROCESS OBJECT
============================================================
`);

console.log("Node Version :", process.version);
console.log("Platform     :", process.platform);
console.log("PID          :", process.pid);

// ============================================================
// 16. COMMAND LINE ARGUMENTS
// ============================================================

console.log(`
============================================================
16. COMMAND LINE ARGUMENTS
============================================================
`);

const arg = process.argv[2];

if (arg) {
    console.log("Argument Received:", arg);
} else {
    console.log("Try:");
    console.log("node npm-master-demo.js hello");
}

// ============================================================
// 17. SIMULATING NODEMON
// ============================================================

console.log(`
============================================================
17. NODEMON DEMO
============================================================

Change this file and save it while running:

nodemon npm-master-demo.js

Nodemon automatically restarts application.
`);

// ============================================================
// 18. COMPLETE NPM WORKFLOW
// ============================================================

console.log(`
============================================================
18. COMPLETE NPM WORKFLOW
============================================================

Create Project
      ↓
npm init -y
      ↓
package.json
      ↓
npm install express
      ↓
node_modules
      ↓
Write Code
      ↓
npm run dev
      ↓
Deploy
`);

// ============================================================
// 19. INTERVIEW QUESTIONS
// ============================================================

console.log(`
============================================================
19. INTERVIEW QUESTIONS
============================================================

Q. What is NPM?
A. Default package manager for Node.js.

Q. What does npm init do?
A. Creates package.json.

Q. Difference between dependency and devDependency?
A. dependency -> production
   devDependency -> development

Q. What is nodemon?
A. Automatically restarts Node app.

Q. What is npx?
A. Executes package without global installation.

Q. What is package-lock.json?
A. Locks dependency versions.
`);

// ============================================================
// END
// ============================================================

console.log(`
============================================================
                END OF NPM MASTER DEMO
============================================================
`);