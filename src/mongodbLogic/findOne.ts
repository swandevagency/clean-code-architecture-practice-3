import info from ".";
const {client,dbName} = info

export default async function findOne (collectionName:string,filters:any){
    try {
        await client.connect()
        const result = await client.db(dbName).collection(collectionName).findOne({filters})
        await client.close()
        return result
    } catch (error:any) {
        console.log(error)
        throw new Error(error.message)
    }
}