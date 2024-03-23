/* eslint-disable no-unused-vars */
import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var titlePrint = "";
var datePrint = "";
var blogPrint = "";

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("index", {});
});

function collectData(req, res, next) {
	titlePrint = req.body["title"];
	datePrint = new Date();
	blogPrint = req.body["blog"];
	next();
}

app.use(collectData);

app.get("/edit", (req, res) => {
	res.render("edit", {
		titleInput: titlePrint,
		date: datePrint,
		blogInput: blogPrint,
	});
});

app.post("/submit", (req, res) => {
	class Blog {  
		constructor({ title, date, content }) {
			this.title = title;
			this.date = date;
			this.content = content;
		}}

	var data = JSON.stringify(new Blog({title: titlePrint, date: datePrint, content: blogPrint}));
  
	fs.writeFile("views/"+(datePrint)+" - "+titlePrint+".ejs", data , "utf8", (err) => {
		if (err) throw err;
		console.log("File saved!");
	});

	res.render("blog", {
		titleInput: titlePrint, 
		date: datePrint,
		blogInput: blogPrint,
	});

});


app.listen(port, () => {
	console.log(`Battleship ${port} Cats listening, over!`);
});
   
// app.post("/submit", (req, res, next) => {
//   fs.readFile(__dirname + "/views/blog.ejs", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//     fs.writeFile("views/blog01.ejs", data , "utf8", (err) => {
//       if (err) throw err;
//       console.log(`File saved!`);
//       });
//   }); 
//     res.render(`blog01`, {
//       titleInput: titlePrint,
//       date: datePrint,
//       blogInput: blogPrint,
//     });
//     next();
//   });

// app.post("/submit", (req, res) => {
//   res.render("index.ejs", {
//     titleInput: titlePrint,
//     date: datePrint,
//     blogInput: blogPrint,
//   });
// });

// app.patch("/edit", (req, res) + {});

