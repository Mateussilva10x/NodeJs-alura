import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://mateusadmin:1234@alura.1adak.mongodb.net/alura-node?"
);

let db = mongoose.connection;

export default db;
