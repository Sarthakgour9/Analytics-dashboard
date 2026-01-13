import FlowEditor from "../react-flow/FlowEditor";

function FlowPage() {
  return (
    <div>
      <h1 style={{ fontSize: "28px", marginBottom: "16px" }}>
        Workflow Builder
      </h1>

      <FlowEditor />
    </div>
  );
}

export default FlowPage;
