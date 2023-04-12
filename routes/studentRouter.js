const express = require('express')
const router = express.Router()
const studentController = require('../controller/student')
router.post('/student', studentController.studentEnrollment)