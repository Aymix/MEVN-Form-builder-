const Page = require('../models/page.model.js')
const Form = require('../models/form.model.js')
const getForm = require('../composables/form/getForm.js')
const deleteForm = require('../composables/form/deleteForm.js')
const updateForm = require('../composables/form/updateForm.js')

const getIdFromParams = require('../composables/getIdFromParams.js')

exports.forms = (req, res) => {

    Form.find({}, function(err, forms) {
        res.status(200).send({ forms: forms });
    });

}

exports.formSave = (req,res)=>{
        
        Form.create(req.body)
        .then(function(form) {
            res.json(form);
           
        })
        
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });

    }



exports.formGet = (req, res) => {

    Form.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
    .populate("pages")
    .then(function(form) {
      // If we were able to successfully find an Product with the given id, send it back to the client
      res.json(form);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });

  };

exports.formDelete = (req, res) => {

  deleteForm(Form, getIdFromParams(req), res)


}

exports.formUpdate = (req, res) => {
  
    updateForm(Form, getIdFromParams(req), req.body, res)
  
}

