type NimbusErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type NimbusEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: NimbusErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __nimbusEvents?: NimbusEvents;
  }
}

export function reportNimbusError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__nimbusEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
