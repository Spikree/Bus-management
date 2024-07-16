import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    department: {type: String, required: true},
    class: {type:String, required: true},
    city: {type:String, required: true},
    price: {type: Number, required: true},
    year: {type: String, required: true}
})

const User = mongoose.model('User',userSchema);

export default User;