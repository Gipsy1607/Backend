import mongoose,{Schema} from "mongoose";


const user = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, lowercase: true},
    password: {type:String,required:true},
    number: {type:Number, required:true}
})

mongoose.model("User", user)