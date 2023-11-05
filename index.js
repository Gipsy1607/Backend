import express from 'express';
import router from './Routes/Index.js'

const app = express();
app.use(( req, res, next)=>{
    console.log("Hi from the middleware!!")
})
app.get('/', function( req, res ){
    res.send("Hello Awdiz")
})
app.use("/api/v1", router)

app.listen(8000, ()=> console.log("App is running on port 8000."))