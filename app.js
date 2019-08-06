var express = require("express");
  app = express();
  bodyParser = require('body-parser');
  // mongoose = require("mongoose")

  // renvoi vers les routes définies dans le dossier routes - préfixé //
var todoRoutes =  require("./Routes/todos");
app.use("/api/todos", todoRoutes);
app.use(express.static(__dirname + "/Public"));
app.use(express.static(__dirname + "/Views"));

app.get("/", function(req, res){
  res.sendFile("index.html")
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

  app.listen(3002, () => {
    console.log('the server runs on port 3002!')
  });