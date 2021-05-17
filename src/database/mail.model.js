const { Schema } = require('mongoose')
const validator = require('validator').default

module.exports = function (mongoose) {
    return mongoose.model(
        'mail',
        new Schema(
            {
                toEmail: {
                    type: Schema.Types.String,
                    required: true,
                    validate: {
                        validator: (s) => validator.isEmail(s),
                        message: 'invalid receiving email format'
                    }
                },
                content: {
                    type: Schema.Types.String,
                    required: true
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