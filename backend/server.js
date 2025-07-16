import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'

//App Config
const app = express()
//setting up body parser.
// var bodyParser = require('body-parser')
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//Middleware.
app.use(express.json())
app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({
//     extended: true
// }))

//API Endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)

// app.get('/', (req, res)=>{
//     res.send("API Working")
// })

app.listen(port, ()=> console.log('Server started on PORT : ' + port))