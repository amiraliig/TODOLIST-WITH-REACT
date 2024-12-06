import React, { useReducer, useState, useEffect } from "react";
import reducer from "./reducer";
const TodoWithUsereducer = () => {
  const [value, setValue] = useState("");
  const [state, dispath] = useReducer(reducer, []);
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5 ">
      <div className="">TODO LIST WITH USEREDUCER</div>
      <form className="w-full max-w-md flex gap-3 mb-5">
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
          onChange={(e) => {
            setValue(e.target.value);
            console.log(value);
          }}
        />
        <input
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(state);

            dispath({
              type: "add",
              name: value,
              id: Date.now(),
              complete: false,
            });
          }}
        />
      </form>
      <div className="w-full max-w-md space-y-3">
        {state.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex items-center justify-between p-4 border rounded-md bg-white shadow-sm ${
                item.complete ? "opacity-50" : ""
              }`}
            >
              <span>{item.name}</span>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={() => {
                  dispath({ id: item.id, type: "delete" });
                }}
              >
                DELETE
              </button>
              <button
                className={`px-3  w-28 py-1 text-white rounded-md ${
                  item.complete
                    ? "bg-gray-500 hover:bg-gray-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
                onClick={() => {
                  dispath({ id: item.id, type: "complete" });
                }}
              >
                {item.complete ? "UNDO" : "COMPLETE"}
              </button>
              <button
                onClick={() => {
                  const newValue = prompt("Enter new value");
                  dispath({ type: "edit", newValue, id: item.id });
                }}
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                EDIT
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoWithUsereducer;
