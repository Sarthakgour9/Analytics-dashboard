import { Handle, Position } from 'reactflow';

const CustomNode = ({ data }) => {
  return (
    <div style={{
      padding: '10px',
      border: '1px solid var(--border)',
      borderRadius: '5px',
      backgroundColor: 'var(--bg-secondary)',
      color: 'var(--text-primary)',
      minWidth: '100px',
      textAlign: 'center'
    }}>
      <Handle type="target" position={Position.Top} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
