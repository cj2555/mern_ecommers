import mongoose from 'mongoose';
import Product from './models/productModel.js';
import User from './models/userModel.js';
import products from './data/products.js';
import user from './data/user.js';
import dbCOnfig from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()
dbCOnfig()

const importData = async () => {
  

  try {
    const createdUser = await User.insertMany(user)
    
    const adminUser = createdUser[0]._id
    

    const sampleProducts=products.map((product) => {
        return {...product,user:adminUser}
    })

    await Product.insertMany(sampleProducts)
    console.log('Data Imported!')
    process.exit()



  } catch (e) {
    console.error(`${e}`)
    process.exit(1)
 }
}
importData()