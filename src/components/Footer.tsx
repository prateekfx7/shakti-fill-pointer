import logoLight from "@/assets/logo-light.png";
import logoDark from "@/assets/logo-dark.png";

const Footer = () => {
  const isDark = document.documentElement.classList.contains("dark");

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="opacity-0 animate-fade-up">
            <img
              src={isDark ? logoDark : logoLight}
              alt="SHAKTI"
              className="h-5 w-auto dark:block hidden"
            />
            <img
              src={logoLight}
              alt="SHAKTI"
              className="h-5 w-auto dark:hidden block"
            />
          </div>

          <div className="flex gap-16 opacity-0 animate-fade-up delay-100">
            <div>
              <h4 className="text-sm font-medium mb-4 text-foreground">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Demos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
