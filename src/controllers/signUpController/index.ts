import signUpUsecase from "../../useCases/signUpUsecase"

export default async (httpRequest:any)=>{
    try {
        // i guess if we need some converting we had to do it here and we could those errors here in catch
        const {username,password} = httpRequest.body
        const httpResponse:any = await signUpUsecase({username,password})
        return {
            statusCode : httpResponse.statusCode,
            body : httpResponse.body
        }
    } catch (error) {
        console.log(error)
        //must handle different types of errors
    }
}