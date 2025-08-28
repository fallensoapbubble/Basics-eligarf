const str = "https://jsonplaceholder.typicode.com/users";

const udata = {
  name: "Imeuswe App",
  email: "imeuswe@example.com",
};
async function insertData(obj) {
  try {
    var output =await fetch(str, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    var y = await output.json();
    console.log(y);
    console.log("done");
    
    
  } catch (err) {
    console.log("debug");
    console.log(err);
  }
}

insertData(udata);
