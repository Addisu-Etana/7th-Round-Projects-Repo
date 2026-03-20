const express = require('express');
const app = express();
app.use((req, res, next) => {
  if (req.query.admin === "true") {
    res.send("Welcome Admin");
  } else {
    res.send("Access Denied");
  }
});
app.get("/", (req,res)=>{
    res.send('<h1>Hello first express example</h1>');
});
app.get("/user", (req, res) => {
  res.json({ name: "John", role: "Student" });
});
app.use((req, res, next) => {
  console.log("Middleware is working");
  next(); // Pass control to the next middleware/route
});
app.get("/contact", (req, res) => {
  res.send("Contact us at info@email.com");
});


app.listen(5000);
