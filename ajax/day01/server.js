//引入express
const express = require('express');

//创建应用对象
const app = express();

//创建路由规则
app.get('/server',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin", "*")
    //设置响应
    response.send('HELLO EXPRESS');
});

app.post('/server',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*")
    response.send('success - 2')
});

app.all('/json-server',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*")
    response.setHeader("Access-Control-Allow-Header","*")
    const data = {
        id: 1,
        name: "jack",
        age: 7
    }
    let s = JSON.stringify(data);
    response.send(s)
});

app.get('/ie',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*")
    response.send('ie缓存')
});

app.get('/delay',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*")
    setTimeout(()=>{
        response.send('延时发送')
    },3000);
});

app.all('/jquery',(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*")
    const obj = {
        id: 1,
        name: "jack",
        age: 19
    }
    response.send(JSON.stringify(obj));
});

//监听端口 启动服务
app.listen(8000,()=>{
    console.log("服务已启动 8000端口监听中")
})
