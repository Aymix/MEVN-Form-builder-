const Input = require('../models/input.model.js')


const getInput = require('../composables/input/getInput.js')
const deleteInput = require('../composables/input/deleteInput.js')
const updateInput = require('../composables/input/updateInput.js')

const getIdFromParams = require('../composables/getIdFromParams.js')


exports.inputs = (req, res) => {

    Input.find({}, function(err, inputs) {
        res.status(200).send({ inputs: inputs });
    });

}

exports.inputSave = (req, res) => {

    Input.create(req.body)
        .then(function(input) {
            res.json(input);
           
        })
        
        .catch(function(err) {
            if (err.code == 11000) {
                res.status(401).send({  message: 'Something went wrong try again !'  })
            }
            
})
}

exports.inputGet = (req, res) => {

    Input.findOne({ _id: req.params.id })
    .populate("pages")
    .then(function(input) {
      res.json(input);
    })
    .catch(function(err) {
      res.json(err);
    });

}

exports.inputDelete = (req, res) => {

    deleteInput(Input, getIdFromParams(req), res)


}

exports.inputUpdate = (req, res) => {

    updateProfile(Input, getIdFromParams(req), req.body, res)

}
