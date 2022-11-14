const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


// routes 
const workersRoutes = require('./routes/workers.routes');

const app = express();


// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
// Test Route 
app.get('/', (req, res) => {
    res.status(200).json({"success": "ok"});
})


app.use("/api", workersRoutes);

const PORT = 8080;


const server = app.listen(
    PORT,
    () => {
        console.log("App Running");
    }
);

