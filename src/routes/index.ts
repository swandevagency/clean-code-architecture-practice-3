//importing framework

import express from 'express'
import expressCallback from '../expressCallback'
import signUpController from '../controllers/signUpController'
import loginController from '../controllers/loginController'
const webApplicationFramework = express


//somehow setting framework router to our const router
const router = webApplicationFramework.Router()
router.post('/signup',expressCallback(signUpController))
router.post('/login',expressCallback(loginController))


export {
    router
}