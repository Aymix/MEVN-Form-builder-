const Page = require('../models/page.model.js')
const Form = require('../models/form.model.js')
const Input = require('../models/input.model.js')

const getPage = require('../composables/page/getPage.js')
const deletePage = require('../composables/page/deletePage.js')
const updatePage = require('../composables/page/updatePage.js')

const getIdFromParams = require('../composables/getIdFromParams.js')


exports.pages = (req, res) => {

    Page.find({}, function(err, pages) {
        res.status(200).send({ pages: pages });
    });

}

exports.pageSave = (req, res) => {

    Page.create(req.body)
        .then(function(page) {
           

           return Page.findOneAndUpdate({ _id: page._id }, { $set: { input: req.params.id } }, { new: true, useFindAndModify: false })
           })

           .then(function(pg) {  
            res.status(200).send({page:pg, message:'Page created successfuly'});

            return Input.findOneAndUpdate({ _id: req.params.id }, { $push: { pages: pg._id } }, { new: true, useFindAndModify: false });

        
        })
        
        .catch(function(err) {
            if (err.code == 11000) {
                return res.status(401).json({ message: 'duplicated urls not allowed' })
            }
            else if(!req.params.id){
                return res.status(401).json({ message: 'associate a form' })
            }

            else{
                return res.status(401).json({ message: 'Something went wrong try again !' })

            }
            
        });
}

exports.pageGet = (req, res) => {

     Page.findOne({ _id: req.params.id })
    // ..and populate all of the notes associated with it
    .populate("input")
    .then(function(page) {
      // If we were able to successfully find an Product with the given id, send it back to the client
      res.json(page);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });

}

exports.pageDelete = (req, res) => {

    deletePage(Page, getIdFromParams(req), res)


}

exports.pageUpdate = (req, res) => {

    updateProfile(Page, getIdFromParams(req), req.body, res)

}
