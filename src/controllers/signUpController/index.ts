import signUpUsecase from "../../useCases/signUpUsecase"

export default async (httpRequest:any)=>{
    try {
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