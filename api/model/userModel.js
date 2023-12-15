import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String
    },
    username:{
        type:String
    },
    age:{
        type:Number
    },
    salary:{
        type:String
    }

})

const User = new mongoose.model('User', userSchema)

export default User