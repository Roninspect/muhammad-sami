'use client';

import { useState } from 'react';
import { LuCheck, LuCopy } from 'react-icons/lu';

export default function CopyButton({ text, children }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked; the number is still on the page to copy by hand.
    }
  };

  return (
    <button type="button" className="btn" onClick={copy} data-copied={copied}>
      {copied ? <LuCheck aria-hidden /> : <LuCopy aria-hidden />}
      <span aria-live="polite">{copied ? 'Copied' : children}</span>
    </button>
  );
}
