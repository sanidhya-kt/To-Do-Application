const tasks = require("./routes/tasks");
const dotenv = require("dotenv");
const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

dotenv.config({ path: "server/config.env" });

connection();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
