// HOME CONTROLLER RENDER HOME VIEW

const cakeModel = require("../models/course.js") 

class HomeController{
    renderhomeview(req, res){
        cakeModel.find().lean()
        // lean: to convert mongoose documents into JS objects
        .then(cake => {
            res.render('home',{cake}); //=> pass cake parameters into home view, to make it like a var named: cake???
       
        })
        .catch(err => {
            console.error('Error finding cake:', err);
        });
    };
}

module.exports = new HomeController();