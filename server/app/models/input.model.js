const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Input = mongoose.model(
    'Input',
    new mongoose.Schema({

        name: {type:String,required:true},
        cshema: { type : Array ,required: true, "default": undefined },
        CreatedAt: { type: Date, default: Date.now },

        pages: [{ 
            type: Schema.Types.ObjectId, 
            ref: 'Page' ,
            required:true
        }],
    })
)


module.exports = Input
