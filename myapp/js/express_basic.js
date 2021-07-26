//1.引入express
const express = require('express')

//2.创建应用对象
const app = express();

//3.创建路由规则
app.get('/',(req,resp)=>{
    resp.send('HELLO EXPRESS');
});

//4.监听端口服务启动
app.listen(8000,()=>{
    console.log("服务已经启动，8000端口监听中...")
});