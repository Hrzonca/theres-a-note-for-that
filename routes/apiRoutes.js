const db = require('../db/db.json');


module.exports = function(app) {
//`GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
    res.json(db);
})

//`POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
app.post('/api/notes', (req, res) =>  {
    db.push(req.body);
    res.json(true);
})

//delete note but not sure how to
app.delete('')

}