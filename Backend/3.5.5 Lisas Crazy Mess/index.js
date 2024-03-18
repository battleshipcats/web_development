import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/form.html");
});

app.post("/submit", (req, res) => {

    res.render("index.ejs", {
        firstname1: req.body["firstname1"],
        firstname2: req.body["firstname2"],
        place: req.body["place"],
        livingthing: req.body["livingthing"],
        food: req.body["food"],
        bodypart: req.body["bodypart"],
        adverb: req.body["adverb"],
        adjective: req.body["adjective"],
        interjection: req.body["interjection"],
        gerund: req.body["gerund"],
        transport: req.body["transport"],
    });
});

app.listen(port, () => {
    console.log(`Battleship ${port} Cats listening, over!`)
});