import mongoose from 'mongoose';


const dbCOnfig = async () => {
    

    try {
        const conn= await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
     }) 
    console.log(`connected to mongoose ${conn.connection.host}`);
    } catch (error){
       console.error(`Error:${error.message}`)
        
    }
    
    
}

export default dbCOnfig