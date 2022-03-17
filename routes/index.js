const express = require('express');
const bookRouter = require('./book');

function routerApi(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    router.use('/books', bookRouter)
}


module.exports = routerApi;