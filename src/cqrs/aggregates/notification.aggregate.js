class NotificationAggregate {
    /**
     * @param {import('../repositories/notification.repository')} repository
     */
    constructor(repository) {
        this.repository = repository
    }

    /**
     * @param {notification} notification
     */
    async _createNotification(notification) {
        return this.repository.createNotification(notification)
    }

    /**
     * @param {CommandNames} name the name of command
     * @param {Object} payload command's one or more arguments
     */
    async command(name, payload) {
        switch (name) {
            case 'createNotification':
                return this._createNotification(payload)
            default:
                throw new Error('unknown command: ' + name)
        }
    }
}
module.exports = NotificationAggregate