const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const semesterRoutes= require("./routes/semesterRoutes")
const subjectRoutes = require("./routes/subjectRoutes")
const materialRoutes= require("./routes/materialRoutes");
const adviceRoutes = require("./routes/adviceRoutes");
const codingAdviceRoutes = require("./routes/codingAdviceRoutes");


require("dotenv").config();

require("./config/db");

const errorHandler = require("./middleware/errorHandler");


app.get("/", (req, res) => {
  res.send("hello i am main root");
});
app.get("/ping",(req,res)=>{
  res.send("pong");
})

app.use("/api/semesters",semesterRoutes);
app.use("/api/subjects/",subjectRoutes);
app.use("/api/materials",materialRoutes)
app.use("/api/advice", adviceRoutes);
app.use("/api/coding", codingAdviceRoutes);
app.use(errorHandler);


app.listen(process.env.PORT, () => {
  console.log(`app is listning on ${process.env.PORT}`);
});
