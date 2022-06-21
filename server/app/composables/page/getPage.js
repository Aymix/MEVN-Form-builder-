const getInput = (Input, _id, res) => {
  Input.findById(_id, (err, input) => {
    if (err || !input) {
      res.status(404).send({ message: 'no input with this is' })
    } else {
      res.status(200).send({
        _id: input._id,
        name: input.name,
        cshema: input.cshema,
        
      })
    }
  })
}

module.exports = getInput
