// ======================================================
// EXPRESS.JS MASTER DEMO
// ======================================================

const express = require("express");

const app = express();

const PORT = 3000;

// ======================================================
// 1. WHAT IS EXPRESS?
// ======================================================

console.log(`
=================================================
EXPRESS.JS MASTER DEMO
=================================================

Express.js is:

✓ Minimal Framework
✓ Flexible Framework
✓ Fast Server Creation
✓ Middleware Support
✓ Routing Support
✓ API Development
`);

// ======================================================
// 2. BUILT-IN MIDDLEWARE
// ======================================================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ======================================================
// 3. CUSTOM MIDDLEWARE #1
// ======================================================

app.use((req, res, next) => {

    console.log("\n==========================");
    console.log("FIRST MIDDLEWARE");
    console.log("URL :", req.url);
    console.log("METHOD :", req.method);
    console.log("==========================");

    next();
});

// ======================================================
// 4. CUSTOM MIDDLEWARE #2
// ======================================================

app.use((req, res, next) => {

    console.log("SECOND MIDDLEWARE");

    req.user = {
        id: 1,
        name: "Miracle"
    };

    next();
});

// ======================================================
// 5. HOME ROUTE
// ======================================================

app.get("/", (req, res) => {

    res.send(`
        <h1>Welcome to Express.js</h1>
        <h3>Home Route</h3>
    `);

});

// ======================================================
// 6. SEND TEXT RESPONSE
// ======================================================

app.get("/text", (req, res) => {

    res.send("Hello From Express");

});

// ======================================================
// 7. SEND JSON RESPONSE
// ======================================================

app.get("/json", (req, res) => {

    res.json({
        success: true,
        framework: "Express",
        user: req.user
    });

});

// ======================================================
// 8. ROUTE PARAMETERS
// ======================================================

app.get("/user/:id", (req, res) => {

    res.json({

        message: "User Route",

        userId: req.params.id

    });

});

// Example:
// localhost:3000/user/101

// ======================================================
// 9. QUERY PARAMETERS
// ======================================================

app.get("/search", (req, res) => {

    const keyword = req.query.keyword;

    res.json({

        search: keyword

    });

});

// Example:
// localhost:3000/search?keyword=node

// ======================================================
// 10. POST REQUEST
// ======================================================

app.post("/create-user", (req, res) => {

    res.json({

        message: "User Created",

        data: req.body

    });

});

// ======================================================
// 11. MULTIPLE MIDDLEWARES
// ======================================================

function authMiddleware(req, res, next) {

    console.log("Auth Middleware");

    next();
}

function loggerMiddleware(req, res, next) {

    console.log("Logger Middleware");

    next();
}

app.get(
    "/dashboard",

    authMiddleware,

    loggerMiddleware,

    (req, res) => {

        res.send("Dashboard");

    }
);

// ======================================================
// 12. REQUEST -> MIDDLEWARE -> RESPONSE
// ======================================================

app.get("/flow",

    (req, res, next) => {

        console.log("Middleware 1");

        next();

    },

    (req, res, next) => {

        console.log("Middleware 2");

        next();

    },

    (req, res) => {

        res.send("Response Sent");

    }

);

// ======================================================
// 13. HTML RESPONSE
// ======================================================

app.get("/html", (req, res) => {

    res.send(`
        <html>
            <body>
                <h1>HTML Response</h1>
                <p>Express Sending HTML</p>
            </body>
        </html>
    `);

});

// ======================================================
// 14. STATUS CODE
// ======================================================

app.get("/success", (req, res) => {

    res.status(200).json({

        message: "Success"

    });

});

// ======================================================
// 15. ERROR EXAMPLE
// ======================================================

app.get("/error", (req, res, next) => {

    try {

        throw new Error("Something Went Wrong");

    } catch (error) {

        next(error);

    }

});

// ======================================================
// 16. EXPRESS DEEP DIVE
// ======================================================

app.get("/deep-dive", (req, res) => {

    res.json({

        protocol: req.protocol,

        hostname: req.hostname,

        method: req.method,

        url: req.url,

        headers: req.headers

    });

});

// ======================================================
// 17. 404 HANDLER
// ======================================================

app.use((req, res) => {

    res.status(404).json({

        error: "Route Not Found"

    });

});

// ======================================================
// 18. ERROR HANDLING MIDDLEWARE
// ======================================================

app.use((err, req, res, next) => {

    console.log("ERROR MIDDLEWARE");

    console.log(err.message);

    res.status(500).json({

        success: false,

        error: err.message

    });

});

// ======================================================
// START SERVER
// ======================================================

app.listen(PORT, () => {

    console.log(`
=================================================
SERVER RUNNING
=================================================

http://localhost:${PORT}

Routes:

GET  /
GET  /text
GET  /json
GET  /user/101
GET  /search?keyword=node
GET  /dashboard
GET  /flow
GET  /html
GET  /success
GET  /deep-dive
GET  /error

POST /create-user

=================================================
`);

});