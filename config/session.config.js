const session = require("express-session")
const mongoStore = require("connect-mongo")

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
        },
        store: mongoStore.create({mongoUrl:process.env.MONGODB_URI || "mongodb://localhost:27017/auth"})
    }));
}