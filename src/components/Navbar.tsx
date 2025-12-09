import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

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
          <a href="#" className="flex items-center animate-fade-in" aria-label="Shakti home">
            <svg
              width="308"
              height="78"
              viewBox="0 0 308 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-auto md:h-5"
            >
              <path
                d="M26.304 77.568C21.376 77.568 16.96 76.768 13.056 75.168C9.152 73.568 6.016 71.2 3.648 68.064C1.344 64.928 0.128003 61.152 2.6226e-06 56.736H17.472C17.728 59.232 18.592 61.152 20.064 62.496C21.536 63.776 23.456 64.416 25.824 64.416C28.256 64.416 30.176 63.872 31.584 62.784C32.992 61.632 33.696 60.064 33.696 58.08C33.696 56.416 33.12 55.04 31.968 53.952C30.88 52.864 29.504 51.968 27.84 51.264C26.24 50.56 23.936 49.76 20.928 48.864C16.576 47.52 13.024 46.176 10.272 44.832C7.52 43.488 5.152 41.504 3.168 38.88C1.184 36.256 0.192003 32.832 0.192003 28.608C0.192003 22.336 2.464 17.44 7.008 13.92C11.552 10.336 17.472 8.54399 24.768 8.54399C32.192 8.54399 38.176 10.336 42.72 13.92C47.264 17.44 49.696 22.368 50.016 28.704H32.256C32.128 26.528 31.328 24.832 29.856 23.616C28.384 22.336 26.496 21.696 24.192 21.696C22.208 21.696 20.608 22.24 19.392 23.328C18.176 24.352 17.568 25.856 17.568 27.84C17.568 30.016 18.592 31.712 20.64 32.928C22.688 34.144 25.888 35.456 30.24 36.864C34.592 38.336 38.112 39.744 40.8 41.088C43.552 42.432 45.92 44.384 47.904 46.944C49.888 49.504 50.88 52.8 50.88 56.832C50.88 60.672 49.888 64.16 47.904 67.296C45.984 70.432 43.168 72.928 39.456 74.784C35.744 76.64 31.36 77.568 26.304 77.568ZM93.9105 22.752C100.055 22.752 104.983 24.8 108.695 28.896C112.407 32.928 114.263 38.496 114.263 45.6V76.896H97.9425V47.808C97.9425 44.224 97.0145 41.44 95.1585 39.456C93.3025 37.472 90.8065 36.48 87.6705 36.48C84.5345 36.48 82.0385 37.472 80.1825 39.456C78.3265 41.44 77.3985 44.224 77.3985 47.808V76.896H60.9825V5.856H77.3985V30.528C79.0625 28.16 81.3345 26.272 84.2145 24.864C87.0945 23.456 90.3265 22.752 93.9105 22.752ZM122.406 50.016C122.406 44.512 123.43 39.68 125.478 35.52C127.59 31.36 130.438 28.16 134.022 25.92C137.606 23.68 141.606 22.56 146.022 22.56C149.798 22.56 153.094 23.328 155.91 24.864C158.79 26.4 160.998 28.416 162.534 30.912V23.328H178.95V76.896H162.534V69.312C160.934 71.808 158.694 73.824 155.814 75.36C152.998 76.896 149.702 77.664 145.926 77.664C141.574 77.664 137.606 76.544 134.022 74.304C130.438 72 127.59 68.768 125.478 64.608C123.43 60.384 122.406 55.52 122.406 50.016ZM162.534 50.112C162.534 46.016 161.382 42.784 159.078 40.416C156.838 38.048 154.086 36.864 150.822 36.864C147.558 36.864 144.774 38.048 142.47 40.416C140.23 42.72 139.11 45.92 139.11 50.016C139.11 54.112 140.23 57.376 142.47 59.808C144.774 62.176 147.558 63.36 150.822 63.36C154.086 63.36 156.838 62.176 159.078 59.808C161.382 57.44 162.534 54.208 162.534 50.112ZM223.562 76.896L207.242 54.432V76.896H190.826V5.856H207.242V45.12L223.466 23.328H243.722L221.45 50.208L243.914 76.896H223.562ZM280.026 62.976V76.896H271.674C265.722 76.896 261.082 75.456 257.754 72.576C254.426 69.632 252.762 64.864 252.762 58.272V36.96H246.234V23.328H252.762V10.272H269.178V23.328H279.93V36.96H269.178V58.464C269.178 60.064 269.562 61.216 270.33 61.92C271.098 62.624 272.378 62.976 274.17 62.976H280.026ZM297.426 17.76C294.546 17.76 292.178 16.928 290.322 15.264C288.53 13.536 287.634 11.424 287.634 8.928C287.634 6.36799 288.53 4.25599 290.322 2.59199C292.178 0.863991 294.546 -9.53674e-06 297.426 -9.53674e-06C300.242 -9.53674e-06 302.546 0.863991 304.338 2.59199C306.194 4.25599 307.122 6.36799 307.122 8.928C307.122 11.424 306.194 13.536 304.338 15.264C302.546 16.928 300.242 17.76 297.426 17.76ZM305.586 23.328V76.896H289.17V23.328H305.586Z"
                fill={isDark ? "white" : "black"}
              />
            </svg>
          </a>

          <div className="hidden md:flex items-center gap-8 animate-fade-in delay-100">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="https://shaktidashboard.vercel.app/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Digital Twin
            </a>
            <a
              href="https://3d-model-n4cx.vercel.app/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              3d Model
            </a>
            <a
              href="https://substation-sld.vercel.app/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              SLD Model
            </a>
            <a
              href="https://shakti-ai-caller.vercel.app/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              SOS System
            </a>
          </div>

          <div className="flex items-center gap-3 animate-fade-in delay-200">
            <a
              href="https://shaktidashboard.vercel.app/"
              className="hidden md:inline-block text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Log in
            </a>
            <a
              href="https://shaktidashboard.vercel.app/"
              className="hidden md:inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:brightness-105 transition-all duration-300"
            >
              Sign up
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-secondary hover:bg-accent transition-all duration-300"
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
      </div>
    </nav>
  );
};

export default Navbar;
