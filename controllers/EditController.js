const cakeModel = require('../models/course.js');
const { ObjectId } = require('mongodb');
class EditController{
    show(req,res){
        // res.send('edit');
        cakeModel.findOne({_id: req.params._id}).lean()
        .then(cakes => {
            if (cakes)  res.render('editform',{cakes});
            else res.send('null page');
        })
        .catch(err => {
            res.send('404 ERROR');
        })
    }

    save(req, res){
        // when we receive data from form, the data is saved in req.body, not req.params
                    cakeModel.updateOne({_id: req.body.id}, 
                                        {name: req.body.name,
                                        ingre: req.body.ingre,
                                        steps: req.body.steps,
                                        img: req.body.img,
                                        taste: req.body.taste,
                                        slug: req.body.slug
                                        })
                    .then(result => console.log('Cake updated:', result))
                    .catch(err => console.error('Error updating cake:', err));
                
                // const link= '/read/' + req.body._id;

                // res.send('update successfully');
                // res.redirect('back');
                // res.status(204).send();
                res.json({ success: true });
                

    }
}

module.exports = new EditController();