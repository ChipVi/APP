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
            }
            else console.log('No cake found with that name.');
        })
        .catch(err => {
            console.error(err);
        });
        // res.redirect('back');
       

    // Send a response
            // res.send(`ID: ${id}`);
    }

}
module.exports = new DelController();
