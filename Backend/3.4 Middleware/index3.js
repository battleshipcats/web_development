import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next)  {
  console.log("Request method: ", req.method);
  console.log("Request URL: ", req.text);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello from index 3");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
