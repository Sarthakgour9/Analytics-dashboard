import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";

function Column({ title, type, tasks, moveTask }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "CARD", 
    drop: (item) => {
      if (item.from !== type) {
        moveTask(item.task, item.from, type);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        padding: "12px",
        minHeight: "300px",
        borderRadius: "8px",
        background: isOver ? "var(--bg-hover)" : "var(--bg-tertiary)",
        border: "1px solid var(--border)",
        transition: "all 0.2s ease",
      }}
    >
      <h3 style={{ color: "var(--text-primary)", marginBottom: "12px" }}>{title}</h3>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} from={type} />
      ))}
    </div>
  );
}

export default Column;
