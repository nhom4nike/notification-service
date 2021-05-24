const nodemailer = require('nodemailer')
/** business logic for write operations */
class NotificationRepository {
    /**
     * @param {import('mongoose').Model} model mongoose auth model
     */
    constructor(model) {
        this.model = model
    }

    sendMail(receiveEmail) {
        nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'doancnpmnhomnike@gmail.com',
                pass: '12345678zZ'
            }
        }).sendMail({
            from: 'doancnpmnhomnike@gmail.com',
            to: receiveEmail,
            subject: 'Notification',
            text: 'Test!'
        }, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}


module.exports = NotificationRepository