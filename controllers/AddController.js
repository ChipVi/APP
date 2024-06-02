// HOME CONTROLLER RENDER HOME VIEW

const cakeModel = require("../models/course.js") 

class AddController{
    renderaddview(req,res){
        res.render('addform');
    }

    save(req, res){
        // res.send(req.body.cakename);
        const newcake = new cakeModel(req.body);
        newcake.save();
        res.redirect('/');
        // them thong bao thanh cong
        
    }

}
module.exports = new AddController();
