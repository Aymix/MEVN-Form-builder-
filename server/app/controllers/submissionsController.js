const Submission = require('../models/submission.model.js')
const getSubmission = require('../composables/submission/getSubmission.js')
const deleteSubmission = require('../composables/submission/deleteSubmission.js')

const getIdFromParams = require('../composables/getIdFromParams.js')

const aqp = require('api-query-params')



exports.submissions = (req, res) => {

    Submission.find({}, function(err, submissions) {
        res.status(200).send({ submissions: submissions });
    }).populate("page",'title');

}


exports.submissionSave = (req, res) => {

    Submission.create(req.body)
        .then(function(submission) {

            Submission.findOneAndUpdate({ _id: submission._id }, { $set: { page: req.params.id } }, { new: true, useFindAndModify: false }).populate("page",'title')

                .then(function(submission) {

                    res.json(submission);
                })


        })

        .catch(function(err) {

            res.status(401).send({ message: err })


        })
}

exports.submissionGet = (req, res) => {

    Submission.findOne({ url: req.params.url })

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

exports.submissionsFilter = (req, res) => {
    const { filter, skip, limit, sort, projection, population } = aqp(req.query);
    Submission.find(filter)
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .select(projection)
        .populate(population)
        .exec((err, submissions) => {
            if (err) {
                return next(err);
            }

            res.send(submissions);
        });
}
