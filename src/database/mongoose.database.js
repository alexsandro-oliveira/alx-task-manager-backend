const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.SECRET_KEY}@taskmanagercluster.cg98xeu.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerCluster`
    )
    .then(() => console.log("Connected to MongoDB!"))
    .catch((error) => console.log(error));
};

module.exports = connectToDatabase;
