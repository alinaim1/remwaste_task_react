import React, { useState } from "react";

// Reusable Accordion component
export function Accordion({ children }) {
  return <div className="border rounded">{children}</div>;
}

// Accordion item
export function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="border-bottom">
      <button
        onClick={toggleAccordion}
        className="d-flex w-100 align-items-center justify-content-between py-3 fw-medium bg-transparent border-0 text-start"
        style={{ cursor: "pointer", outline: "none" }}
      >
        {title}
        <span
          style={{
            display: "inline-block",
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(180deg)" : "none",
          }}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div
          className="overflow-hidden text-body-secondary pb-3 pt-0"
          style={{ fontSize: "0.95rem" }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
