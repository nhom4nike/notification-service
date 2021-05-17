const express = require('express')
const { body, validationResult } = require('express-validator') 
const KafkaService = require('../infra/kafka/index')
const controller = require('../controllers/notification.controller')
require('dotenv').config()

const kafkaService = KafkaService.getInstance(process.env.SERVICE_NAME, [
  process.env.KAFKA_HOST
])

const router = express.Router()






module.exports = { endpoint: '/', router }