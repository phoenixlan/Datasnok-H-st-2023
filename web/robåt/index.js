let express = require("express");
const app = express();

async function startServer() {

    app.use((req, res, next) => {
      // Add this middleware to include the set-cookie header in every response
      res.header('Access-Control-Expose-Headers', 'set-cookie');
      next();
    });
  
    app.use(express.urlencoded({ extended: true }));
  
    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/index.html");
    });
  
    app.get("/robots.txt", (req, res) => {
      res.sendFile(__dirname + "/robots.txt");
    });

    app.get("/flagnfkjndafkjnakjfndfnakjsnfksa", (req, res) => {
        res.sendFile(__dirname + "/hahaha.html");
    });
  
};
startServer();
  
app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});