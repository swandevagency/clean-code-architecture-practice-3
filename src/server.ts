import express from 'express'
import mongoose from 'mongoose'
import {router} from './routes/cretateRouter'


const app = express()
app.use(express.urlencoded({ extended : true}));
app.use(express.json());
app.use('/',router)

mongoose.connect('mongodb://localhost:27017/clean-code-auth')
.then(() => {console.log('database is connected')},
err => {console.log('can not connect to database')})

app.listen(5000, ()=>{
    console.log('app is running on port 5000')
})