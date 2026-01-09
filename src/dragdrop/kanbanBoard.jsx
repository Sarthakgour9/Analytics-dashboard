import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import Column from "./Column";

const initialTasks = {
  todo: [
    { id: 1, title: "Design UI" },
    { id: 2, title: "Setup Project" },
  ],
  inprogress: [
    { id: 3, title: "Build Dashboard" },
  ],
  done: [
    { id: 4, title: "Requirement Analysis" },
  ],
};

function KanbanBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  const moveTask = (task, from, to) => {
    setTasks((prev) => ({
      ...prev,
      [from]: prev[from].filter((t) => t.id !== task.id),
      [to]: [...prev[to], task],
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", gap: "16px" }}>
        <Column title="To Do" type="todo" tasks={tasks.todo} moveTask={moveTask} />
        <Column title="In Progress" type="inprogress" tasks={tasks.inprogress} moveTask={moveTask} />
        <Column title="Done" type="done" tasks={tasks.done} moveTask={moveTask} />
      </div>
    </DndProvider>
  );
}

export default KanbanBoard;
