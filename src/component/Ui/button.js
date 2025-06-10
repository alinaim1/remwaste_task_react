// components/ui/button.js
import React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = {
  default: "btn btn-primary",
  destructive: "btn btn-danger",
  outline: "btn btn-outline-secondary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-link text-dark",
  link: "btn btn-link",
};

const buttonSizes = {
  default: "",
  sm: "btn-sm",
  lg: "btn-lg",
  icon: "btn-sm p-2", // or a custom icon size
};

function Button({ className = "", variant = "default", size = "default", asChild = false, ...props }) {
  const variantClass = buttonVariants[variant] || buttonVariants.default;
  const sizeClass = buttonSizes[size] || "";

  const finalClass = cn(variantClass, sizeClass, className);

  if (asChild) {
    return <span className={finalClass} {...props} />;
  }

  return <button className={finalClass} {...props} />;
}

export { Button };
