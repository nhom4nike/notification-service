/** business logic for read operations */
class NotificationFactory {
    /** @param {import('mongoose').Model} model */
    constructor(model) {
        this.model = model
    }

    async get(id) {
        const notification = await this.model.findById(id).lean()
        if (!notification) throw errors.create('notification', 'not-found', id)
        return notification
    }

    async findByNotificationId(notificationId) {
        return (await this.model.find({ notificationId })) || null
    }
}

module.exports = NotificationFactory