import React from "react";
import { useToast } from "../../hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast";

// Toaster: Renders all toast notifications using the custom ToastProvider and hooks.
export function Toaster() {
  // useToast: Custom hook to access toast state and actions.
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {/* Map through all toasts and render each one */}
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {/* ToastTitle: The main title of the toast */}
              {title && <ToastTitle>{title}</ToastTitle>}
              {/* ToastDescription: The description/message of the toast */}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {/* Optional action button(s) for the toast */}
            {action}
            {/* ToastClose: Button to close the toast */}
            <ToastClose />
          </Toast>
        );
      })}
      {/* ToastViewport: The container for all toasts */}
      <ToastViewport />
    </ToastProvider>
  );
}
// Toaster: Use this component at the root of your app to enable toast notifications.
