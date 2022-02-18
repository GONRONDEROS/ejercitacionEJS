const express = require("express");
const app = express();
const mainRouter = require("./routes/mainRoute");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", mainRouter);

app.listen(7050, (req, res) => {
    console.log("Servidor corriendo exitosamente en http://localhost:7050");
});


