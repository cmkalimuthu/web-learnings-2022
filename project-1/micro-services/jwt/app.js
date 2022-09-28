const express = require("express");
const app = express();
const programingLanguages = require("./node-mysql/routes/programingLanguages");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.json("hello chief");
});

app.use('/programing-Languages',programingLanguages)

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
})

app.listen(PORT, () => {
  console.log("app is up and running in port localhost:" + PORT);
});
