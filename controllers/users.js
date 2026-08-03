const user = require("../models/user");

module.exports.rendersignUpForm = (req,res) =>{
    res.render("users/SignUp");
}

module.exports.signup = async (req,res,next) =>{
    try{
    let {username, email, password} = req.body;
    const newUser = new user({username,email});
    const registeredUser = await user.register(newUser,password);
    req.login(registeredUser , (err) => { // this is used to log in the user after signing up and it takes a callback function as an argument which is called after the user is logged in
        if(err){
            return next(err);
        }
        req.flash("success" , "Successfully Signed Up");
        res.redirect("/listings");
    }); 
    }catch(e){
        req.flash("error" , e.message);
        res.redirect("/signUp");
    }
}

module.exports.renderLoginForm = (req,res) =>{
    res.render("users/login");
}

module.exports.login = async (req,res,next) =>{
    req.flash("success" , "Welcome  back to Wanderlust !");
    let redirect =(res.locals.redirectUrl || "/listings"); // this is used to redirect the user to the url that he was trying to access before being redirected to the login page or if there is no such url then redirect to the listings page
    res.redirect(redirect);
}

module.exports.logout = (req,res,next) =>{
    req.logout((err) => {  //logout is a method provided by passport to log out the user and it takes a callback function as an argument which is called after the user is logged out
        if(err){
            return next(err);
        }
        req.flash("success" , "Successfully logged out");
        res.redirect("/listings");
    })
}