const getForm = (Form, _id, res) => {
  Form.findById(_id, (err, form) => {
    if (err || !form) {
      res.status(404).send({ message: 'no form with this is' })
    } else {
      res.status(200).send({
        _id: form._id,
        name: form.name,
        schema: form.schema,
        
      })
    }
  })
}

module.exports = getForm
