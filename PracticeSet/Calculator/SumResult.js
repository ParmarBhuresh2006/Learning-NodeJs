const SumResult = (req, res) => {
  const Num = [];
  req.on('data', (chunk) => {
    console.log(chunk)
    Num.push(chunk);
    
  });
  req.on("end", () => {
    const FinalNUmbers = Buffer.concat(Num).toString();
    console.log(FinalNUmbers)
    const Params = new URLSearchParams(FinalNUmbers);
    const NumberObject = Object.fromEntries(Params);
    console.log(NumberObject)
    const Sum = Number(NumberObject.first)+Number(NumberObject.second);
    res.write(`
     <html>
    <body>
    <h1>${NumberObject.first} + ${NumberObject.second}=${Sum}</h1>
    <a href="/">Home</a>
    </body>
    </html>
    `);
  });
};
exports.SumResult = SumResult;
