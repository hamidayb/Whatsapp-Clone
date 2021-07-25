import mongoose from "mongoose";

const databaseSchema = mongoose.Schema({
    email: String,
    name: String,
    message: String,
    timestamp: String,
    received: Boolean
})

// database collection
export default mongoose.model('messagecontents', databaseSchema )