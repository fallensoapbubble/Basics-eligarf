import React from "react";

export default function Formzz() {
  const [action, setAction] = React.useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      console.log(json);
      setAction(`Success: ${JSON.stringify(json)}`);
    } catch (err) {
      console.error(err);
      setAction(" Error submitting form");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-orange-900 to-yellow-800">
      <form
        onSubmit={handleSubmit}
        onReset={() => setAction("Form reset")}
        className="w-full max-w-sm bg-gradient-to-tr from-yellow-200 via-yellow-300 to-yellow-400 
                   shadow-xl rounded-2xl p-6 flex flex-col gap-4 border-4 border-red-700"
      >
        <h2 className="text-2xl font-bold text-center text-red-800 drop-shadow">
          Fill form Please
        </h2>

        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-red-900 font-semibold"
          >
            Name
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="w-full p-2 rounded-lg border-2 border-red-700 focus:ring-2 focus:ring-yellow-500 
                       bg-yellow-50 text-red-900 placeholder-red-400 outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-red-900 font-semibold"
          >
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-lg border-2 border-red-700 focus:ring-2 focus:ring-yellow-500 
                       bg-yellow-50 text-red-900 placeholder-red-400 outline-none"
          />
        </div>

        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            className="flex-1 bg-red-700 hover:bg-red-800 text-yellow-200 font-bold py-2 rounded-xl shadow-md"
          >
            Submit
          </button>
          <button
            type="reset"
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-red-900 font-bold py-2 rounded-xl shadow-md"
          >
            Reset
          </button>
        </div>

        {/* {action && (
          <div className="mt-3 text-sm text-red-800 bg-yellow-100 p-2 rounded-lg shadow-inner">
            Action: <code>{action}</code>
          </div>
        )} */}
      </form>
    </div>
  );
}
