const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const routes = require("./routes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/api/app", routes);

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

connectDB().then(async () => {
    const port = 8000;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
    
})



