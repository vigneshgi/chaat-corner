const express = require("express");
const app = express();
const port = 5000;
const cors = require('cors');
const programmingLanguagesRouter = require("./routes/programmingLanguages");
app.use(express.json());
// Enable CORS for all origins
app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

// GET request to retrieve data from MySQL
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM Stores', (error, results) => {
      if (error) {
        console.error('Error fetching data from MySQL:', error);
        res.status(500).json({ error: 'Error fetching data from MySQL' });
        return;
      }
      res.json(results);
    });
  });


app.use("/store-list", programmingLanguagesRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});