const express = require('express');

const app = express();

app.get('/home',(req,resp)=>{
    //响应一个页面
    resp.sendFile(__dirname+'/index.html');

});
app.get('/data',(req,resp)=>{
    resp.send('用户数据');
})
app.listen(9000,()=>{
    console.log('服务已经启动, 9000端口监听中');
})