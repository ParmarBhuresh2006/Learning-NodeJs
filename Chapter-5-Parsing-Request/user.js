const fs = require('fs');

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <head><title>User Details</title></head>
    <body><h1>Enter Your Details:</h1>
    <form action="/submit-details" method="POST">
    <input type="text" name="username" placeholder="Enter your name"><br>
    <label for="male">Male</labe>
    <input type="radio" id="male" name="gender" value="male" />
    <label for="female">Female</label>
    <input type="radio" id="female" name="gender" value="female" />
    <br><input type="submit" value="Submit">
    </form>
    </body>
    </html>`);
    return res.end();

  } else if (req.url.toLowerCase() === "/submit-details" &&
        req.method == "POST") {
    
    const body = [];      
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.appendFileSync('user.txt', '\n' + JSON.stringify(bodyObject));
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
  res.end();
};

module.exports = userRequestHandler;