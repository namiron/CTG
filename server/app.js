require("dotenv").config();
const express = require("express");
require("./passport");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require('express-session')
const MongoStore  = require('connect-mongo')
const passport = require('passport')
const app = express();
//----------------------------
const baseUrl = process.env.BASE_URL
const baseUrlVercel = process.env.BASE_URL_VERCEL
const session_secret = process.env.SESSION_SECRET
const db_url = process.env.DATABASE_URL
const secure_type = process.env.NODE_ENV

//----------------------------


const corsOptions = {
  origin: [baseUrl, baseUrlVercel],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};


//---------------------------------settings
app.use(
  session({
    secret:session_secret, 
    resave: false, 
    saveUninitialized: false, 
    store: MongoStore.create({
      mongoUrl: db_url,
      collectionName: "sessions",
    }),
    cookie: {
      secure: false, 
      maxAge: 1000 * 60 * 60, 
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(logger("dev"));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//---------------------------------settings



//---------------------------------routes
app.use("/api/user", require("./routes/users.routes"));
app.use("/api/employees", require("./routes/employees.routes"));
app.use("/api/auth", require("./routes/google.routes"));
app.use("/", (req, res) => { res.send("hello")});
//---------------------------------routes


module.exports = app;
