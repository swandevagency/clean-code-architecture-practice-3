export default (controller:any)=>{
    return(req:any,res:any)=>{
        const httpRequest = {
            headers : req.headers,
            body : req.body,
            params : req.params,
            query : req.query,
            ip : req.ip,
            method : req.method,
            path : req.path
        }
        controller(httpRequest)
        .then((httpResponse:any)=>{
            if(httpResponse.headers){
                res.set(httpResponse.headers)
            }
            res.status(httpResponse.statusCode).send(httpResponse.body)
            return
        }).catch((error:any) =>{
            console.log(error)
            res.status(500).send({
                msg : 'an unknown error acquired'
            })
        })
    }
}