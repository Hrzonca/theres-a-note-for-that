const express = require('express');

const app = express();

//change the port but idk what yet
const PORT = process.env.port || 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/"));

//calling the routes with express
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//change the url
app.listen(PORT, () => 
console.log(`App is listneing at http://localhost:${PORT}`)
);


//issues for tutor: 
//information is not saving to the db.json file
//when you click on the note it does not show on the left side 
//correct port???
//delete button