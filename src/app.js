const path = require("path");

const express = require('express');

const app = express();

const router = require('./router.js');


app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(express.static("public")); // to gain access to files in public folder

app.set("views", "../views"); // views are the files that you render in your brouser

app. set("view engine", "hbs");


app.use("/", router);








app.listen("3000", (req, res) =>{
    console.log('server is now running on port 3000...');
});
