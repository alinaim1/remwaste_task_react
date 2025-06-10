import React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "../../lib/utils";
import { Button } from "../Ui/button"; // Adjust the path based on your project structure

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef(function ToastViewport({ className, ...props }, ref) {
  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        // Bootstrap: fixed position, bottom right, z-index, flex column
        "position-fixed bottom-0 end-0 z-3 d-flex flex-column p-3",
        className
      )}
      {...props}
    />
  );
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;


const Toast = React.forwardRef(function Toast({ className, variant, onContinue, onBack, ...props }, ref) {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(
        "toast show align-items-center text-bg-light border-0 shadow rounded mb-3 toast-lg",
        variant === "destructive" ? "text-bg-danger" : "",
        className
      )}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      {...props}
    >
      {props.children}

      {/* Add buttons here */}
      <div className="mt-3 d-flex justify-content-end gap-2 px-3">
        <Button variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onContinue}>
          Continue
        </Button>
      </div>
    </ToastPrimitives.Root>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;


const ToastAction = React.forwardRef(function ToastAction({ className, ...props }, ref) {
  return (
    <ToastPrimitives.Action
      ref={ref}
      className={cn(
        // Bootstrap: btn btn-primary
        "btn btn-primary btn-sm ms-2",
        className
      )}
      {...props}
    />
  );
});
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef(function ToastClose({ className, ...props }, ref) {
  return (
    <ToastPrimitives.Close
      ref={ref}
      className={cn(
        // Bootstrap: btn-close position-absolute top-0 end-0 m-2
        "btn-close position-absolute top-0 end-0 m-2",
        className
      )}
      aria-label="Close"
      toast-close=""
      {...props}
    >
      {/* No icon needed, Bootstrap btn-close provides it */}
    </ToastPrimitives.Close>
  );
});
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef(function ToastTitle({ className, ...props }, ref) {
  return (
    <ToastPrimitives.Title
      ref={ref}
      className={cn("fw-bold mb-1", "text-warning", className)}
      {...props}
    />
  );
});
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef(function ToastDescription({ className, ...props }, ref) {
  return (
    <ToastPrimitives.Description
      ref={ref}
      className={cn("mb-0 small text-primary", className)}
      {...props}
    />
  );
});
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};