import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Briefcase,
  FolderKanban,
  Settings,
  GraduationCap,
  FileText,
  Sun,
  Moon,
  ChevronDown,
  Code,
  Smartphone,
  Server,
  Cloud,
  Shield,
  Lock,
  Palette,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { gsap } from "gsap";

const menuItems = [
  { name: "Experiência", icon: Briefcase, path: "/experience" },
  { name: "Portfólio", icon: FolderKanban, path: "/portfolio" },
  {
    name: "Habilidades",
    icon: Settings,
    path: "/skills",
    subItems: [
      { name: "Frontend", icon: Code, path: "/skills/frontend" },
      { name: "Mobile", icon: Smartphone, path: "/skills/mobile" },
      { name: "Backend", icon: Server, path: "/skills/backend" },
      { name: "DevOps", icon: Cloud, path: "/skills/devops" },
      { name: "DevSecOps", icon: Shield, path: "/skills/devsecops" },
      { name: "Cyber", icon: Lock, path: "/skills/cyber" },
      { name: "Design", icon: Palette, path: "/skills/design" },
    ],
  },
  { name: "Formação", icon: GraduationCap, path: "/education" },
  { name: "Blog", icon: FileText, path: "/blog" },
];

type SidebarProps = {
  onCloseDrawer?: () => void;
};

export default function Sidebar({ onCloseDrawer }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(
    "Habilidades"
  );

  useEffect(() => {
    if (!menuRef.current) return;
    const items = menuRef.current.querySelectorAll(".menu-item");
    gsap.fromTo(
      items,
      { opacity: 0, x: -18 },
      {
        opacity: 1,
        x: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.12,
      }
    );
  }, []);

  const handleThemeToggle = () => {
    gsap.to(".theme-toggle", {
      rotation: "+=360",
      duration: 0.6,
      ease: "power2.inOut",
    });
    toggleTheme();
  };

  const handleNavClick = () => {
    if (onCloseDrawer) onCloseDrawer();
  };

  const sidebarBg = theme === "dark" ? "#212121" : "#EEEEEE";
  const menuTextColor = theme === "dark" ? "#EEE" : "#212121";
  const iconColor = theme === "dark" ? "#EEE" : "#500B40";

  return (
    <aside
      style={{ background: sidebarBg }}
      className="flex flex-col h-full p-6 w-full overflow-y-auto"
    >
      <div className="flex flex-col items-center mb-6 relative">
        <button
          onClick={handleThemeToggle}
          className="theme-toggle absolute top-0 right-0 p-2 rounded-lg hover:opacity-80 transition"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" style={{ color: "#EEE" }} />
          ) : (
            <Moon className="w-5 h-5" style={{ color: "#500B40" }} />
          )}
        </button>

        <img
          src="https://github.com/gustavogss.png"
          alt="Gustavo Souza"
          className="w-24 h-24 rounded-full border-4 border-primary mb-4"
        />
        <h2
          className="text-2xl font-bold text-center mb-1"
          style={{ color: menuTextColor }}
        >
          Gustavo Souza
        </h2>
        <p
          className="text-sm text-center opacity-80"
          style={{ color: menuTextColor }}
        >
          Full Stack Developer | DevSecOps
        </p>
      </div>

      <nav ref={menuRef} className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <div key={item.name} className="menu-item">
            {item.subItems ? (
              <>
                <button
                  onClick={() =>
                    setExpandedItem(
                      expandedItem === item.name ? null : item.name
                    )
                  }
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted transition"
                  style={{ color: menuTextColor }}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className="w-5 h-5"
                      style={{ color: iconColor }}
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedItem === item.name ? "rotate-180" : ""
                    }`}
                    style={{ color: iconColor }}
                  />
                </button>

                {expandedItem === item.name && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        onClick={handleNavClick}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                            isActive ? "font-medium" : "hover:opacity-80"
                          }`
                        }
                        style={{ color: menuTextColor }}
                      >
                        <subItem.icon
                          className="w-4 h-4"
                          style={{ color: iconColor }}
                        />
                        <span className="text-sm">{subItem.name}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive ? "font-medium" : "hover:opacity-80"
                  }`
                }
                style={{ color: menuTextColor }}
              >
                <item.icon className="w-5 h-5" style={{ color: iconColor }} />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="space-y-4 pt-6 border-t border-border">
        <a
          href="https://gustavosouza.dev.br/wp-content/curriculum/Profile.pdf"
          download
          className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition"
          onClick={handleNavClick}
        >
          <span className="font-medium">CV Download</span>
        </a>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/gustavogss"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:opacity-80 transition"
            style={{ color: theme === "dark" ? "#EEE" : "#212121" }}
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/gustavogss"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:opacity-80 transition"
            style={{ color: theme === "dark" ? "#EEE" : "#212121" }}
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/gustavogss"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:opacity-80 transition"
            style={{ color: theme === "dark" ? "#EEE" : "#212121" }}
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
