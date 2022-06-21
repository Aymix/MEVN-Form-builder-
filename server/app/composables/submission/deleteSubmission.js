const deleteSubmission = (Submission, _id, res) => {
  Submission.findByIdAndDelete(_id, (err, submission) => {
    if (err || !submission) {
      res.status(404).send({ message: 'Record not found' })
    } else {
      res.status(200).send({ submission: submission })
    }
  })
}

module.exports = deleteSubmission