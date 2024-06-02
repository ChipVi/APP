const mongoose = require ('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/web_app', {
           
        });

        console.log('\nConnect to DB successFULLY');
    } catch (error) {
        console.log('connect to DB FAIL');
    }
}
module.exports = { connect };

// connect to MongoDB