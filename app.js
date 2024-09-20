const express = require("express");
const app = express();

app.set("view engine", "pug");


app.use('/static', express.static(__dirname + '/public'));

const myLogger = (req, res, next) => {
     console.log("LOGGED");
     next();
    };
    
    app.use(myLogger);

    //app.use((req, res, next) => {
    //      res.status(404).send("Sorry cant find that!");
    //    });

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

app.get("/", (req, res) => {
     res.render("index", {
      title: "Hey",
      message: "Hello there!",
     });
    });

app.use("/faq", function (request, response) {
  response.render("faq", {
  title: "Обо мне",
  emailsVisible: true,
  emails: ["erohin55555@gmail.com"],
  phone: "+79996665533",
  zanyatie: "Информационные системы",
  hobby: "Отсутсвует",
  interesiOGO: ["Спать", "Гулять"],
  svyaz: "Социльные сети"
 });
    });
        
    
app.get("/blog", (req, res) => {
     res.render("blog", {})
 })

 app.get("/dinam", (req, res) => {
     res.render("dinam", {})
 })
        
