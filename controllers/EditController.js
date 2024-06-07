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
        const id = req.body.id;
                    cakeModel.updateOne({_id: req.body.id}, 
                                        {name: req.body.name,
                                        time: req.body.time,
                                        taste: req.body.taste,
                                        ingre: req.body.ingre,
                                        steps: req.body.steps,
                                        img: req.body.img,
                                        })
                    .then(result => {
                        console.log('Cake updated:', id);
                        res.render('save', {ido: id});
                        // res.redirect('/read/' + id);
                        // res.json({ok: true});
                    })
                    .catch(err => {
                        console.error('Error updating cake:', err);
                        res.send('404 ERROR');
                    });
                
    }
}

module.exports = new EditController();