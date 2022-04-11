//importing framework

import express from 'express'
import expressCallback from '../expressCallback'
import signUpController from '../controllers/signUpController'
const webApplicationFramework = express


//somehow setting framework router to our const router
const router = webApplicationFramework.Router()
router.post('/signup',expressCallback(signUpController))


export {
    router
}