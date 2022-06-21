const getPage = (Page, _id, res) => {
  Page.findById(_id, (err, page) => {
    if (err || !page) {
      res.status(404).send({ message: 'no page with this is' })
    } else {
      res.status(200).send({
        _id: page._id,
        title: page.title,
        url: page.url,
        description: page.description,
        
      })
    }
  })
}

module.exports = getPage
