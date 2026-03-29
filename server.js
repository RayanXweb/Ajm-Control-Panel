const express = require("express");
const path = require("path");

const app = express();

// static folder
app.use(express.static(path.join(__dirname, "public")));

// route utama
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// dashboard route
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public/dashboard.html"));
});

// fallback (anti error 404 di vercel)
app.get("*", (req, res) => {
  res.redirect("/");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running..."));
