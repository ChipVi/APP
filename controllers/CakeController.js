const cakeModel = require('../models/course.js');

class CakeController{
    // [GET]/read/:id
    renderCakeDetails(req,res){
       cakeModel.findOne({_id: req.params._id}).lean()
        .then(cakes => {
            if (cakes)  res.render('detailpage',{cakes});
            else res.send('null');

        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
    }
   
}
module.exports = new CakeController();