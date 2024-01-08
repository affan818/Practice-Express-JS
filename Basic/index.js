import express from "express";
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("<h1>Hello,Welcome to the Basic Express Class</h1>");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port} `);
});
