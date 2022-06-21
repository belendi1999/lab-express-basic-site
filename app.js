const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(5400,() => console.log('my first app listening on port 5400'));

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html");
  });
app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html"); 
  });
app.get("/work", (req, res) => {
    res.sendFile(__dirname + "/views/work.html"); 
  });