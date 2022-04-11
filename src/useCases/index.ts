import userFunctions from "../dbLogic";

const user = new userFunctions

async function checkUsernameUniqueness(username:string){
    try {
        const usernameAlreadyExist = await user.getByUsername(username)
        if(usernameAlreadyExist){
            throw Object.assign(new Error('this username has been taken'),{cause:400})
        }
    } catch (error:any) {
        if(error.cause == 400){
            throw error
        }
        console.log(error)
        throw Object.assign(new Error('some thing went wrong while searching for username'),{cause : 500})
    }
}
// cause we must handle database interaction possible error (i mean if in the duration of seraching for username something went wrong) we have to use a try catch
// and bsc of that when a username exist, when we throw an error in try statement we have to specify that error and handle that defferently with db possible error
export {
    checkUsernameUniqueness
}