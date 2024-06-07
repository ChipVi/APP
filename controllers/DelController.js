const cakeModel = require("../models/course.js") 

const { ObjectId } = require('mongodb');

class DelController{
    
    del(req, res){
        const objectId = new ObjectId(req.params._id);
        
        // cakeModel.deleteOne({_id: objectId})
        cakeModel.findByIdAndDelete(req.params._id)
        .then(found => {
            if (found) {
                console.log(found);
                // res.redirect('/');
                res.render('del', {found});
            }
            else {
                res.render('alreadydel');
            };
        })
        .catch(err => {
            console.error(err);
        });
    }

}
module.exports = new DelController();
