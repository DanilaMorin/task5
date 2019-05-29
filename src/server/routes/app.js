const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) => {
    ctx.response.redirect ('back', "frontend/app.html")
});

module.exports = router;