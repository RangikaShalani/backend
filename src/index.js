const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
// app.use("/api/app", routes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = 8000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

