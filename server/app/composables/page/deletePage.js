const deleteInput = (Input, _id, res) => {
  Input.findByIdAndDelete(_id, (err, input) => {
    if (err || !input) {
      res.status(404).send({ message: 'Record not found' })
    } else {
      res.status(200).send({ input: input })
    }
  })
}

module.exports = deleteInput