const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodeLearning.efqdmnh.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set("strictQuery", true);

const connectToDatabase = async () => {
  await mongoose.connect(uri, (error) => {
    if (error) {
      console.log("Erro ao se conectar com o banco de dados: ", error);
      console.log(`${process.env.MONGODB_PASSWORD}`);
      console.log(`${process.env.MONGODB_USERNAME}`);
    }
    return console.log("Conexão com banco de dados bem sucedida");
  });
};

module.exports = connectToDatabase;
