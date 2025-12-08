import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center animate-fade-in">
            <img
              src={isDark ? logoDark : logoLight}
              alt="SHAKTI"
              className="h-6 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 animate-fade-in delay-100">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#partners"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Partners
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary hover:bg-accent transition-all duration-300 animate-fade-in delay-200"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-foreground" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
