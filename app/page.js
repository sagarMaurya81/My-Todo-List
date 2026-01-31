"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Home() {
  const inputRef = useRef();
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  // Fetch tasks on mount
  useEffect(() => {
    fetchData();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Add task
  const postData = async (taskText) => {
    await axios.post("/api/todo", { task: taskText }); // send plain string
    fetchData(); // refresh list
  };

  const addTask = () => {
    if (!task.trim()) return; // ignore empty
    postData(task);
    inputRef.current.value = "";
    setTask("");
  };

  // Fetch tasks
  const fetchData = async () => {
    const res = await axios.get("/api/todo");
    setTasklist(res.data);
  };

  // Delete task
  const deleteTask = async (id) => {
    await axios.delete("/api/todo", { data: { _id: id } });
    fetchData();
  };

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="bg-zinc-600 w-150 flex flex-col justify-center items-center p-3 rounded-md shadow-lg">
        <h2 className="flex justify-center items-center">
          <span>
            <img width={40} src="/doc.png" alt="doc" />
          </span>
          My Todo List
        </h2>

        {/* Input + Add button */}
        <div className="flex justify-center items-center my-4 gap-2">
          <input
            ref={inputRef}
            onChange={handleChange}
            type="text"
            placeholder="Enter your task"
            className="border-2 p-2 bg-zinc-200 text-black rounded-md focus:outline-none focus:border-zinc-200"
          />
          <button
            onClick={addTask}
            className="border-2 border-zinc-800 p-1 rounded-md shadow-lg hover:bg-zinc-500"
          >
            Add Task
          </button>
        </div>

        {/* Task list */}
        <div className="h-[60vh] overflow-auto w-full">
          <h2 className="font-bold my-2 text-center text-2xl">Your Tasks</h2>
          <ul className="flex flex-col gap-3">
            {tasklist.map((taskObj) => (
              <li key={taskObj._id} className="flex items-center my-2">
                <input
                  className="rounded-full mx-2"
                  type="checkbox"
                  id={taskObj._id}
                />
                <span>{taskObj.task}</span>
                <span>
                  <img
                    onClick={() => deleteTask(taskObj._id)}
                    className="cursor-pointer mx-2"
                    width={20}
                    src="/delete.gif"
                    alt="delete"
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
