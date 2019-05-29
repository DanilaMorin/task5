const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) => {
    ctx.response.redirect ('back', "fronted/app.html")
});

module.exports = router;