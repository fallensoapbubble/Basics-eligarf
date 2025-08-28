const url = "https://jsonplaceholder.typicode.com/users/2";

async function deleteUser() {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    if(response.ok){
        console.log("done!");
        
    }
    else{
        console.log("strange?");
        
    }
    }catch(err){
        console.log(err);
        
    }
}
deleteUser()