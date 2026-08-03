const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;


const userSchema = new Schema({
    email :{
        type : String,
        required : true,
    }
});
  
userSchema.plugin(passportLocalMongoose);// this is used to hash and salt the password and save the user in the database and also provides the user and password authentication methods to the user model

module.exports = mongoose.model("User", userSchema);