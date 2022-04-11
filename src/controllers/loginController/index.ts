import loginUseCase from '../../useCases/loginUseCase'


export default async (httpRequest:any) => {
    // console.log(httpRequest)
    try {
        const {username,password} = httpRequest.body
        const httpResponse:any = await loginUseCase({username,password})
        return {
            statusCode : httpResponse.statusCode,
            body : httpResponse.body
        }
    } catch (error) {
        console.log(error)
    }
}