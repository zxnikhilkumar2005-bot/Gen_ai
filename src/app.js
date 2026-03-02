const express = require ("express")
const cookieParser = require("cookie-parser")


const app = express();

// simple request logger to help debug 404s
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use(express.json());
app.use (cookieParser())


//require all the routes here
const  authRouter =require("./routes/auth.routes")

// using all the routes here
app.use("/api/auth",authRouter)



module.exports = app