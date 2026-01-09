// src/editor/RichTextEditor.jsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

import EditorToolbar from "./Editortoolbar";

function RichTextEditor({ value, onChange, readOnly = false }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
    ],
    content: value,
    editable: !readOnly,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      {!readOnly && <EditorToolbar editor={editor} />}

      <EditorContent
        editor={editor}
        style={{
          padding: "12px",
          minHeight: "200px",
          outline: "none",
          fontSize: "15px",
          lineHeight: "1.6",
        }}
      />
    </div>
  );
}

export default RichTextEditor;
