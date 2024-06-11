const { render } = require("ejs");
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("hi, i m root")
});

app.get("/home", async (req, res) => {
   res.render("./home.ejs")
})

app.listen(8080, () => {
    console.log("listening to port 8080")
})