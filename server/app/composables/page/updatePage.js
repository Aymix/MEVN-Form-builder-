const updateInput = (Input, _id, body, res) => {
  Input.findByIdAndUpdate(_id, body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update input with id=${_id}. Maybe input was not found!`
        })
      } else {
        res.status(200).send({
          message: 'Input was updated successfully!'
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating user with id=' + _id
      })
    })
}

module.exports = updateInput
