//importing framework

import express from 'express'
import expressCallback from '../expressCallback'
const webApplicationFramework = express

//somehow setting framework router to our const router
const router = webApplicationFramework.Router()
const adminRouter = webApplicationFramework.Router()
router.post('/signup',expressCallback('test'))


export {
    router,
    adminRouter
}