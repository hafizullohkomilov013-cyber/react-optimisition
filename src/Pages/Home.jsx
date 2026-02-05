import React, { useState, useEffect } from "react";

function Home() {
  console.log("home");
  
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("Xatolik !");
        }
        let result = await res.json();
        setData(result.slice(0, 12))
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Blog Posts</h1>
      <div
        className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      xl:grid-cols-4"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl 
                       transition-all duration-300 p-6 flex flex-col"
          >
            <span className="text-sm text-gray-400 mb-2">Post #{item.id}</span>

            <h2 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm mb-6 line-clamp-3">
              {item.body}
            </p>
            <button
              className="mt-auto bg-blue-600 text-white py-2 rounded-xl
                         hover:bg-blue-700 transition"
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
