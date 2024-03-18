import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var titlePrint = "";
var datePrint = "";
var blogPrint = "";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {});
});

app.get("/edit", (req, res) => {
  res.render("edit.ejs", {
    titleInput: titlePrint,
    date: datePrint,
    blogInput: blogPrint,
  });
});

function collectData(req, res, next) {
  titlePrint = req.body["title"];
  datePrint = new Date();
  blogPrint = req.body["blog"];
  next();
}

app.use(collectData);

app.post("/submit", (req, res) => {
  res.render("index.ejs", {
    titleInput: titlePrint,
    date: datePrint,
    blogInput: blogPrint,
  });
  console.log(titlePrint);
});


// app.patch("/edit", (req, res) + {});

app.listen(port, () => {
  console.log(`Battleship ${port} Cats listening, over!`);
});
