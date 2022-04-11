import bcrypt from 'bcrypt'

export default async function hashPassword (password:string){
    try {
        const hashedPassword = await bcrypt.hash(password,10)
        return hashedPassword
    } catch (error) {
        console.log(error)
        throw Object.assign(new Error('an error acquired while hashing password'),{cause:500})
    }
}