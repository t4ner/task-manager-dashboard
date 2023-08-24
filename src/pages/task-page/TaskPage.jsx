import React, { useState } from "react";

function TaskPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCreateTask = () => {
    const newTask = {
      title,
      description,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <div className="flex flex-col rounded  w-96">
        <h1 className="text-2xl font-bold mb-4">Task Create</h1>
        <div className="mb-4">
          <label className="block text-lg font-bold text-sky-800">Title</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-lg text-black"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold text-sky-800">
          Description
          </label>
          <textarea
            className="mt-1 p-2 w-full border rounded-lg text-black"
            rows="1"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <button
          className="bg-sky-900 text-white py-2 px-4 rounded-lg font-bold hover:bg-sky-800"
          onClick={handleCreateTask}
        >
          Task Create
        </button>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Tasks</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <h3 className="text-xl font-medium">{task.title}</h3>
                <p className="text-xl text-gray-500">{task.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
