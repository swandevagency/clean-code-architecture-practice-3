import express from 'express'
import mongoose from 'mongoose'
import {router} from './routes'
// import { MongoClient } from 'mongodb'



const app = express()
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.use('/',router)

mongoose.connect('mongodb://localhost:27017/clean-code-auth')
.then(() => {console.log('database is connected')},
err => {console.log('can not connect to database')})

// async function connectionToDataBase(){
//     const url = 'mongodb://localhost:27017/clean-code-auth'
//     const client = new MongoClient(url)
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//         // const result = await client.db('clean-code-auth').collection('Users').insertOne({name : 'test'})
//         // res.status(200).send('idk that shiet happend or not')
        

//         // Make the appropriate DB calls
//         // await listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         // Close the connection to the MongoDB cluster
//         await client.close();
//     }
// }


// mongoose.connect('mongodb://localhost:27017/clean-code-auth')
// .then(() => {console.log('database is connected')},
// err => {console.log('can not connect to database')})

app.listen(5000, ()=>{
    console.log('app is running on port 5000')
})