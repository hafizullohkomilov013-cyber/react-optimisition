import React, { useEffect, useState } from "react";

function Contact() {
  console.log("contact");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error("Xatolik!");
        }

        const result = await res.json();
        setData(result.slice(0, 12));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Contacts</h1>

      {/* GRID */}
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
          >
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
              {user.name.charAt(0)}
            </div>

            <h2 className="font-bold text-lg mb-1">{user.name}</h2>

            <p className="text-sm text-gray-600 mb-2">@{user.username}</p>

            <p className="text-sm text-blue-600 break-all mb-2">{user.email}</p>

            <p className="text-sm text-gray-500 mb-3">📍 {user.address.city}</p>

            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 underline mb-4"
            >
              {user.website}
            </a>

            <button className="mt-auto bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
