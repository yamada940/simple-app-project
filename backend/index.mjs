import express from "express";
import http from 'http';

const app = express();

app.get('/hello',(req,res)=>{
  // res.send("hello server");
  const resobject = {name:"kodama"};
  res.send(resobject);
});

const webServer = http.createServer(app);
webServer.listen(3000,()=>{
  console.log("server running PORT:"+3000);
});