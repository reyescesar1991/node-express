const express = require("express");
const app = express();

const port = 3001;

app.get("/", (req, res) => {
    res.json({"message" : "This is home page"});
});

app.get("/users", (req, res) => {
    res.json({message : "Get All the Users"});
});

app.get("/users/:id", (req, res) => {
    res.json({message : `Get User with ID ${req.params.id}`});
});

app.post("/users/", (req, res) => {
    res.json({message: 'Create new user'});
})

app.put("/users/:id", (req, res) => {
    res.json({message: `Update user with ID ${req.params.id}`});
})

app.delete("/users/:id", (req, res) => {
    res.json({message: `Delete user with ID ${req.params.id}`});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})