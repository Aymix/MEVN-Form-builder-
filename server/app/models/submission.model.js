const mongoose = require('mongoose')

const Submission = mongoose.model(
    'Submission',
    new mongoose.Schema({

        form: {
            type: Object,
            required: true
        },


    })
)

module.exports = Submission
