const express = require('express');

const app = express();

//change the port but idk what yet
const PORT = process.env.port || 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/"));

// app.get('/routes/routeIndex');
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//change the url
app.listen(PORT, () => 
console.log(`App is listneing at http://localhost:${PORT}`)
);
