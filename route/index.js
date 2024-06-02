const home = require('./homeRouter.js');
const readRouter = require ('./readRouter.js');
const editRouter = require ('./editRouter.js');
// const delRouter =  require ('./delRouter.js');
function route(app){

    app.use('/', home);
    app.use('/read', readRouter);
    app.use('/edit', editRouter);
    // app.use('/del', delRouter);
    // neu duong dan la read, thi keu bien readRouter
}


module.exports = route;