const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/mortex';
const dbName = 'mortex';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
  if (err) throw err;

  const db = client.db(dbName);

  // Шаг: Добавление imageId к каждой картинке
  const images = await db.collection('картинки').find({}).toArray();

  for (const image of images) {
    const imageId = image._id;

    // Пример: добавление imageId к заказам
    await db.collection('заказы').updateMany({ imageId: imageId }, { $set: { imageId: imageId } });
  }

  console.log('Идентификаторы успешно добавлены к заказам.');

  client.close();
});
