const updateForm = (Form, _id, body, res) => {
  Form.findByIdAndUpdate(_id, body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Form with id=${_id}. Maybe Form was not found!`
        })
      } else {
        res.status(200).send({
          message: 'Form was updated successfully!'
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating user with id=' + _id
      })
    })
}

module.exports = updateForm
