
function EditorToolbar({ editor }) {
  if (!editor) return null;

  const btn = (active) => ({
    padding: "6px 10px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    background: active ? "#2563eb" : "#fff",
    color: active ? "#fff" : "#111827",
    cursor: "pointer",
    fontSize: "14px",
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "6px",
        padding: "8px",
        borderBottom: "1px solid #e5e7eb",
        background: "#f9fafb",
      }}
    >
      <button
        style={btn(editor.isActive("bold"))}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        B
      </button>

      <button
        style={btn(editor.isActive("italic"))}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        I
      </button>

      <button
        style={btn(editor.isActive("underline"))}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        U
      </button>

      <button
        style={btn(editor.isActive("heading", { level: 1 }))}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        H1
      </button>

      <button
        style={btn(editor.isActive("heading", { level: 2 }))}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </button>

      <button
        style={btn(editor.isActive("bulletList"))}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        • List
      </button>

      <button
        style={btn(editor.isActive("orderedList"))}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        1. List
      </button>

      <button
        style={btn(editor.isActive("blockquote"))}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      >
        ❝
      </button>

      <button
        style={btn(editor.isActive("codeBlock"))}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      >
        {"</>"}
      </button>

      <button
        style={btn(false)}
        onClick={() => editor.chain().focus().undo().run()}
      >
        ↶
      </button>

      <button
        style={btn(false)}
        onClick={() => editor.chain().focus().redo().run()}
      >
        ↷
      </button>

      <button
        style={btn(false)}
        onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
      >
        Clear
      </button>
    </div>
  );
}

export default EditorToolbar;
