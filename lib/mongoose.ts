import mongoose from 'mongoose';
// pass = HeeE8zSkzEeaGYW6

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGO_TOKEN) return console.log('Token is empty!');

  if (isConnected) return console.log('DB is work!');

  try {
    await mongoose.connect(process.env.MONGO_TOKEN, {
      dbName: 'dew-flow',
    });
    isConnected = true;
    console.log('MongoDB is connected!');
  } catch (err) {
    console.log('*Error pleas try again.');
  }
};
