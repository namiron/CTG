const passport = require("passport")


const isLoading =(req,res,next)=>{
    req.user ? next():  res.status(401).json({message:'let check problem here!'})}

const entrance = passport.authenticate("google", { scope: ["profile", "email"] });

const callback = (req, res, next) => {
    passport.authenticate("google", { failureRedirect: "/register" }, (err, user) => {
        if (err) {
            return next(err); 
        }
        if (!user) {
            return res.redirect("/register");
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.redirect(`http://localhost:5173`);
        });
    })(req, res, next);
};


const success = (req, res) => {
    if (req.user) {
        return res.status(200).json(req.user);
    }
    return res.status(401).json({ message: "Unauthorized" });
};


const logout = (req,res)=>{
     req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Could not log out');
    }
    res.clearCookie('connect.sid'); // Удаляем cookie
    res.status(200).send('Logged out');
  });
}

module.exports = {
    isLoading,
    success,    
    callback,
    entrance,
    logout
}