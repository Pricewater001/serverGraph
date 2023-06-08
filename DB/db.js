const mongoose = require('mongoose');

async function connect() {
    const uri = `mongodb://hasan:1234@ac-20ugd3y-shard-00-00.oxdfawe.mongodb.net:27017,ac-20ugd3y-shard-00-01.oxdfawe.mongodb.net:27017,ac-20ugd3y-shard-00-02.oxdfawe.mongodb.net:27017/Data?ssl=true&replicaSet=atlas-2y37fe-shard-0&authSource=admin&retryWrites=true&w=majority`; // Replace with your MongoDB connection URL

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

module.exports = { connect };
