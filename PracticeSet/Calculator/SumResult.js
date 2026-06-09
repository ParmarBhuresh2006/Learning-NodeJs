const SumResult = (req, res) => {
  const Num = [];
  req.on("data", (chunk) => {
    console.log(chunk);
    Num.push(chunk);
  });
  req.on("end", () => {
    const FinalNUmbers = Buffer.concat(Num).toString();
    console.log(FinalNUmbers);
    const Params = new URLSearchParams(FinalNUmbers);
    const NumberObject = Object.fromEntries(Params);
    console.log(NumberObject);
    let answer;
    if (NumberObject.addition) {
      answer = Number(NumberObject.first) + Number(NumberObject.second);
    } else if (NumberObject.Multiplication) {
      answer = Number(NumberObject.first) * Number(NumberObject.second);
    } else if (NumberObject.Subtraction) {
      answer = Number(NumberObject.first) - Number(NumberObject.second);
    } else if (NumberObject.Division) {
      if (Number(NumberObject.second) === 0) {
        answer = "Cannot divide by zero";
      } else {
        answer = Number(NumberObject.first) / Number(NumberObject.second);
      }
    }
    res.write(`
     <html>
    <body>
    <h1>Your Answer is ${answer}</h1>
    <a href="/">Home</a>
    </body>
    </html>
    `);
  });
};
exports.SumResult = SumResult;
