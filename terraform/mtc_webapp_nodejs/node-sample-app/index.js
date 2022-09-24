const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "MTC - Microsoft - Welcome to nodejs application from Azure app"
    })
})

const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log("Server is listening");
  });