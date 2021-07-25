// import modules
// Possible due to "type":"module" in package.json
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from 'cors';

//  app config
const app = express();
const port = process.env.PORT || 9000
const pusher = new Pusher({
    appId: "1239907",
    key: "91762b21848f61fff515",
    secret: "a5002b11f255133f29dc",
    cluster: "eu",
    useTLS: true
});

// middleware
app.use(express.json())
app.use(cors())
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     next();
// })

//  DB config
const connection_url = 'mongodb+srv://admin:33310800@cluster0.prqbj.mongodb.net/whatsappDB?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true    
})

const db = mongoose.connection
db.once('open', ()=>{
    console.log("DB connected")
    const msgCollection = db.collection('messagecontents')
    const changeStream = msgCollection.watch()

    changeStream.on("change", (change) => {
        console.log(change)
        if(change.operationType === "insert"){
            const msgDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                email: msgDetails.email,
                name: msgDetails.name,
                message: msgDetails.message,
                timestamp: msgDetails.timestamp,
                received: msgDetails.received
            })
        }
    })
})


// ...

// api routes
app.get('/', (req, res) => res.status(200).send("Hello World"))

app.get("/messages/sync", (req, res) => {   
    Messages.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            // status is 200 because we want to download the message not create
            res.status(200).send(data)
        }
    })
})

app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;
    
    Messages.create(dbMessage, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})


// listen
app.listen(port, ()=>console.log(`Listening on port ${port}`))