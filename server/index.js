const app = require("express")();
const Http = require("http");
const cors = require("cors");

// Create the Http server
const server = Http.createServer(app);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
