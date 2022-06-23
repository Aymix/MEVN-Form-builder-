const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Submission = mongoose.model(
    'Submission',
    new mongoose.Schema({

        form: {
            type: Object,
            required: true
        },
        CreatedAt: { type: Date, default: Date.now },
        page: {
            type: Schema.Types.ObjectId,
            ref: 'Page'
        },


    })
)

module.exports = Submission
