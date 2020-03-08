import express, { Application } from "express";
import { constants } from "./src/config/constants";
import application from "./src/app";
const app: Application = express();

// app entry point
app.use(application);

app.listen(constants.port, () => {
    console.log("Server running on http://localhost:" + constants.port);
});