const express = require('express');
const http = require('http')
const app = express();


const PORT = process.env.PORT || 3000;


const requestserver = (req, res) => {
    res.write("Server listening");
    res.end();
}
const server = http.createServer(requestserver);


server.listen(PORT, ()=>{
    console.log("server is running");
})


