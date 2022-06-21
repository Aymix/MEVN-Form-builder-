const deletePage = (Page, _id, res) => {
  Page.findByIdAndDelete(_id, (err, page) => {
    if (err || !page) {
      res.status(404).send({ message: 'Record not found' })
    } else {
      res.status(200).send({ page: page })
    }
  })
}

module.exports = deletePage