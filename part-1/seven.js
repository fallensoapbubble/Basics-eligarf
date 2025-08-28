//a part 
let r = new Promise((resolve) => { 

    resolve("Completed"); 

  }) 

r
.then(res=>console.log(res))
.catch(err=>console.log(err))


//b part
function sayHello() { 

    let promise = new Promise((resolve, reject) => { 

    setTimeout(()=>reject("An error has occurred"), 1000); 

  }); 

    return promise; 

} 

sayHello()
.then((res)=>{
  console.log("success");
  
})
.catch((err)=>{
  console.log("failed");
  
})

async function funcCall (){
  try{
    var res = await sayHello()
  }catch(err){
    console.log("fail again");
    
  }
  
}
funcCall()



function sayHelloWrong() { 
  return new Promise((resolve, reject) => { 
    // This calls reject *right now*, not after 1 sec
    setTimeout(reject("An error has occurred"), 1000); 
  });
}

sayHelloWrong()
  .then(res => console.log("success (wrong version)"))
  .catch(err => console.log("failed (wrong version):", err));


function sayHelloCorrect() { 
  return new Promise((resolve, reject) => { 
    // This gives setTimeout a *function* to call later
    setTimeout(() => reject("An error has occurred"), 1000); 
  });
}

sayHelloCorrect()
  .then(res => console.log("success (correct version)"))
  .catch(err => console.log("failed (correct version):", err));

