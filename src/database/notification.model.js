const { Schema } = require('mongoose')

module.exports = function (mongoose) {
    return mongoose.model(
        'notification',
        new Schema(
            {
                recipient: {
                    type: Schema.Types.String,
                    required: true,
                },
                document: {
                    type: Schema.Types.String,
                    required: true,
                },
                event: {
                    type: Schema.Types.String,
                    required: true,
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