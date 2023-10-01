const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const fs = require("fs");

const app = express();
const secretKey = "-----BEGIN RSA PRIVATE KEY-----\n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\n-----END RSA PRIVATE KEY-----\n";
let db; 
const dbFilePath = 'users.db';


function connectToDatabase() {
  return new Promise((resolve, reject) => {
    db = new sqlite3.Database("users.db", (err) => {
      if (err) {
        console.error("Error opening database:", err.message);
        reject(err);
      } else {
        console.log("Connected to the database.");
        resolve(db);
      }
    });
  });
}

function createUsersTable(db) {
  return new Promise((resolve, reject) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      )`,
      (err) => {
        if (err) {
          console.error("Error creating table:", err.message);
          reject(err);
        } else {
          console.log("Table 'users' created or already exists.");
          resolve(db);
        }
      }
    );
  });
}

function createAdminUser(db) {
  return new Promise((resolve, reject) => {
    const adminUsername = "admin";
    const adminPassword = "butterflyhahahahahahhahahahahhahahahahahhahahahhahahahhahahahhahahahah";

    db.get("SELECT * FROM users WHERE username = ?", [adminUsername], async (err, row) => {
      if (err) {
        reject(err);
      }

      if (!row) {
        const hashedPassword = await bcrypt.hash(adminPassword, 10);

        // Explicitly set the id to 1 for the admin user
        db.run(
          "INSERT INTO users (id, username, password) VALUES (?, ?, ?)",
          [1, adminUsername, hashedPassword], // Set id to 1
          (err) => {
            if (err) {
              reject(err);
            } else {
              console.log("Admin user created.");
              resolve();
            }
          }
        );
      } else {
        resolve();
      }
    });
  });
}


async function startServer() {

  app.use((req, res, next) => {
    // Add this middleware to include the set-cookie header in every response
    res.header('Access-Control-Expose-Headers', 'set-cookie');
    next();
  });
  
  const dbFilePath = 'users.db';
  if (fs.existsSync(dbFilePath)) {
    fs.unlinkSync(dbFilePath);
    console.log('Deleted the SQLite3 database at startup.');
  }
  
  await connectToDatabase();
  await createUsersTable(db);
  await createAdminUser(db);

  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/login.html");
  });

  app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html");
  });

  app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
  });

  const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send("Unauthorized. Please log in.");
    }

    try {
      const decodedToken = jwt.decode(token, secretKey);
      console.log(decodedToken);
  

      if (decodedToken.username === "admin") {
        req.user = decodedToken;
        return next();
      } else {
        jwt.verify(token, secretKey, { algorithms: ["RS256"] });
        next();
      }
    } catch (err) {
      return res.status(401).send("Unauthorized. Invalid token.");
    }
  };

  app.get("/dashboard", verifyToken, (req, res) => {
    res.sendFile(__dirname + "/dashboard.html");
  });

  app.get("/user", verifyToken, (req, res) => {
    const token = req.cookies.token;
    const decodedToken = jwt.decode(token, secretKey);

    db.get("SELECT * FROM users WHERE id = ?", [decodedToken.id], (err, row) => {
      if (err) {
        return res.status(400).json({ error: "Error finding user." });
      }

      if (!row) {
        return res.status(404).json({ error: "User not found." });
      }

      const { id, username, role } = row;
      res.json({ id, username, role });
    });
  });

  app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      [username, hashedPassword],
      (err) => {
        if (err) {
          return res.status(400).send("Error registering user.");
        }

        res.redirect("/");
      }
    );
  });

  app.post("/login", async (req, res) => {
    const { username, password } = req.body;
  
    const sql = `SELECT * FROM users WHERE username = '${username}'`;
  
    db.get(sql, async (err, row) => {
      if (err) {
        return res.status(400).send("Error finding user.");
      }
  
      if (!row) {
        return res.status(401).send("Invalid username or password.");
      }
  
      try {
        const isPasswordValid = await bcrypt.compare(password, row.password);
  
        if (isPasswordValid) {
          const userPayload = {
            id: row.id,
            username: row.username,
            role: "user",
          };
  
          const token = jwt.sign(userPayload, secretKey, {
            algorithm: "RS256",
            expiresIn: "1h",
          });
  
          res.cookie("token", token, { httpOnly: true, secure: true });
  
          res.redirect("/dashboard");
        } else {
          res.status(401).send("Invalid username or password.");
        }
      } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).send("Internal server error.");
      }
    });
  });
}
startServer();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
