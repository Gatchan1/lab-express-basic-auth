const session = require("express-session")
const mongoStore = require("connect-mongo")
const mongoose = require("mongoose")

module.exports = (app) => {
    app.set("trust proxy", 1);
    app.use(session({
        secret: process.env.SESS_SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            maxAge: 60000
        },
        store: mongoStore.create({mongoUrl:process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/auth"}) // ojo, esta línea me ha traído de cabeza; era importantísimo cambiar también aquí el localhost por 127.0.0.1
    }));
}