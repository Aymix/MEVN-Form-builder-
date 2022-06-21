const Submission = require('../models/submission.model.js')
const getSubmission = require('../composables/submission/getSubmission.js')
const deleteSubmission = require('../composables/submission/deleteSubmission.js')

const getIdFromParams = require('../composables/getIdFromParams.js')


exports.submissions = (req, res) => {

    Submission.find({}, function(err, submissions) {
        res.status(200).send({ submissions: submissions });
    });

}



    exports.submissionSave = (req, res) => {

    Submission.create(req.body)
        .then(function(submission) {
            res.json(submission);
           
        })
        
        .catch(function(err) {
           
                res.status(401).send({  message: err  })
            
            
})
}

exports.submissionGet = (req, res) => {

    Submission.findOne({ _id: req.params.id })
  
    .then(function(submission) {
      
      res.json(submission);
    })
    .catch(function(err) {
    
      res.json(err);
    });
}

exports.submissionDelete = (req, res) => {

    deleteSubmission(Submission, getIdFromParams(req), res)


}
