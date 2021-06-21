const nodemailer = require('nodemailer')
/** business logic for write operations */
class NotificationRepository {
    /**
     * @param {import('mongoose').Model} model mongoose auth model
     */
    constructor(model) {
        this.model = model
    }
}


module.exports = NotificationRepository