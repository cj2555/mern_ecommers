import  express from 'express';
import dbCOnfig from './config/db.js';
import  dotenv from 'dotenv';
import productRouters from './routes/productRoutes.js';
import userRouters  from './routes/userRoutes.js';

dotenv.config()


dbCOnfig();
const app = express();
app.use(express.json())


app.get('/',(req,res) => {
    res.send('api is running');
})

app.use('/api/products',productRouters)
app.use('/api/users',userRouters)

const PORT=process.env.PORT

app.listen(PORT, console.log(`server running on ${process.env.NODE_ENV} mode on port ${PORT}`))

