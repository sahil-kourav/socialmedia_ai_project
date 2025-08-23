import { useState } from "react";

function CopyButton({ caption }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(caption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // hide message after 2s
  };

  return (
    <div>
      <button onClick={handleCopy}>{copied ? "Text Copied" : "Copy"}</button>
    </div>
  );
}

export default CopyButton;
