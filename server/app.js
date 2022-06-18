// Implement your web server here
const express = require("express");
const cors = require("cors");
const personnelRouter = require("./routers/personnel");

const PORT = 80;
const app = express();

app.use(cors());

const apiRouter = express.Router();
apiRouter.use(personnelRouter);

app.use("/api", apiRouter);

app.listen(PORT, () =>
  console.log(`App running at http://localhost on port ${PORT}`)
);
