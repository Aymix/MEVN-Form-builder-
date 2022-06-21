const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Form = mongoose.model(
    'Form',
    new mongoose.Schema({

        name: String,
        schema: String,       
        CreatedAt: { type: Date, default: Date.now },

        pages: [{ 
            type: Schema.Types.ObjectId, 
            ref: 'Page' 
        }],
    })
)


module.exports = Form
