import { useDrag } from "react-dnd";

function TaskCard({ task, from }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CARD",     // ✅ SAME STRING
    item: { task, from },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: "10px",
        background: "#fff",
        marginBottom: "8px",
        borderRadius: "6px",
        cursor: "grab",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {task.title}
    </div>
  );
}

export default TaskCard;
