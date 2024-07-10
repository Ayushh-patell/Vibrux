const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, "build")))
app.use(express.static("public"))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

const PORT = process.env.PORT || 5000
console.log("server started on port", PORT);
app.listen(PORT)