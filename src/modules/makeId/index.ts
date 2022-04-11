import crypto from 'crypto'

async function makeId(){
    try {
        const id = await crypto.randomBytes(12).toString("hex")
    return id
    } catch (error) {
        console.log(error)
        throw Object.assign(new Error('an error acquired while generateing id modules/makeid/index'),{cause : 500})
    }
}

export default makeId
