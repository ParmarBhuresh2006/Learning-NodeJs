const http = require('http');
const {Home}=require('./Home')
const server = http.createServer(Home);
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
});