const express = require('express');
const dotenv = require('dotenv');
const  router  = require('./Routers/auth_route.js');
const messageRoutes = require("./Routers/message_route.js");
const path = require('path');
const fs = require('fs');

dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use("/api/auth", router);
app.use("/api/message",messageRoutes);
app.get("/", (_req, res) => {
  res.send("Backend is running successfully 🚀");
});
const frontendDistPath = path.join(__dirname, "../../Frontend/ChatBot/dist");

if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath))

 app.get("*", (_req,res)=>{
    res.sendFile(path.join(frontendDistPath, "index.html"));
  })
}

app.listen(PORT, () => {
  console.log("Server is running on port: "+ PORT);
});
