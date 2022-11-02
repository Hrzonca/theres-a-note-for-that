const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');


module.exports = function (app) {
    //`GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    });

    app.get('/api/notes/:id', (req, res) => {
        let oldNotes = JSON.parse(fs.readFileSync('../db/db.json', 'utf8'));
        res.json(oldNotes[Number(req.params.id)]);
    });
    //`POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
    app.post('/api/notes', (req, res) => {
        let oldNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
        let newNote = req.body;
        let uniqueNote = (oldNotes.length).toString();
        newNote.id = uniqueNote;
        oldNotes.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(oldNotes));
        console.log("Note saved to db.json. Content: ", newNote);
        res.json(oldNotes);
    })

    //delete note but not sure how to
    app.delete('/api/notes/:id', (req, res) => {
        let oldNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        let noteDelete = req.params.id;
        let deletedId = 0;
        console.log(`${noteDelete} is deleted`);
        oldNotes = oldNotes.filter(currentNote => {
            return currentNote.id != deletedId;
        })

        for (currentNote of oldNotes) {
            currentNote.id = deletedId.toString();
            deletedId++
        }


        fs.writeFileSync("./db/db.json", JSON.stringify(oldNotes));
        res.json(oldNotes);

    })}