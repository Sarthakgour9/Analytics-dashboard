import { useState } from "react";
import RichTextEditor from "../wysiwyg/RichTextEditor";

function WysiwygPage() {
  const [content, setContent] = useState("<p>Start writing idhar se...</p>");
  const [preview, setPreview] = useState(false);

  return (
    <div>
      <h1>Content Editor</h1>

      <button
        onClick={() => setPreview(!preview)}
        style={{
          marginBottom: "10px",
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid #e5e7eb",
          background: preview ? "#2563eb" : "#fff",
          color: preview ? "#fff" : "#111827",
          cursor: "pointer",
        }}
      >
        {preview ? "Edit Mode" : "Preview Mode"}
      </button>

      <RichTextEditor
        value={content}
        onChange={setContent}
        readOnly={preview}
      />

      {preview && (
        <>
          <h3 style={{ marginTop: "20px" }}>Rendered Output</h3>
          <div
            style={{
              background: "#fff",
              padding: "12px",
              borderRadius: "6px",
            }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </>
      )}
    </div>
  );
}

export default WysiwygPage;
