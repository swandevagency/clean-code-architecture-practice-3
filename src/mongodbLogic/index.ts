import { MongoClient } from "mongodb";
const url = 'mongodb://localhost:27017/clean-code-auth'
const client = new MongoClient(url)
const dbName = 'clean-code-auth'
const info = {
    client,
    dbName,
}
// export default async function dbConnector(collectionName:string,order:any){
//     try {
//         await client.connect()
//         await order(client)
//         await client.close()
//     } catch (error) {
//         console.log(error)
//         return error
//     }
// }
export default info