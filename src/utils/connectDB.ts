import mongoose from 'mongoose'

if(!process.env.MONGODB_URI){
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local')
}

const MONGODB_URI: string = process.env.MONGODB_URI

let globalWithMongoose = global as typeof globalThis & {mongoose: any} 

let cached = globalWithMongoose.mongoose

if(!cached) {
  cached = globalWithMongoose.mongoose = {conn: null, promise: null}
}

export async function connectDB() {
  if(cached.conn) return cached.conn

  if(!cached.promise) {
    const options = {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    cached.promise = mongoose
      .connect(MONGODB_URI, options)
      .then((mongoose) => {
        console.log('Connected to DB', mongoose.connection.readyState); 
        return mongoose
      }).catch((err) => {
        console.log('Error connecting to DB', err);
        return err
      })

  }

  cached.conn = await cached.promise
  return cached.conn
}