const { Schema } = require('mongoose')

module.exports = function (mongoose) {
    return mongoose.model(
        'notification',
        new Schema(
            {
                toUser: {
                    type: Schema.Types.String,
                    required: true,
                },
                content: {
                    type: Schema.Types.String,
                }
            },
            {
                timestamps: {
                    createdAt: 'created_at',
                    updatedAt: 'updated_at'
                }
            }
        )
    )
}