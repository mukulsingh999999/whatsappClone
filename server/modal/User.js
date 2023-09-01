import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    aud:{
        type:String,
        required: true
    },
    azp:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    email_verified:{
        type:Boolean,
        required:true
    },
    exp:{
        type:Number,
        required:true
    },
    family_name:{
        type:String,
        required:true
    },
    given_name:{
        type:String,
        required:true
    },
    iat:{
        type:String,
        required:true
    },
    iss:{
        type:String,
        required:true
    },
    jti:{
        type:String,
        required:true
    },
    locale:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    nbf:{
        type:Number,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model('userModel',userSchema);

export default userModel;