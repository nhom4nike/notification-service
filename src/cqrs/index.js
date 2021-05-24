const { NotificationAggregate } = require('../cqrs/aggregates')
const { NotificationFactory } = require('../cqrs/factories')
const { NotificationProjection } = require('../cqrs/projections')
const { NotificationRepository } = require('../cqrs/repositories')

class CQRS {
  /**
   * @typedef {import('mongoose').Model} Model
   * @param {Object} models mongoose's models
   * @param {Model} models.notification
   */
  constructor({ notification }) {
    this.notification = {
      projection: new NotificationProjection(new NotificationFactory(notification)),
      aggregate: new NotificationAggregate(new NotificationRepository(notification))
    }
  }
}
module.exports = CQRS