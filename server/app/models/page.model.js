const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Page = mongoose.model(
    'Page',
    new mongoose.Schema({

        title: {type:String,unique: true, required:true},
        url: {type:String, required: true},
        description: {type: String, required: true},
        CreatedAt: { type: Date, default: Date.now },
        input: { 
            type: Schema.Types.ObjectId, 
            ref: 'Input' 
        },
    })
)


module.exports = Page
