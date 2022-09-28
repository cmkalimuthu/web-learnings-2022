const path = require("path");
const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const MongoStore = require("connect-mongo");
const exhbs = require("express-handlebars");
const methodOverride=require("method-override")
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 5000;

//load config
dotenv.config({ path: "./config/config.env" });
//passport config
require("./config/passport")(passport);

const app = express();

//body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//method override
app.use(methodOverride(function(req,res){
    console.log(req.body)
    if(req.body && typeof req.body === 'object' && req.body['_method']){
        console.log('method overide')
        let method=req.body._method
        delete req.body._method
        return method

    }
}))

//logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//handlebar helpers
const {formatDate,stripTags,truncate,editIcon,select}=require('./helpers/hbs');
//handlerbars
app.engine(".hbs", exhbs.engine({helpers:{formatDate,stripTags,truncate,editIcon,select}, defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//session middleware
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//set global variable
app.use(function(req,res,next){
    res.locals.user=req.user||null
    next();
})

//static folders
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));

connectDB();

app.listen(
  PORT,
  console.log(
    `app is up and running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
