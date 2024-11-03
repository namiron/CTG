require("dotenv").config();
const passport = require("passport")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { prisma } = require('./prisma/prisma-client')
//--------------------------------------
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
//--------------------------------------


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/api/auth/google/callback"
  },
  async function (accessToken, refreshToken, profile, cb) {
    try {
   
      let user = await prisma.user.findUnique({
        where: {
          googleId: profile.id
        }
      });

    
      if (!user) {
        user = await prisma.user.create({
          data: {
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            // token: accessToken,
            // refreshToken
          }
        });
      }

      
      return cb(null, user);
    } catch (error) {
      return cb(error, null);
    }
  }
));


passport.serializeUser((user, done) => {
  done(null, user.id); 
});


passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    done(null, user);
  } catch (err) {
    done(err, null);
  }
})