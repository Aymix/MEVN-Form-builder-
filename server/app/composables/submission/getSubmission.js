const getSubmission = (Submission, _id, res) => {
  Submission.findById(_id, (err, Submission) => {
    if (err || !Submission) {
      res.status(404).send({ message: 'no Submission with this is' })
    } else {
      res.status(200).send({
        _id: Submission._id,
        title: Submission.title,
        url: Submission.url,
        description: Submission.description,
        
      })
    }
  })
}

module.exports = getSubmission
