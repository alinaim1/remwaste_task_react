import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../button";
import { cn } from "../../../lib/utils";
import "bootstrap/dist/css/bootstrap.min.css";

const ToastContext = createContext();

const STATUS_STYLES = {
  success: {
    border: "2px solid #2563EB",
    bg: "bg-white",
    icon: "✔",
    accent: { color: "#2563EB" },
  },
  error: {
    border: "2px solid #FFD700",
    bg: "bg-white",
    icon: "✖",
    accent: { color: "#FFD700" },
  },
  info: {
    border: "2px solid #2563EB",
    bg: "bg-white",
    icon: "ℹ",
    accent: { color: "#2563EB" },
  },
};

const TOAST_AUTO_DISMISS = 4000;

function PremiumToast({
  open,
  status = "info",
  title,
  description,
  onClose,
  onContinue,
  onBack,
  continueText = "Continue",
  backText = "Back",
  showContinue = true,
  showBack = true,
}) {
  const style = STATUS_STYLES[status] || STATUS_STYLES.info;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -40, x: 40 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -40, x: 40 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className={cn(
            "shadow-lg p-4 mb-3 rounded-4 position-fixed top-0 end-0 mt-4 me-4",
            style.bg
          )}
          style={{
            zIndex: 1055,
            minWidth: 320,
            maxWidth: 400,
            border: style.border,
            boxShadow: "0 8px 32px rgba(37,99,235,0.08), 0 1.5px 8px #FFD70022",
          }}
        >
          <div className="d-flex align-items-center mb-2">
            <span
              className="me-2 fs-4 d-flex align-items-center justify-content-center"
              style={{ ...style.accent, width: 32, height: 32 }}
            >
              {style.icon}
            </span>
            {title && (
              <strong className="fs-5 flex-grow-1" style={{ color: "#2563EB" }}>{title}</strong>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="ms-2"
              aria-label="Close"
              onClick={onClose}
              style={{ color: "#2563EB", fontWeight: 700, fontSize: 18 }}
            >
              ×
            </Button>
          </div>
          {description && (
            <div className="mb-3 text-secondary" style={{ fontSize: 15 }}>{description}</div>
          )}
          <div className="d-flex gap-2 justify-content-end">
            {showBack && (
              <Button
                variant="outline"
                size="sm"
                style={{ borderColor: "#FFD700", color: "#FFD700" }}
                onClick={onBack}
              >
                {backText}
              </Button>
            )}
            {showContinue && (
              <Button
                variant="default"
                size="sm"
                style={{ background: "#2563EB", borderColor: "#2563EB", color: "#fff" }}
                onClick={onContinue}
              >
                {continueText}
              </Button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const showToast = useCallback((options) => {
    setToast({ ...options, open: true });
    if (options.autoDismiss !== false) {
      setTimeout(() => setToast((t) => t && { ...t, open: false }), options.duration || TOAST_AUTO_DISMISS);
    }
  }, []);
  const closeToast = useCallback(() => setToast((t) => t && { ...t, open: false }), []);

  return (
    <ToastContext.Provider value={{ showToast, closeToast }}>
      {children}
      <PremiumToast
        {...toast}
        open={toast?.open}
        onClose={closeToast}
        onContinue={toast?.onContinue}
        onBack={toast?.onBack}
        continueText={toast?.continueText}
        backText={toast?.backText}
        showContinue={toast?.showContinue}
        showBack={toast?.showBack}
      />
    </ToastContext.Provider>
  );
}

function useToast() {
  return useContext(ToastContext);
}

export { ToastProvider, useToast, PremiumToast };