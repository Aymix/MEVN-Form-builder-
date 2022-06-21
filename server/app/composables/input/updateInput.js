const updatePage = (Page, _id, body, res) => {
  Page.findByIdAndUpdate(_id, body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update page with id=${_id}. Maybe page was not found!`
        })
      } else {
        res.status(200).send({
          message: 'Page was updated successfully!'
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating user with id=' + _id
      })
    })
}

module.exports = updatePage
