const { default: mongoose, model } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

// Schema is a mould to create new documents in mongo
const cake = new Schema({
  name: String,
  time: Number,
  taste: String,
  ingre: String,
  steps: String,
  img: String,
});

// model is interface to access to the db
const cakeModel = mongoose.model('CakeDB', cake );

// real name of the collection in db, and name of schema 
module.exports = cakeModel;

// /////////////FUNCTIONS IN MONGOOSE/////////////////////////////

// newCake.save()
//     .then(cake => console.log('Cake saved:', cake))
//     .catch(err => console.error('Error saving cake:', err));
// cakeModel.updateOne({ name: 'Chocolate Cake' }, { price: 25 })
//     .then(result => console.log('Cake updated:', result))
//     .catch(err => console.error('Error updating cake:', err));

// cakeModel.updateOne({ name: 'cheesecake' }, { name: 'update'})
//     .then(result => console.log('Cake updated:', result))
//     .catch(err => console.error('Error updating cake:', err));


// cakeModel.updateMany ({ name: 'bingsu'}, { name: 'hihi', ingredients:'egss'})
//     .then(result => console.log('Cake updated:', result))
//     .catch(err => console.error('Error updating cake:', err));
// cakeModel.findOne({ name: 'tay thi cake ' })
//     .then(cake => {
//         if (cake) {
//             console.log('Cake found:', cake);
//         } else {
//             console.log('No cake found with that name.');
//         }
//     })
//     .catch(err => {
//         console.error('Error finding cake:', err);
//     });

// cakeModel.findOneAndDelete({name: 'hihi4'})
//     .then(found => {
//         if (found) console.log('del successfully');
//         else console.log('No cake found with that name.');
//     })
//     .catch(err => {
//         console.error('Error finding cake:', err);
//     });

// cakeModel.findOne({name: 'tay thi cake eee'})
//         .then(cakes => {
//                 if (cakes)
//             // Nếu không có lỗi, trả về danh sách khóa học dưới dạng JSON
//                     res.json(cakes);
//                 else {
//                     res.send("find no cakes")
//                 }
//         })
//         .catch(err => {
//             // Nếu có lỗi, xử lý lỗi và trả về một trạng thái lỗi hoặc thông báo
//             console.error(err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         });
