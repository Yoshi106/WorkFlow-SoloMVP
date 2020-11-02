const express = require("express");
const app = express();

app.use(express.static(__dirname + "/build"));

app.get("/api", (req, res) => {
    res.send("Hello World");
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
        console.log("App listening on port" + port);
});
