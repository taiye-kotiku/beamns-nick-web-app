import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Fly.io deployment working 🚀");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
