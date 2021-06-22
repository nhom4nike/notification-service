const mailer = require('../utils/mailer')
const { convertEvent } = require('../utils/convert-event')

const notify = function (req, res) {
    const recipient = req.body.recipient
    const document = req.body.document
    const event = req.body.event

    if (!recipient || !document || !event) {
        res.status(400).json({ msg: 'Missing content' })
        return
    }

    const text = convertEvent(event)
    if (!text) {
        res.status(400).json({ msg: 'Missing content' })
        return
    }

    try {
        mailer.sendEmail(recipient, document, text)
        res.status(200).json({ msg: 'Notification sent' })
    } catch {
        res.status(400).json({ msg: 'Failed to send' })
    }
}

module.exports = {
    notify
}