import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");

  function AddTask() {
    if (!task) {
      return alert("Please enter the task!");
    }

    setTasks([...tasks, task]);
    setTask("");
  }

  function RemoveTask(index: any) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    setTasks(newTasks);
  }

  return (
    <section className="todo-section">
      <div className="top-corner">
        <input
          type="text"
          placeholder="Enter Task"
          className="enter-input"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button className="add-btn" onClick={AddTask}>
          +
        </button>
      </div>
      <div className="tasks">
        {tasks.map((item, index) => (
          <div className="task" key={index}>
            <input type="text" value={item} className="text" disabled />
            <i className="fa fa-close" onClick={() => RemoveTask(index)}></i>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Todo;
