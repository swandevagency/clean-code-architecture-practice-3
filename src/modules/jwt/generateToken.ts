import jwt from 'jsonwebtoken'
const jwt_secret_key = 'this-is-secret-key-for-generating-token'

export default async(userId:any)=>{
    try {
        const token = await jwt.sign(userId,jwt_secret_key,{})
        return token
    } catch (error:any) {
        console.log(error)
        throw Object.assign(new Error('something went wrong while generating token'),{cause : 500})
    }
}