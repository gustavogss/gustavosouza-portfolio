import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Briefcase,
  FolderKanban,
  Settings,
  GraduationCap,
  FileText,
  Sun,
  Moon,
  Download,
  Github,
  Linkedin,
  Instagram,
  ChevronDown,
  Code,
  Smartphone,
  Server,
  Cloud,
  Shield,
  Lock,
  Palette,
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
  // Blog normalizado para o mesmo padrão dos demais
  { name: "Blog", icon: FileText, path: "/blog" },
];

export function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(
    "Habilidades"
  );

  useEffect(() => {
    if (menuRef.current) {
      const items = menuRef.current.querySelectorAll(".menu-item");
      gsap.fromTo(
        items,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  const handleThemeToggle = () => {
    gsap.to(".theme-toggle", {
      rotation: "+=360",
      duration: 0.6,
      ease: "power2.inOut",
    });
    toggleTheme();
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-sidebar-bg border-r border-border overflow-y-auto scrollbar-hide scroll-smooth">
      <div className="flex flex-col h-full p-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-8 relative">
          <button
            onClick={handleThemeToggle}
            className="theme-toggle absolute top-0 right-0 p-2 rounded-lg hover:bg-muted transition-smooth"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-sidebar-text" />
            ) : (
              <Moon className="w-5 h-5 text-sidebar-text" />
            )}
          </button>

          <img
            src="https://github.com/gustavogss.png"
            alt="Gustavo Souza"
            className="w-24 h-24 rounded-full border-4 border-primary mb-4"
          />
          <h2 className="text-2xl font-bold text-sidebar-text text-center mb-2">
            Gustavo Souza
          </h2>
          <p className="text-sm text-sidebar-text opacity-80 text-center">
            Full Stack Developer | DevSecOps
          </p>
        </div>

        {/* Menu */}
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
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sidebar-text hover:text-sidebar-hover hover:bg-muted transition-smooth"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedItem === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedItem === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-2 rounded-lg transition-smooth ${
                              isActive
                                ? "text-sidebar-active-text bg-muted font-medium"
                                : "text-sidebar-text hover:text-sidebar-hover hover:bg-muted"
                            }`
                          }
                        >
                          <subItem.icon className="w-4 h-4" />
                          <span className="text-sm">{subItem.name}</span>
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                // Todos os NavLinks (incluindo Blog) seguem o mesmo padrão aqui
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                      isActive
                        ? "text-sidebar-active-text bg-muted font-medium"
                        : "text-sidebar-text hover:text-sidebar-hover hover:bg-muted"
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
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
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-smooth animation-pulse-subtle"
          >
            <Download className="w-4 h-4" />
            <span className="font-medium">CV Download</span>
          </a>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/gustavogss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-sidebar-text hover:text-sidebar-hover hover:scale-110 transition-smooth"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/gustavogss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-sidebar-text hover:text-sidebar-hover hover:scale-110 transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/gustavogss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-sidebar-text hover:text-sidebar-hover hover:scale-110 transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
