import React from "react";
import { cn } from "../../lib/utils"; // Utility to join classNames

const badgeVariants = {
  default: "badge bg-primary text-white custom-badge",
  secondary: "badge bg-secondary text-white custom-badge",
  destructive: "badge bg-danger text-white custom-badge",
  outline: "badge border border-dark text-dark bg-white custom-badge",
};

function Badge({ className = "", variant = "default", ...props }) {
  const variantClass = badgeVariants[variant] || badgeVariants.default;
  return (
    <span className={cn(variantClass, className)} {...props} style={{ borderColor: 'transparent' }} />
  );
}

export { Badge };