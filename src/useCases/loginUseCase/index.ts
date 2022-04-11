import userFunctions from "../../dbLogic"
const User = new userFunctions
// import { validateLoginCredentials } from ".."
import { validateUsername } from ".."
import { validatePassword } from ".."
import comparePassword from "../../modules/bcrypt/comparePasswrod"
import generateToken from "../../modules/jwt/generateToken"

export default async (information:any) => {
    try {
        const {username, password} = information
        // await validateLoginCredentials(username,password)
        const validUser:any = await validateUsername(username)
        await validatePassword(password)
        // const hashedPassword = validUser
        await comparePassword(password,validUser.password)
        const token = await generateToken(validUser.id)
        return {
            statusCode : 200,
            body : {
                msg : 'successfull login',
                token
            }
        }        
    } catch (error:any) {
        if(error.cause == 500){
            return {
                statusCode : 500,
                body : {
                    msg : 'an internal error acquired'
                }
            }
        }
        return {
            statusCode : 400,
            body : {
                msg : error.message
            }
        }
    }
}