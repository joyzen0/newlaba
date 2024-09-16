const express = require("express");
const app = express();

app.set("view engine", "pug");


app.use('/static', express.static(__dirname + '/public'));

const myLogger = (req, res, next) => {
      console.log("LOGGED");
      next();
    };
    
    app.use(myLogger);

    app.use((req, res, next) => {
          res.status(404).send("Sorry cant find that!");
        });

    app.use((err, req, res, next) => {
          console.error(err.stack);
          res.status(500).send("Something broke!");
        });
        

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/", (req, res) => {
      res.send("Got a POST request");
    });
 
    app.put("/user", (req, res) => {
          res.send("Got a PUT request at /user");
        });

        app.delete("/user", (req, res) => {
              res.send("Got a DELETE request at /user");
            });
            
app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});


        
