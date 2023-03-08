const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/userRoutes")

//middleware
app.use(express.json());

app.get('/about', (req, res) => {
  res.send("hello, this is aboutpage.");
})

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.use("/api/user", userRoute);


const url = 'mongodb://localhost:27017/crud';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.Promise = global.Promise;
mongoose.connect(url, options)
  .then(() => { console.log("Connected to MongoDB") })
  .catch((err) => console.log(err));


module.exports = app;