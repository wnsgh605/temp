import mongoose, { mongo } from "mongoose";

mongoose.connect("mongodb://localhost:27017/metube", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Success");
const handleError = (error) =>
  console.log(`Error on database connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
