const serve = require('koa-static');
const Koa = require('koa');
const indexRoutes = require('./routes/app');
const users = require('./routes/users');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const PORT = process.env.PORT || 1337;


app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(movieRoutes.routes());
app.use(users.routes());
app.use(serve(__dirname));

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;


