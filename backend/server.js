const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Connect database
mongoose.connect("mongodb://Nishanth123:Vaish123nav@ac-loayavn-shard-00-00.nx7lzfd.mongodb.net:27017,ac-loayavn-shard-00-01.nx7lzfd.mongodb.net:27017,ac-loayavn-shard-00-02.nx7lzfd.mongodb.net:27017/?ssl=true&replicaSet=atlas-omclff-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Create schema
const User = mongoose.model("User", {
    username: String,
    password: String
});

// Signup API
app.post("/signup", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send("Signup successful");
});

// Login API
app.post("/login", async (req, res) => {
    const user = await User.findOne(req.body);
    if(user) res.send("Login success");
    else res.send("Invalid credentials");
});

// Test route
app.get("/", (req, res) => {
    res.send("Backend running 🚀");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});