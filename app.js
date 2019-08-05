var express = require("express");
  app = express();
  bodyParser = require('body-parser');

app.get("/", (req, res)=>{
   res.send("Hello from home page")
});

  // renvoi vers les routes définies dans le dossier routes - préfixé
var todoRoutes =  require("./Routes/todos");
app.use("/api/todos", todoRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

  app.listen(3002, () => {
    console.log('the server runs on port 3002!')
  });