import express from 'express';
import helloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://127.0.0.1:27017/tuiter';

mongoose.connect(CONNECTION_STRING);
import mongoose from "mongoose";


const app = express()

app.use(cors())
app.use(express.json());

//mongoose.connect('mongodb://127.0.0.1:27017/tuiter');

helloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);