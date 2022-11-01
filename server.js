//
const express = require('express');

//change the port but idk what yet
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public/"));


//change the url
app.listen(PORT, () => 
console.log(`App is listneing at http://localhost:${PORT}`)
);
