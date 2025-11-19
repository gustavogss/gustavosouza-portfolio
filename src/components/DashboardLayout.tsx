import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { useTheme } from "@/contexts/ThemeContext";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hamburgerColor = theme === "dark" ? "#EEE" : "#500B40";

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar desktop */}
      {isDesktop && (
        <div style={{ width: "20%", flexShrink: 0 }}>
          <Sidebar />
        </div>
      )}

      {/* Hamburger mobile */}
      {!isDesktop && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 50,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: hamburgerColor,
          }}
        >
          <svg width="32" height="32" fill={hamburgerColor}>
            <path d="M4 8h24M4 16h24M4 24h24" />
          </svg>
        </button>
      )}

      {/* Drawer mobile */}
      {!isDesktop && open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 40,
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{ width: "80%", maxWidth: 260, height: "100%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar onCloseDrawer={() => setOpen(false)} />
          </div>
        </div>
      )}

      <main style={{ flexGrow: 1, overflowY: "auto", height: "100%" }}>
        {children}
      </main>
    </div>
  );
}
