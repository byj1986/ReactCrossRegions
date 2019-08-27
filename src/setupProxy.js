const proxy = require('http-proxy-middleware');

module.exports = function (app) {

    app.use(proxy('/todos', { target: 'https://jsonplaceholder.typicode.com/', changeOrigin: true, }));
    app.use(proxy('/api', { target: 'http://dummy.restapiexample.com/', changeOrigin: true, }));
    // app.listen(3000);
};