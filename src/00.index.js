/**
 * @file
 * @author zhaorong (zhaorong01@baidu.com)
 * @date 2017/9/21
 */

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = 'hello koa2';
    console.log(11);
});

router.get('/tologin', async (ctx, next) => {
    ctx.body = {
        errno: 0,
        data: {
            showGradeUpdate: 1
        }
    };
});

// curl -X POST -H 'Cookie: BDUSS=aaa' -H 'X-ik-token: xxx'  http://localhost:8090/login
router.post('/login', async (ctx, next) => {
    console.log('------');
    ctx.body = 'login page';
});



app.use(router.routes())
    .use(router.allowedMethods())
    .listen(8090, 'localhost');