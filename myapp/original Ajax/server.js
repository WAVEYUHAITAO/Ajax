//1.引入express
const express = require('express')

//2.创建应用对象
const app = express();

//3.创建路由规则
app.get('/server', (req, resp) => {

    //设置响应头 设置允许跨越
    resp.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    resp.send('HELLO AJAX GET');
});
//all表示允许所有的路由规则
app.all('/server', (req, resp) => {

    //设置响应头 设置允许跨越
    resp.setHeader('Access-Control-Allow-Origin', '*')
    //允许所有的头
    resp.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    resp.send('HELLO AJAX POST');
});
app.all('/json-server', (req, resp) => {

    //设置响应头 设置允许跨越
    resp.setHeader('Access-Control-Allow-Origin', '*')
    //允许所有的头
    resp.setHeader('Access-Control-Allow-Headers', '*')
    //响应一个数据
    const data = {
        name: 'json data'
    }
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    resp.send(str);
});

//针对IE缓存
app.get('/ie', (req, resp) => {
    //设置响应头 设置允许跨越
    resp.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    resp.send('HELLO AJAX IE2');
});

//延时响应
app.all('/delay', (req, resp) => {
    //设置响应头 设置允许跨越
    resp.setHeader('Access-Control-Allow-Origin', '*')
    resp.setHeader('Access-Control-Allow-Headers', '*')
    setTimeout(() => {
        //设置响应体
        resp.send('延时响应');
    }, 3000)
});
//jQuery服务
app.all('/jQuery-server', (req, resp) => {
    //设置响应头 设置允许跨越
    resp.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    const data = {name:'hito'};
    //resp.send('Hello jQuery AJAX');
    resp.send(JSON.stringify(data));
});

//axios服务
app.all('/axios-server', (req, resp) => {
    //设置响应头 设置允许跨越
    resp.setHeader('Access-Control-Allow-Origin', '*')
    resp.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    const data = {name:'hito'};
    //resp.send('Hello jQuery AJAX');
    resp.send(JSON.stringify(data));
});
//fetch服务
app.all('/fetch-server', (req, resp) => {
    //设置响应头 设置允许跨越
    resp.setHeader('Access-Control-Allow-Origin', '*')
    resp.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    const data = {name:'hito'};
    //resp.send('Hello jQuery AJAX');
    resp.send(JSON.stringify(data));
});

//jsonp服务
app.all('/jsonp-server',(req,resp)=>{
    //resp.send("console.log('hello jsonp-server')");
    const data = {
        name:'尚硅谷atguigu'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    //end不会加特殊响应头
    //resp.end(`handle(${str})`)
    resp.end(`handle(${str})`);
});
//用户名检测是否存在
app.all('/check-username',(req,resp)=>{
    //resp.send("console.log('hello jsonp-server')");
    const data = {
        exist:1,
        msg:'用户名已存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    //end不会加特殊响应头
    //resp.end(`handle(${str})`)
    resp.end(`handle(${str})`);
});

// jQuery-jsonp-server
app.all('/jQuery-jsonp-server',(req,resp)=>{
    //resp.send("console.log('hello jsonp-server')");
    const data = {
        name:'尚硅谷',
        city:['北京','上海','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = req.query.callback;
    //返回结果
    //end不会加特殊响应头
    //resp.end(`handle(${str})`)
    resp.end(`${cb}(${str})`);
});

// cors-server
app.all('/cors-server',(req,resp)=>{
    //设置响应头
    //跨域
    resp.setHeader('Access-Control-Allow-Origin','*');
    //
    resp.setHeader('Access-Control-Allow-Headers','*');
    resp.setHeader('Access-Control-Allow-Method','*');
    resp.send(`hello cors`);
});
//4.监听端口服务启动
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中...")
});