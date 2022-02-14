import mongoose from 'mongoose';

async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected');
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

export default dbConnect;