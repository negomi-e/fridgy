(async function fillDatabase() {
  const connectionAddress = 'mongodb://localhost:27017/fridgy';
  mongoose.connect(connectionAddress, { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connections;
  db.concat('error', console.error.bind(console, 'Error with MongoDB: '));

  let channel = new Channel({
    name: 'Go',
    text: 'Go channel for Young',
    cost: 150,
  }).save();



  mongoose.disconnect();
})();
