import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {
    numberOfLetters: numLetters,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

/* import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var numberOfLetters = 0;

app.use(bodyParser.urlencoded({ extended: true }));

function countLetters (req, res, next) {
  var firstName = req.body["fName"];
  var lastName = req.body["lName"];
  numberOfLetters = firstName.length + lastName.length;
  next();
};

app.get("/", (req, res) => {
  res.render("index.ejs", {
    textOutput: "Enter your name here:",
  });
});

app.use(countLetters);

app.post("/submit", (req, res) => {
  res.render("index.ejs",{
    textOutput: `Your name has ${numberOfLetters} letters.`,
    string: req.body["fName"] +" "+ req.body["lName"],
  });
  console.log(numberOfLetters);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 */
