import "regenerator-runtime";
import "dotenv/config";
import "./db.js";
import app from "./server.js";
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`express ${PORT}  listen`));
