import React from "react";

// Copyright: Displays the copyright notice and contact information in the footer.
function Copyright() {
  return (
    <div style={{ textAlign: "center", padding: "16px 0", color: "#007bff", fontSize: "1.1rem", fontWeight: "500" }}>
      {/* Copyright year, author, and contact info */}
      © 2025 Ali Naim. All rights reserved. Contact: +96176949832 |{' '}
      {/* Email is clickable and opens the user's email client */}
      <a href="mailto:aliiiinaaiim@gmail.com" style={{ color: "#007bff", textDecoration: "underline", cursor: "pointer" }}>
        aliiiinaaiim@gmail.com
      </a>
    </div>
  );
}

// Copyright: Use this component in your footer or bottom of the page.
export default Copyright;