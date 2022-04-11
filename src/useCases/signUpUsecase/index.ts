import makeId from "../../modules/makeId"
import validateUser from "../../entities/user"
import userFunctions from "../../dbLogic"
import hashPassword from "../../modules/bcrypt/hashPassword"
import { checkUsernameUniqueness } from ".."
const user = new userFunctions

export default async (information:any)=>{
    try {
        information.id = await makeId()
        const validatedUser = await validateUser(information) 
        validatedUser.password = await hashPassword(validatedUser.password)
        // const usernameAlreadyExist = await user.getByUsername(validatedUser.username)
        await checkUsernameUniqueness(validatedUser.username)
        const newUser = await user.create(validatedUser)
        await user.saveUser(newUser)
        // these last 2 functions almost do the same thing but just for having 'creating' & 'storing' seperated, they have been wrote like this
        console.log(newUser)
        return{
            statusCode : 200,
            body : {
                msg : 'user added successfully'
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

// async function checkUsernameUniqueness(username:string){
//     const usernameAlreadyExist = await user.getByUsername(username)
//     if(usernameAlreadyExist){
//         throw new Error('this username has been taken')
//     }
// }