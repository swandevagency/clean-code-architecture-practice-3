import mongoose from "mongoose";
require('../../models/index')

export default class userFunctions {
    async create(newUser:any){
        console.log(newUser)
        try {
            const {username,password,id} = newUser
            const User = mongoose.model('User')
            const user = new User({
                username,
                password,
                id
        })
        user
        return user
        } catch (error) {
            console.log(error)
            throw Object.assign(new Error('something went wrong while creating a new user dbLogic/index/create'),{cause : 500})
        }
    }
    async saveUser(user:any){
        try {
            const User =  mongoose.model('User')
            const {_id,username,password,id} = user
            const newUser =  new User({
                _id,
                username,
                password,
                id
            })
            newUser.save()
        } catch (error) {
            console.log(error)
            throw Object.assign(new Error('something went wrong while storing a new record dbLogic/index/create'),{cause : 500})
        }
    }
    async getByUsername(username:string){
        try {
            const user = await mongoose.model('User').findOne({username})
            return user
        } catch (error) {
            console.log(error)
            throw Object.assign(new Error('something went wrong while finding user by username'),{cause : 500})
        }
    }
}