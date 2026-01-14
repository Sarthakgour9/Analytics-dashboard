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
        background: isOver ? "#000000" : "#000000",
      }}
    >
      <h3>{title}</h3>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} from={type} />
      ))}
    </div>
  );
}

export default Column;
