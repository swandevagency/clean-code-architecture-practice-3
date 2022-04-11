import bcrypt from 'bcrypt'

export default async function comparePassword (password:any,hashedPassword:any){
    try {
        const passwordIsValid = await bcrypt.compare(password,hashedPassword)
        if(!passwordIsValid){
            throw Object.assign(new Error('invalid credentials'),{cause : 400})
        }
    } catch (error:any) {
        console.log(error)
        if(error.cause == 400){
            throw error
        }
        throw Object.assign(new Error('an error acquired while comparing passwords'),{cause:500})
    }
}