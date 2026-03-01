const express = require('express');
const dotenv = require('dotenv');
const  router  = require('./Routers/auth_route.js');
const messageRoutes = require("./Routers/message_route.js");
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use("/api/auth", router);
app.use("/api/message",messageRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port: "+ PORT);
});
