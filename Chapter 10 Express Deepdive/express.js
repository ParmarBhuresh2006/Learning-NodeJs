// ======================================================
// EXPRESS.JS DEEP DIVE MASTER DEMO
// ======================================================

const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// ======================================================
// 1. PARSING REQUESTS
// ======================================================

console.log(`
=================================================
1. PARSING REQUESTS
=================================================

express.json()
express.urlencoded()

Used for parsing incoming request body.
`);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ======================================================
// REQUEST LOGGER
// ======================================================

app.use((req, res, next) => {

    console.log(
        `[${new Date().toLocaleTimeString()}]`,
        req.method,
        req.url
    );

    next();

});

// ======================================================
// 2. EXPRESS ROUTER
// ======================================================

console.log(`
=================================================
2. EXPRESS ROUTER
=================================================

Router allows grouping routes.
`);

const userRouter = express.Router();

userRouter.get("/", (req, res) => {

    res.json({
        route: "/users"
    });

});

userRouter.get("/:id", (req, res) => {

    res.json({
        userId: req.params.id
    });

});

userRouter.post("/", (req, res) => {

    res.json({
        message: "User Created",
        body: req.body
    });

});

app.use("/users", userRouter);

// ======================================================
// 3. COMMON PATHS
// ======================================================

console.log(`
=================================================
3. COMMON PATHS
=================================================
`);

app.get("/", (req, res) => {

    res.send("<h1>Home Page</h1>");

});

app.get("/about", (req, res) => {

    res.send("<h1>About Page</h1>");

});

app.get("/contact", (req, res) => {

    res.send("<h1>Contact Page</h1>");

});

// ======================================================
// 4. ROUTE PARAMETERS
// ======================================================

app.get("/product/:id", (req, res) => {

    res.json({

        productId: req.params.id

    });

});

// ======================================================
// 5. QUERY PARAMETERS
// ======================================================

app.get("/search", (req, res) => {

    res.json({

        keyword: req.query.keyword,
        page: req.query.page

    });

});

// Example:
// /search?keyword=node&page=1

// ======================================================
// 6. PARSE POST REQUEST
// ======================================================

app.post("/login", (req, res) => {

    res.json({

        email: req.body.email,
        password: req.body.password

    });

});

// ======================================================
// 7. ADDING HTML FILES
// ======================================================

console.log(`
=================================================
4. ADDING HTML FILES
=================================================

Normally:

views/
    home.html
    about.html
`);

app.get("/html", (req, res) => {

    res.send(`
        <html>
        <body>
            <h1>HTML Page</h1>
            <p>Generated directly from Express</p>
        </body>
        </html>
    `);

});

// ======================================================
// 8. SERVING HTML FILES
// ======================================================

console.log(`
=================================================
5. SERVING HTML FILES
=================================================

res.sendFile()
`);

app.get("/sendfile", (req, res) => {

    res.sendFile(__filename);

});

// ======================================================
// 9. FILE HELPER METHODS
// ======================================================

console.log(`
=================================================
6. FILE HELPERS
=================================================
`);

app.get("/file-helper", (req, res) => {

    res.json({

        dirname: __dirname,

        filename: __filename,

        basename: path.basename(__filename),

        extension: path.extname(__filename)

    });

});

// ======================================================
// 10. STATIC FILES
// ======================================================

console.log(`
=================================================
7. STATIC FILES
=================================================

public/
    css
    js
    images

app.use(express.static("public"))
`);

app.use(express.static("public"));

// ======================================================
// 11. MIDDLEWARE CHAIN
// ======================================================

app.get(
    "/middleware",

    (req, res, next) => {

        console.log("Middleware 1");

        next();

    },

    (req, res, next) => {

        console.log("Middleware 2");

        next();

    },

    (req, res) => {

        res.send("Middleware Completed");

    }

);

// ======================================================
// 12. REQUEST OBJECT
// ======================================================

app.get("/request-info", (req, res) => {

    res.json({

        method: req.method,

        url: req.url,

        hostname: req.hostname,

        protocol: req.protocol,

        ip: req.ip,

        headers: req.headers

    });

});

// ======================================================
// 13. RESPONSE METHODS
// ======================================================

app.get("/response-demo", (req, res) => {

    res.status(200).json({

        success: true

    });

});

// ======================================================
// 14. REDIRECT
// ======================================================

app.get("/old-home", (req, res) => {

    res.redirect("/");

});

// ======================================================
// 15. DOWNLOAD FILE
// ======================================================

app.get("/download", (req, res) => {

    res.download(__filename);

});

// ======================================================
// 16. ERROR ROUTE
// ======================================================

app.get("/error", (req, res, next) => {

    next(new Error("Custom Error"));

});

// ======================================================
// 17. ERROR HANDLER
// ======================================================

app.use((err, req, res, next) => {

    console.log("ERROR:", err.message);

    res.status(500).json({

        success: false,

        error: err.message

    });

});

// ======================================================
// 18. 404 HANDLER
// ======================================================

console.log(`
=================================================
8. ADDING 404
=================================================
`);

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "Page Not Found"

    });

});

// ======================================================
// SERVER
// ======================================================

app.listen(PORT, () => {

    console.log(`
=================================================
EXPRESS DEEP DIVE SERVER RUNNING
=================================================

http://localhost:${PORT}

ROUTES

GET  /
GET  /about
GET  /contact

GET  /users
GET  /users/101

GET  /product/500

GET  /search?keyword=node&page=1

POST /login

GET  /html

GET  /sendfile

GET  /file-helper

GET  /middleware

GET  /request-info

GET  /response-demo

GET  /old-home

GET  /download

GET  /error

=================================================
`);

});