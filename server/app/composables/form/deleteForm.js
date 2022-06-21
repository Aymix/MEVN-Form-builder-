const deleteForm = (Form, _id, res) => {
  Form.findByIdAndDelete(_id, (err, form) => {
    if (err || !form) {
      res.status(404).send({ message: 'Record not found' })
    } else {
      res.status(200).send({ form: form })
    }
  })
}

module.exports = deleteForm