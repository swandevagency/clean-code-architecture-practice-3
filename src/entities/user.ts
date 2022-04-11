export default async function validateUser (information:any){
    const {username,password,id}:any = information

    if(!username || username.length < 3){
        throw new Error('username must be provided and at least must have 3 charecters')
    }
    if(!password || password.length < 5){
        throw new Error('password must be provided and at least must be 5 charecters')
    }
    if(!id || id.length != 24){
        // throw new ReferenceError('a 12 charecter id must be generatd for user')
        throw Object.assign(new Error('create id'),{cause:500})
    }
    return information
}