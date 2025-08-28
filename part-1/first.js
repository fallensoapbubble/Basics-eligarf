const str = 'https://jsonplaceholder.typicode.com/posts';

fetch(str)
.then((resp)=>{
    console.log(resp) //promise
    return resp.json()
})
.then((data)=>{
        console.log(data) //the array
        var x = data.find((elem)=>elem.userId==5)
        console.log(x)//2nd ques
    })

.catch((err)=>{
    console.log("FAILED-\n",err) //handling displaying error
});