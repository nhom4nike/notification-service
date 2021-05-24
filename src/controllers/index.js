const NotificationModel = require('../database/notification.model')(global.mongoose)
const CQRS = require('../cqrs')

const cqrs = new CQRS({ notification: NotificationModel })

module.exports = {
  notification: require('./notification.controller')(cqrs)
}