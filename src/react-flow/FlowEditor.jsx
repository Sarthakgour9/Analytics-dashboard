import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
  Panel,
} from "reactflow";
import CustomNode from "./CustomNode";
import useWindowSize from "../hooks/useWindowSize";

import "reactflow/dist/style.css";

const nodeTypes = {
  input: CustomNode,
  default: CustomNode,
  output: CustomNode,
};

const initialNodes = [
  {
    id: "1",
    position: { x: 250, y: 100 },
    data: { label: "Start" },
    type: "input",
  },
  {
    id: "2",
    position: { x: 500, y: 100 },
    data: { label: "Process" },
    type: "default",
  },
  {
    id: "3",
    position: { x: 750, y: 100 },
    data: { label: "End" },
    type: "output",
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: { stroke: '#007acc', strokeWidth: 2 } },
  { id: "e2-3", source: "2", target: "3", style: { stroke: '#007acc', strokeWidth: 2 } },
];

function FlowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeId, setNodeId] = useState(4);
  const { width, height } = useWindowSize();
  const isMobile = width < 768;

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, style: { stroke: '#007acc', strokeWidth: 2 } }, eds)),
    [setEdges]
  );

  const addNode = useCallback((type) => {
    const newNode = {
      id: `${nodeId}`,
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
      data: { label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node` },
      type,
    };
    setNodes((nds) => nds.concat(newNode));
    setNodeId((id) => id + 1);
  }, [nodeId, setNodes]);

  const containerHeight = isMobile ? `${height - 200}px` : "600px";

  return (
    <div style={{
      height: containerHeight,
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      backgroundColor: "var(--bg-primary)"
    }}>
      {/* Node Sidebar */}
      <div style={{
        width: isMobile ? "100%" : "200px",
        height: isMobile ? "auto" : "100%",
        padding: "20px",
        backgroundColor: "var(--bg-secondary)",
        borderRight: isMobile ? "none" : "1px solid var(--border)",
        borderBottom: isMobile ? "1px solid var(--border)" : "none",
        color: "var(--text-primary)"
      }}>
        <h3 style={{ marginTop: 0 }}>Nodes</h3>
        <div style={{ display: "flex", flexDirection: isMobile ? "row" : "column", gap: "10px" }}>
          <button
            onClick={() => addNode('input')}
            style={{
              flex: isMobile ? 1 : "none",
              padding: "10px",
              backgroundColor: "#4ade80",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Add Input
          </button>
          <button
            onClick={() => addNode('default')}
            style={{
              flex: isMobile ? 1 : "none",
              padding: "10px",
              backgroundColor: "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Add Process
          </button>
          <button
            onClick={() => addNode('output')}
            style={{
              flex: isMobile ? 1 : "none",
              padding: "10px",
              backgroundColor: "#f59e0b",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Add Output
          </button>
        </div>
      </div>

      {/* React Flow Canvas */}
      <div style={{ flex: 1, height: isMobile ? "calc(100% - 120px)" : "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <MiniMap style={{ backgroundColor: "var(--bg-secondary)" }} />
          <Controls style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }} />
          <Background color="#333" gap={16} />
          <Panel position="top-left">
            <div style={{ color: "var(--text-primary)", fontWeight: "bold" }}>N8n-like Workflow Editor</div>
          </Panel>
        </ReactFlow>
      </div>
    </div>
  );
}

export default FlowEditor;
