import express from 'express';
import { Welcome } from './Controller/GlobalController.js';

const app = express();
app.get('/', function( req, res ){
    res.send("Hello Awdiz")
})
app.get('/welcome', Welcome)

app.listen(8000, ()=> console.log("App is running on port 8000."))