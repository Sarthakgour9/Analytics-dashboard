import KanbanBoard from "../dragdrop/kanbanBoard";

function DragDropPage() {
  return (
    <div>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Kanban Board
      </h1>

      <KanbanBoard />
    </div>
  );
}

export default DragDropPage;
