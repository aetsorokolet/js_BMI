const express=require('express');
const bodyParser= require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){
    
response.sendFile(__dirname+ '/index.html');
});
app.post('/', function(request, response){
console.log(request.body);
let W=Number(request.body.W);
let H=Number(request.body.H);
let result0=W/(H*H);
let result=result0.toFixed(2);
//console.log(`${W}/${H}=${result}`);
//response.send(`${W}/${H}=${result}`);
if(result < 16){
    response.send("Olete ohtlikult alakaaluline!");
   }else if(result <= 18.5){
    response.send("Olete alakaaluline!");
   }else if(result <= 25){
    response.send("Olete normaalkaalus!");
   }else if(result <= 30){
    response.send("Olete ülekaaluline!");
   }else if(result <= 35){
    response.send("Olete rasvunud!");
   }else if(result <= 40){
    response.send("Olete tugevalt rasvunud!");
   }else{response.send("Olete eluohtlikult rasvunud!");}



});


app.listen(3000, function(){
    console.log('Server is running on Port 3000');
});