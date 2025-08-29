const exp = require("express");

const app = exp();

// app.use((req,res,next)=>{
//     // res.send("midware fin!")
//     console.log("wow");
    
//     next();
//     console.log("no code here!!");
    
// })




// http://localhost:8080/api?token=giveaccess
app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token==="giveaccess"){

        next()
    }
    res.send("middleware fin acees byee!")
    // console.log("after wow");
    
})

app.get("/api",(req,resp)=>{
    resp.send("data")
})
const PORT = 8080
app.listen(PORT,()=>{
console.log("Server at - "+`http://localhost:${PORT}`)
})