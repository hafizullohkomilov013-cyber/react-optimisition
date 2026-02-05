import React, { useEffect, useState } from "react";

function Aboute() {
  console.log("aboute");

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
      <h1 className="text-3xl font-bold mb-8 text-center">Comments</h1>

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
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col"
          >
            <div className="mb-3">
              <h2 className="font-semibold text-lg line-clamp-1">
                {item.name}
              </h2>
              <p className="text-sm text-blue-600 break-all">{item.email}</p>
            </div>

            <p className="text-gray-600 text-sm line-clamp-4 mb-4">
              {item.body}
            </p>

            <button className="mt-auto border border-blue-600 text-blue-600 py-2 rounded-xl hover:bg-blue-600 hover:text-white transition">
              View comment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboute;
