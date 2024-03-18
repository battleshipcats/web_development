import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    const today = new Date();
  //Test code
//   weekend:
//   new Date("March 9, 2024 11:13:00");
//   weekday:
//   new Date("March 6, 2024 11:13:00");
    const day = today.getDay();

    let what = "work hard";
    let type = "weekday";

    if(day === 0 || day === 6) {
        what = "have fun";
        type = "weekend";
    };

    res.render("index.ejs", { 
        dayType: type,
        doWhat: what,
    });
});

app.listen(port, () =>{
    console.log(`Battleship ${port} Cats listening, over!`)
});