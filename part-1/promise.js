async function demo() {
  const promise = fetch("https://jsonplaceholder.typicode.com/users");
  console.log(promise); // Promise { <pending> }

  const response = await promise;
  console.log(response); // Response object (status, headers, body stream)

  const data = await response.json();
  console.log(data); // Actual array of users
}
demo();


function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = Math.random() > 0.5; // 50% success
      if (ok) {
        resolve("📦 Data received");
      } else {
        reject("🚨 API error");
      }
    }, 1000);
  });
}

// Using then/catch
fakeApiCall()
  .then(data => {
    console.log("Success:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });



  function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = Math.random() > 0.5;
      if (ok) {
        resolve("📦 Data received");
      } else {
        reject("🚨 API error");
      }
    }, 1000);
  });
}

// Using async/await
async function fetchData() {
  try {
    const data = await fakeApiCall();
    console.log("Success:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();


/*


🔑 Key Differences

then/catch

Chained style

Can look “nested” if multiple steps

Good for short flows

async/await

Cleaner, looks like synchronous code

Easier to read when you have many steps

Must be inside an async function

✅ Both are doing exactly the same thing:

Call fakeApiCall() (returns a promise).

If it resolves → log success.

If it rejects → log error.
*/