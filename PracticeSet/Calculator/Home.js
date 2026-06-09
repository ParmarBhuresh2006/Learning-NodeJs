const {SumResult} = require('./SumResult')
const Home=(req,res)=>{
if(req.url==='/'){
    res.write(`
    <html>
    <body>
    <h1>Welcome</h1>
    <a href="calculator">calculator</a>
    </body>
    </html>
    `);
    return res.end();
}
else if(req.url.toLowerCase()==="/calculator")
{
    res.setHeader('Content-Type','text/html');
    res.write(`
    <html>
    <body>
    <h1>Calculate Sum</h1>
    <form action='/result' method='POST'>
    <input type='Text' placeholder='First'name="first"/>
    <input type='Text' placeholder='Second'name="second"/>
    <input type='Submit' value='Submit'></input>
    </form>
    </body>
    </html>
    `);
    return res.end();
}
else if(req.url.toLowerCase()==="/result"&& req.method==="POST")
{
   return SumResult(req,res);
}
else{
     res.write(`
    <html>
    <body>
    <h1>404</h1>
    <a href="/">Home</a>
    </body>
    </html>
    `);
}
}
exports.Home=Home;