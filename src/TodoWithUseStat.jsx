import React, { useEffect, useState } from "react";

export const TodoWithUseStat = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5 ">
      <form className="w-full max-w-md flex gap-3 mb-5">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          onClick={(e) => {
            e.preventDefault();
            if (value.trim()) {
              setTodos([
                ...todos,
                { complete: false, name: value, date: Date.now() },
              ]);
              setValue("");
            }
          }}
        >
          SUBMIT
        </button>
      </form>

      <div className="w-full max-w-md space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.date}
            className={`flex items-center justify-between p-4 border rounded-md bg-white shadow-sm ${
              todo.complete ? "opacity-75" : ""
            }`}
          >
            <span
              className={`flex-1 ${
                todo.complete ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.name}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setTodos(todos.filter((e) => e.date !== todo.date))
                }
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                DELETE
              </button>
              <button
                onClick={() =>
                  setTodos(
                    todos.map((e) =>
                      e.date === todo.date
                        ? { ...e, complete: !e.complete }
                        : e
                    )
                  )
                }
                className={`px-3 py-1 text-white rounded-md ${
                  todo.complete
                    ? "bg-gray-500 hover:bg-gray-600"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                {todo.complete ? "UNDO" : "COMPLETE"}
              </button>
              <button
                onClick={() => {
                  const newName = prompt("Edit task name:", todo.name);
                  if (newName) {
                    setTodos(
                      todos.map((e) =>
                        e.date === todo.date ? { ...e, name: newName } : e
                      )
                    );
                  }
                }}
                className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
              >
                EDIT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
